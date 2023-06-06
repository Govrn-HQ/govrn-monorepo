import pytest
from twitter_contribution import process


@pytest.mark.asyncio
async def test_process_guild_integrations(tests_setup_and_teardown):
    await process.process_guild_integrations()
