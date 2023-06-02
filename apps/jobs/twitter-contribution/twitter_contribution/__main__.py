import asyncio
from logging import getLogger
from process import process_guild_integrations

logger = getLogger(__name__)


async def main():
    logger.info("Starting twitter contribution job")
    await process_guild_integrations()
    logger.info("Completed twitter contribution job")


asyncio.run(main())
