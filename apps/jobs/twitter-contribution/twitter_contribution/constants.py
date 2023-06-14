import os

PROTOCOL_TOKEN: str = os.environ.get("PROTOCOL_TOKEN", "")
PROTOCOL_URL: str = os.environ.get("PROTOCOL_URL", "")
IS_DEV: bool = os.environ.get("IS_DEV", "true").lower() == "true"
LOOKBACK_SECONDS: str = int(os.environ.get("LOOKBACK_SECONDS", "10000"))


def load_env():
    global PROTOCOL_TOKEN
    PROTOCOL_TOKEN = os.environ.get("PROTOCOL_TOKEN", "")
    global PROTOCOL_URL
    PROTOCOL_URL = os.environ.get("PROTOCOL_URL", "")
    global IS_DEV
    IS_DEV = os.environ.get("IS_DEV", "true").lower() == "true"
    global LOOKBACK_SECONDS
    LOOKBACK_SECONDS = int(os.environ.get("LOOKBACK_SECONDS", "10000"))


JOB_NAME: str = "twitter-contribution"
