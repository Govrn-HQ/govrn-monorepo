import pytest
import datetime

from twitter_contribution import graphql
from twitter_contribution import data

### Integration tests; intended to be run with a local instance of postgresql running
### along with the the protocol api.

## PROTOCOL_TOKEN PROTOCOL_URL must be configured in tandem with protocol-api


## TODO: check in sample db backup
## this is expecting at least 1 twitter integration in the db
@pytest.mark.asyncio
async def test_get_guilds_with_twitter_integration():
    guilds = await graphql.get_guilds_with_twitter_integration()
    assert guilds is not None
    assert len(guilds) > 0


@pytest.mark.asyncio
async def test_create_job_run():
    job_run = await graphql.create_job_run("test", "2021-01-01", "2021-01-01")
    assert job_run is not None
    assert job_run.get("id") is not None


@pytest.mark.asyncio
async def test_create_twitter_hashtag_contribution():
    tweet: data.Tweet = data.Tweet()
    tweet.id = 1
    tweet.content = "test"
    tweet.profile_handle = "test"
    tweet.date = datetime.datetime.now().isoformat()
    tweet.url = "test"
    contribution = await graphql.create_twitter_hashtag_contribution(
        tweet, 1, "test", "testhashtag"
    )
    assert contribution is not None
    assert contribution.get("id") is not None
