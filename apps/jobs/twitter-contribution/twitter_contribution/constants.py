import os

PROTOCOL_TOKEN: str = os.environ["PROTOCOL_TOKEN"]
PROTOCOL_URL: str = os.environ["PROTOCOL_URL"]
IS_DEV: bool = os.environ["IS_DEV"].lower() == "true"
LOOKBACK_SECONDS: str = int(os.environ["LOOKBACK_SECONDS"])

JOB_NAME: str = "twitter-contribution"
