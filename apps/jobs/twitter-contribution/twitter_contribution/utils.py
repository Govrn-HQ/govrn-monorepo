import datetime 
from twitter_contribution.constants import LOOKBACK_SECONDS


def get_lookback_window():
    return datetime.datetime.utcnow() - datetime.timedelta(seconds=LOOKBACK_SECONDS)


def now():
    return datetime.datetime.utcnow().isoformat()