from datetime import datetime, timedelta, timezone
from twitter_contribution.constants import LOOKBACK_SECONDS


def get_lookback_window() -> datetime:
    return datetime.now(timezone.utc) - timedelta(seconds=LOOKBACK_SECONDS)


def now() -> datetime:
    return datetime.now(timezone.utc)
