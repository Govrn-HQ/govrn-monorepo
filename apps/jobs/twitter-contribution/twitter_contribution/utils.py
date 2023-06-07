import logging
import json_log_formatter
from datetime import datetime, timedelta, timezone
from .constants import LOOKBACK_SECONDS


def get_lookback_window() -> datetime:
    return datetime.now(timezone.utc) - timedelta(seconds=LOOKBACK_SECONDS)


def now() -> datetime:
    return datetime.now(timezone.utc)


handler = logging.StreamHandler()
formatter = json_log_formatter.JSONFormatter(
    "%(asctime)s [%(threadName)-12.12s] [%(levelname)-5.5s]  %(message)s"
)
handler.setFormatter(formatter)


def get_logger(name: str):
    logger = logging.getLogger(name)
    logger.addHandler(handler)
    logger.setLevel(logging.INFO)

    return logger
