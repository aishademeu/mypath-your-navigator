import atexit
import logging
import os
import sys
from typing import Optional

_logger: Optional[logging.Logger] = None
_logger_provider = None
_shutdown_registered = False


def _shutdown() -> None:
    if _logger_provider is None:
        return
    try:
        _logger_provider.shutdown()
    except Exception:
        pass


def get_posthog_logger() -> logging.Logger:
    global _logger, _logger_provider, _shutdown_registered

    if _logger is not None:
        return _logger

    logger = logging.getLogger("mypath.posthog.telegram_listener")
    logger.setLevel(logging.INFO)
    logger.propagate = False

    token = os.getenv("POSTHOG_PROJECT_TOKEN")
    host = os.getenv("POSTHOG_HOST")
    if not token or not host:
        variable_name = "POSTHOG_PROJECT_TOKEN" if not token else "POSTHOG_HOST"
        print(
            f"{variable_name} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once {variable_name} is configured",
            file=sys.stderr,
        )
        _logger = logger
        return logger

    try:
        from opentelemetry.exporter.otlp.proto.http._log_exporter import OTLPLogExporter
        from opentelemetry.sdk._logs import LoggerProvider, LoggingHandler
        from opentelemetry.sdk._logs.export import BatchLogRecordProcessor
        from opentelemetry.sdk.resources import Resource

        _logger_provider = LoggerProvider(
            resource=Resource.create({"service.name": "mypath-telegram-listener"})
        )
        exporter = OTLPLogExporter(
            endpoint=f"{host.rstrip('/')}/i/v1/logs",
            headers={"Authorization": f"Bearer {token}"},
        )
        _logger_provider.add_log_record_processor(BatchLogRecordProcessor(exporter))
        logger.addHandler(LoggingHandler(logger_provider=_logger_provider))

        if not _shutdown_registered:
            atexit.register(_shutdown)
            _shutdown_registered = True
    except ImportError:
        print("OpenTelemetry log packages are not installed; PostHog log capture is disabled.", file=sys.stderr)

    _logger = logger
    return logger
