/**
 * MyPath Portfolio PDF Export
 * Opens a print-ready window so the user can save as PDF.
 * Works in all modern browsers without any extra dependencies.
 */

import type { PortfolioRow } from "./supabase-hooks";

export type ProfileData = {
  name: string | null;
  grade: string | null;
  country: string | null;
  school: string | null;
  city: string | null;
  mini_bio: string | null;
};

const SECTION_LABELS: Record<string, string> = {
  achievements: "Achievements",
  projects: "Projects",
  research: "Research",
  leadership: "Leadership",
  volunteering: "Volunteering",
  certificates: "Certificates",
  skills: "Skills",
  awards: "Awards",
  about: "About Me",
  story: "My Story",
};

const SECTION_ORDER = [
  "achievements", "projects", "research", "leadership",
  "volunteering", "certificates", "skills", "awards", "about", "story",
];

export function exportPortfolioPDF(profile: ProfileData, items: PortfolioRow[]): void {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
  const studentName = profile.name ?? "Student";

  // Group by section
  const sections = new Map<string, PortfolioRow[]>();
  for (const item of items) {
    const list = sections.get(item.section) ?? [];
    list.push(item);
    sections.set(item.section, list);
  }

  const ordered = SECTION_ORDER
    .filter((s) => sections.has(s))
    .map((s) => ({ key: s, items: sections.get(s)! }));

  // Any unlisted section keys
  for (const [key, sectionItems] of sections.entries()) {
    if (!SECTION_ORDER.includes(key)) {
      ordered.push({ key, items: sectionItems });
    }
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>MyPath Portfolio — ${esc(studentName)}</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Inter',-apple-system,sans-serif;color:#2E211A;background:#fff;font-size:10.5pt;line-height:1.55;padding:0}
  .page{max-width:100%;padding:32pt 44pt}
  .header{border-bottom:1.5pt solid #994636;padding-bottom:14pt;margin-bottom:20pt}
  .header h1{font-size:20pt;font-weight:700;color:#2E211A;letter-spacing:-0.02em}
  .meta{margin-top:5pt;font-size:9pt;color:#7C6A5A}
  .meta span+span::before{content:' · '}
  .bio{margin-top:8pt;font-size:10pt;font-style:italic;color:#4A3A2E;padding:8pt;background:#FBF7EC;border-radius:4pt}
  .section{margin-bottom:20pt}
  .section-title{font-size:10pt;font-weight:700;color:#994636;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:8pt;padding-bottom:3pt;border-bottom:0.5pt solid #EFE6D2}
  .item{margin-bottom:10pt;padding-bottom:10pt;border-bottom:0.3pt solid #EFE6D2}
  .item:last-child{border-bottom:none;padding-bottom:0}
  .item-title{font-size:10.5pt;font-weight:600;color:#2E211A}
  .item-date{font-size:8.5pt;color:#7C6A5A;margin-top:1pt}
  .item-desc{font-size:9.5pt;color:#4A3A2E;margin-top:4pt;line-height:1.55}
  .footer{margin-top:24pt;padding-top:10pt;border-top:0.5pt solid #EFE6D2;font-size:8pt;color:#7C6A5A;display:flex;justify-content:space-between}
  .empty-note{font-size:10pt;font-style:italic;color:#A08070}
  @media print{
    body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
    .header{border-bottom-color:#994636!important}
    .section-title{color:#994636!important}
  }
</style>
</head>
<body>
<div class="page">
  <div class="header">
    <h1>${esc(studentName)}</h1>
    <div class="meta">
      ${profile.grade ? `<span>Grade ${esc(profile.grade)}</span>` : ""}
      ${profile.school ? `<span>${esc(profile.school)}</span>` : ""}
      ${profile.city ? `<span>${esc(profile.city)}</span>` : ""}
      ${profile.country ? `<span>${esc(profile.country)}</span>` : ""}
      <span>Generated ${date}</span>
    </div>
    ${profile.mini_bio ? `<div class="bio">"${esc(profile.mini_bio)}"</div>` : ""}
  </div>

  ${ordered.length === 0
    ? '<p class="empty-note">No portfolio items added yet.</p>'
    : ordered.map(({ key, items: si }) => `
  <div class="section">
    <div class="section-title">${esc(SECTION_LABELS[key] ?? key)}</div>
    ${si.map((item) => `
    <div class="item">
      <div class="item-title">${esc(item.title)}</div>
      ${item.date ? `<div class="item-date">${esc(item.date)}</div>` : ""}
      ${item.description ? `<div class="item-desc">${esc(item.description).replace(/\n/g, "<br/>")}</div>` : ""}
    </div>`).join("")}
  </div>`).join("")}

  <div class="footer">
    <span>MyPath Student Portfolio · mypath-your-navigator.lovable.app</span>
    <span>${esc(studentName)} · ${date}</span>
  </div>
</div>
</body>
</html>`;

  const win = window.open("", "_blank", "width=900,height=700,noopener");
  if (!win) {
    alert("Please allow pop-ups for this site to download your portfolio as PDF.");
    return;
  }
  win.document.write(html);
  win.document.close();
  win.focus();
  // Give fonts a moment to load before print dialog appears
  setTimeout(() => { win.print(); }, 700);
}

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
