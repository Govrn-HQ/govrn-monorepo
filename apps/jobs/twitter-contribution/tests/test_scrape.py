import pytest

from twitter_contribution import scrape


@pytest.mark.asyncio
async def test_retrieve_tweets():
    test_hashtag = "ThisIsJustATestHashtag"
    since = "2023-05-31T18:55:08.913598"
    tweets = await scrape.retrieve_tweets(test_hashtag, since)
    assert tweets is not None
    assert len(tweets) > 0
