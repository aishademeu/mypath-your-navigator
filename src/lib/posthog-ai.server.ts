import { randomUUID } from "node:crypto";
import { PostHog } from "posthog-node";

export interface AIObservabilityContext {
  distinctId: string;
  sessionId: string | null;
  traceId: string;
  operation: string;
}

interface AIGeneration {
  context?: AIObservabilityContext;
  provider: string;
  model: string;
  input: Array<{ role: "system" | "user"; content: string }>;
  output?: string;
  latency: number;
  httpStatus?: number;
  inputTokens?: number;
  outputTokens?: number;
  temperature?: number;
  maxTokens?: number;
  error?: unknown;
}

let posthogClient: PostHog | null = null;

function getPostHogClient(): PostHog | null {
  const token =
    process.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN ||
    import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.VITE_PUBLIC_POSTHOG_HOST || import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

  if (!token || !host) {
    if (process.env.NODE_ENV !== "production") {
      const variableName = token ? "VITE_PUBLIC_POSTHOG_HOST" : "VITE_PUBLIC_POSTHOG_PROJECT_TOKEN";
      console.warn(
        `${variableName} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${variableName} is configured`,
      );
    }
    return null;
  }

  if (!posthogClient) {
    posthogClient = new PostHog(token, {
      host,
      privacyMode: false,
      enableExceptionAutocapture: false,
      flushAt: 1,
      flushInterval: 0,
      requestTimeout: 2000,
      fetchRetryCount: 0,
    });
  }

  return posthogClient;
}

export function createAIObservabilityContext(
  distinctId: string,
  sessionId: string | null,
  operation: string,
): AIObservabilityContext {
  return {
    distinctId,
    sessionId,
    traceId: randomUUID(),
    operation,
  };
}

export async function captureAIGeneration(generation: AIGeneration): Promise<void> {
  if (!generation.context) return;

  const client = getPostHogClient();
  if (!client) return;

  try {
    client.capture({
      distinctId: generation.context.distinctId,
      event: "$ai_generation",
      properties: {
        $ai_trace_id: generation.context.traceId,
        $ai_session_id: generation.context.sessionId,
        $ai_span_name: generation.context.operation,
        $ai_model: generation.model,
        $ai_provider: generation.provider,
        $ai_input: generation.input,
        $ai_output_choices: generation.output
          ? [{ role: "assistant", content: generation.output }]
          : undefined,
        $ai_input_tokens: generation.inputTokens,
        $ai_output_tokens: generation.outputTokens,
        $ai_latency: generation.latency,
        $ai_http_status: generation.httpStatus,
        $ai_temperature: generation.temperature,
        $ai_max_tokens: generation.maxTokens,
        $ai_is_error: Boolean(generation.error),
        $ai_error: generation.error instanceof Error ? generation.error.name : undefined,
      },
    });
    await client.flush().catch(() => {});
  } catch {
    // Analytics must never affect an AI response.
  }
}
