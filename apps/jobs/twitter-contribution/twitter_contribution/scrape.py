import datetime
import snscrape.modules.twitter as sntwitter
import asyncio

import twitter_contribution.data as data
from twitter_contribution.utils import get_logger

logger = get_logger(__name__)


async def retrieve_tweets(hashtag, since: datetime.datetime):
    loop = asyncio.get_event_loop()
    scraper = sntwitter.TwitterHashtagScraper(hashtag=hashtag)
    generator = scraper.get_items()
    tweets = []
    try:
        tweets = await loop.run_in_executor(None, enumerate_tweets, generator, since)
    except Exception as e:
        logger.error(f"unable to retrieve tweets for hashtag {hashtag}: {e}")
        raise e

    logger.info(f"Retrieved {len(tweets)} tweets for hashtag {hashtag}")
    return tweets


def enumerate_tweets(generator, since: datetime.datetime):
    tweets = []
    for i, item in enumerate(generator, start=1):
        if since is not None and item.date < since:
            break
        tweets.append(data.Tweet.from_scraped_tweet(item))
    return tweets
