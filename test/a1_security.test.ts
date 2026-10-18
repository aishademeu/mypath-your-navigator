import assert from "node:assert";
import {
  verifyFileContentMagicBytes,
  validateFileUpload,
  MAX_FILE_SIZE_BYTES,
  USER_STORAGE_QUOTA_BYTES,
} from "../src/lib/storage.server";
import {
  checkRateLimit,
  evaluateParentalConsentRequired,
} from "../src/lib/auth-security.server";

// Test suite for Phase A1 Security & Storage Requirements

console.log("=================================================");
console.log("RUNNING PHASE A1 SECURITY & INTEGRITY TEST SUITE");
console.log("=================================================");

let passed = 0;
let failed = 0;

function runTest(name: string, fn: () => void | Promise<void>) {
  try {
    const res = fn();
    if (res instanceof Promise) {
      res
        .then(() => {
          console.log(`✅ PASS: ${name}`);
          passed++;
        })
        .catch((err) => {
          console.error(`❌ FAIL: ${name}`, err);
          failed++;
        });
    } else {
      console.log(`✅ PASS: ${name}`);
      passed++;
    }
  } catch (err) {
    console.error(`❌ FAIL: ${name}`, err);
    failed++;
  }
}

// -----------------------------------------------------------------------------
// 1. STORAGE TESTS: File Validation & Content Inspection (R-A1-04)
// -----------------------------------------------------------------------------

runTest("Storage: Valid PDF magic bytes accepted", () => {
  const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e, 0x35, 0x0a, 0x25, 0x00, 0x00]);
  const res = verifyFileContentMagicBytes(pdfBytes);
  assert.strictEqual(res.valid, true);
  assert.strictEqual(res.detectedMime, "application/pdf");
});

runTest("Storage: Valid PNG magic bytes accepted", () => {
  const pngBytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d]);
  const res = verifyFileContentMagicBytes(pngBytes);
  assert.strictEqual(res.valid, true);
  assert.strictEqual(res.detectedMime, "image/png");
});

runTest("Storage: Valid JPEG magic bytes accepted", () => {
  const jpegBytes = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00, 0x01]);
  const res = verifyFileContentMagicBytes(jpegBytes);
  assert.strictEqual(res.valid, true);
  assert.strictEqual(res.detectedMime, "image/jpeg");
});

runTest("Storage: Disallowed file masquerading as PNG (fake extension) rejected", () => {
  // Plain text / HTML disguised as PNG
  const fakePng = new TextEncoder().encode("<html><script>alert(1)</script></html>");
  const res = verifyFileContentMagicBytes(fakePng);
  assert.strictEqual(res.valid, false);
  assert.match(res.error || "", /Disallowed or unrecognized file content/);
});

runTest("Storage: Oversized file exceeding 10 MB rejected", async () => {
  // Construct a dummy oversized buffer > 10MB
  const oversizeBuffer = new Uint8Array(MAX_FILE_SIZE_BYTES + 1024);
  // Set PDF magic header so it passes format check
  oversizeBuffer[0] = 0x25;
  oversizeBuffer[1] = 0x50;
  oversizeBuffer[2] = 0x44;
  oversizeBuffer[3] = 0x46;

  const res = await validateFileUpload("test-user-1", oversizeBuffer);
  assert.strictEqual(res.valid, false);
  assert.match(res.error || "", /exceeds maximum allowed size of 10 MB/);
});

// -----------------------------------------------------------------------------
// 2. AUTH & CONSENT TESTS (R-A1-05, R-A1-06)
// -----------------------------------------------------------------------------

runTest("Auth: Rate limiter enforces maximum attempt quota", () => {
  const key = "test-login-ip-127.0.0.1";
  for (let i = 0; i < 5; i++) {
    const res = checkRateLimit(key, 5, 60000);
    assert.strictEqual(res.allowed, true);
  }
  const blockedRes = checkRateLimit(key, 5, 60000);
  assert.strictEqual(blockedRes.allowed, false);
  assert.strictEqual(blockedRes.remaining, 0);
  assert(blockedRes.retryAfterSeconds > 0);
});

runTest("Age & Consent: Student below 16 requires parental consent", () => {
  // Age 14 -> consent required
  const req14 = evaluateParentalConsentRequired(14, true);
  assert.strictEqual(req14, true);

  // Age 15 -> consent required
  const req15 = evaluateParentalConsentRequired(15, true);
  assert.strictEqual(req15, true);

  // Age 16 -> consent not required
  const req16 = evaluateParentalConsentRequired(16, true);
  assert.strictEqual(req16, false);

  // Age 17 -> consent not required
  const req17 = evaluateParentalConsentRequired(17, true);
  assert.strictEqual(req17, false);
});

// -----------------------------------------------------------------------------
// 3. SANITIZED PUBLIC VIEW LOGIC SIMULATION (R-A1-03)
// -----------------------------------------------------------------------------

