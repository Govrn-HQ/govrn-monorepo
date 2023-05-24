import asyncio
import constants

from twitter_contribution.logging import get_logger
from twitter_contribution.graphql import (
    create_job_run,
    create_twitter_hashtag_contribution,
    get_guilds_with_twitter_integration,
)
from scrape import retrieve_tweets

logger = get_logger(__name__)
# TODO: extract commonly used queries and logging from kevin malone


def get_lookback():
    pass


async def main():
    # invocation and config
    # TODO: runtime config / parameters
    guilds = await get_guilds_with_twitter_integration()

    # TODO: check efficiency of order of operations; e.g. should we get all
    # users with twitters, then check their tweets against hashtags? or should we
    # sequentially query all hashtags specified in the integration?
    # Listing all users with twitters precludes creating accounts from tweets
    # Seems like checking hashtags gets us bigger reach.. TODO is to instrument
    for guild in guilds:
        logger.info(f"Processing guild {guild['name']}")
        for integration in guild["twitter_integration"]:
            logger.info(f"Processing integration {integration['id']}")
            for hashtag in integration["hashtag"]:
                logger.info(f"Processing hashtag {hashtag['hashtag']}")
                tweets = await retrieve_tweets(
                    hashtag,
                )


asyncio.run(main())
