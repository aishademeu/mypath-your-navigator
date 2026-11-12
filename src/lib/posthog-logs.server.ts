import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs";

let logger: ReturnType<LoggerProvider["getLogger"]> | undefined;
let loggerProvider: LoggerProvider | undefined;

function getConfiguredLogger(): ReturnType<LoggerProvider["getLogger"]> | undefined {
  if (logger) return logger;

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
    return undefined;
  }

  loggerProvider = new LoggerProvider({
    resource: resourceFromAttributes({ "service.name": "mypath-tanstack-server" }),
    processors: [
      new BatchLogRecordProcessor(
        new OTLPLogExporter({
          url: `${host.replace(/\/$/, "")}/i/v1/logs`,
          headers: { Authorization: `Bearer ${token}` },
        }),
      ),
    ],
  });
  logger = loggerProvider.getLogger("mypath.posthog.server");

  for (const signal of ["SIGINT", "SIGTERM"] as const) {
    process.once(signal, () => {
      void loggerProvider?.shutdown().catch(() => {});
    });
  }

  return logger;
}

export function emitPostHogServerLog(body: string, severityText: "info" | "warn" | "error"): void {
  getConfiguredLogger()?.emit({ severityText, body });
}