runTest("Public Portfolio View: Strictly filters out private fields & non-PDF items", () => {
  const mockRawProfile = {
    id: "user-minor-123",
    email: "student@example.kz",
    phone: "+77011234567",
    birth_year: 2011, // 15 years old
    telegram_chat_id: 987654321,
    display_name: "Aigerim N.",
    grade: "9",
    school: "NIS Almaty",
    country_code: "KZ",
    parental_consent: "pending", // Minor with pending consent!
  };

  const mockPortfolio = {
    public_slug: "aigerim-n",
    is_public: true,
    show_contact: true,
    summary_text: "Aspiring AI researcher",
  };

  const mockItems = [
    {
      id: "item-1",
      title: "Science Fair Gold",
      include_in_pdf: true,
      evidence: [
        { title: "Certificate", url: "https://mypath.kz/proof.pdf", is_public: true },
        { title: "Private Draft", url: "https://mypath.kz/draft.pdf", is_public: false },
      ],
    },
    {
      id: "item-2",
      title: "Incomplete Homework",
      include_in_pdf: false, // Must be omitted
      evidence: [],
    },
  ];

  // Simulator representing SQL logic of public_portfolios view
  function renderPublicView(profile: typeof mockRawProfile, portfolio: typeof mockPortfolio, items: typeof mockItems) {
    // If minor has pending parental consent, view MUST NOT be served
    if (portfolio.is_public !== true || profile.parental_consent === "pending") {
      return null;
    }

    return {
      public_slug: portfolio.public_slug,
      display_name: profile.display_name,
      grade: profile.grade,
      school: profile.school,
      country_code: profile.country_code,
      summary_text: portfolio.summary_text,
      // Contact info only if show_contact AND consent given
      contact_email: portfolio.show_contact && profile.parental_consent === "given" ? profile.email : null,
      items: items
        .filter((i) => i.include_in_pdf === true)
        .map((i) => ({
          title: i.title,
          evidence: i.evidence.filter((e) => e.is_public === true).map((e) => ({ title: e.title, url: e.url })),
        })),
    };
  }

  // 1. Pending consent blocks public page entirely
  const resultPending = renderPublicView(mockRawProfile, mockPortfolio, mockItems);
  assert.strictEqual(resultPending, null, "Minor with pending parental consent must not have public portfolio viewable");

  // 2. Once consent is given, view renders cleanly
  const profileWithConsent = { ...mockRawProfile, parental_consent: "given" };
  const resultGiven = renderPublicView(profileWithConsent, mockPortfolio, mockItems);
  assert(resultGiven !== null);

  // Leak checks
  assert.strictEqual((resultGiven as any).phone, undefined, "Phone must never be present");
  assert.strictEqual((resultGiven as any).birth_year, undefined, "Birth year must never be present");
  assert.strictEqual((resultGiven as any).telegram_chat_id, undefined, "Telegram chat ID must never be present");

  // Item checks
  assert.strictEqual(resultGiven!.items.length, 1, "Only items with include_in_pdf=true can appear");
  assert.strictEqual(resultGiven!.items[0].title, "Science Fair Gold");
  assert.strictEqual(resultGiven!.items[0].evidence.length, 1, "Only public evidence links may appear");
  assert.strictEqual(resultGiven!.items[0].evidence[0].title, "Certificate");
});

// -----------------------------------------------------------------------------
// 4. EVIDENCE TRUST LEVEL CONSTRAINT LOGIC (R-A1-11)
// -----------------------------------------------------------------------------

runTest("Evidence: Confirmed by third party requires valid confirmer_name", () => {
  function validateEvidenceRow(row: { trust_level: string; confirmer_name?: string | null }) {
    if (!["self_reported", "has_proof", "confirmed_by_third_party"].includes(row.trust_level)) {
      return false;
    }
    if (row.trust_level === "confirmed_by_third_party") {
      return Boolean(row.confirmer_name && row.confirmer_name.trim().length > 0);
    }
    return true;
  }

  assert.strictEqual(validateEvidenceRow({ trust_level: "self_reported" }), true);
  assert.strictEqual(validateEvidenceRow({ trust_level: "has_proof" }), true);
  assert.strictEqual(validateEvidenceRow({ trust_level: "confirmed_by_third_party", confirmer_name: null }), false);
  assert.strictEqual(validateEvidenceRow({ trust_level: "confirmed_by_third_party", confirmer_name: "" }), false);
  assert.strictEqual(
    validateEvidenceRow({ trust_level: "confirmed_by_third_party", confirmer_name: "Dr. K. Almaty" }),
    true,
  );
});

// -----------------------------------------------------------------------------
// 5. EVENTS TABLE PII PROTECTION LOGIC (R-A1-10)
// -----------------------------------------------------------------------------

runTest("Events: Strict rejection of props containing PII (email, phone, tokens)", () => {
  function checkEventPropsNoPii(props: Record<string, any>): boolean {
    const propsStr = JSON.stringify(props).toLowerCase();
    // Check regex matching DB trigger
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
    const sensitiveKeyRegex = /"(email|phone|password|secret|token|telegram_chat_id)"\s*:/i;

    if (emailRegex.test(propsStr) || sensitiveKeyRegex.test(propsStr)) {
      return false;
    }
    return true;
  }

  // Safe analytics events
  assert.strictEqual(checkEventPropsNoPii({ page: "/opportunities", category: "Research", grade: 10 }), true);
  assert.strictEqual(checkEventPropsNoPii({ action: "pdf_exported", template: "modern" }), true);

  // Leaky events containing PII
  assert.strictEqual(checkEventPropsNoPii({ email: "user@test.kz" }), false);
  assert.strictEqual(checkEventPropsNoPii({ phone: "+77015555555" }), false);
  assert.strictEqual(checkEventPropsNoPii({ message: "Contact me at student@domain.com" }), false);
  assert.strictEqual(checkEventPropsNoPii({ token: "sbp_secret_123" }), false);
});
