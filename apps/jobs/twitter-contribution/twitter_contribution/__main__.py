import asyncio

from twitter_contribution.logging import get_logger
from twitter_contribution.graphql import (
    create_job_run,
    create_twitter_hashtag_contribution,
    get_guilds_with_twitter_integration,
    get_tweet_contribution,
    get_user_by_twitter
)
from twitter_contribution.constants import JOB_NAME
from twitter_contribution.data import Tweet
from twitter_contribution.scrape import retrieve_tweets
from twitter_contribution.utils import now, get_lookback_window

logger = get_logger(__name__)
# TODO: extract commonly used queries and logging from kevin malone


async def main():
    start = now()
    since = get_lookback_window()
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
        # this is only a single integration for now
        for integration in guild["twitter_integration"]:
            logger.info(f"Processing integration {integration['id']}")
            # this is only a single hashtag for now
            for hashtag in integration["hashtag"]:
                logger.info(f"Processing tweets for hashtag {hashtag} since {since}")
                tweets = await retrieve_tweets(
                    hashtag, since
                )
                logger.info(f"Retrieved {len(tweets)} tweets for hashtag {hashtag}")
                await process_tweets(integration, tweets)
                # TODO: err handling
                logger.info(f"Processed {len(tweets)} tweets for hashtag {hashtag}")

    end = now()
    logger.info(f"Completed in {end - start} seconds")
    create_job_run(JOB_NAME, start, end)

# TODO: parallelize
async def process_tweets(guild_integration, tweets: list[Tweet]):
    for tweet in tweets:
        # check if user has profile and linked twitter account
        user = await get_user_by_twitter(tweet.profile_handle)

        # skip users that have not linked their twitter
        if user is None:
            logger.info(f"Skipping tweet {tweet.id} by unlinked user {tweet.profile_handle}")
            continue

        # skip if a user's tweet predates either the twitter linkeage or the
        # guild's integration
        if guild_integration["createdAt"] > tweet.date or user["twitter_user"]["createdAt"] > tweet.date:
            logger.info(f"Skipping tweet {tweet.id} by user {tweet.profile_handle} predating integration")
            continue

        # check if contribution already exists
        tweet_contribution = get_tweet_contribution(tweet.id)
        if tweet_contribution is not None:
            logger.info(f"Skipping tweet {tweet.id} by user {tweet.profile_handle} already contributed")
            continue

        # create contribution
        logger.info(f"Creating contribution for tweet {tweet.id} by user {tweet.profile_handle}")
        await create_twitter_hashtag_contribution(tweet, user["id"], user["name"], guild_integration["hashtag"])



asyncio.run(main())
