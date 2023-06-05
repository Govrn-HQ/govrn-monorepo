import asyncio
from utils import get_logger
from process import process_guild_integrations

logger = get_logger(__name__)


async def main():
    logger.info("Starting twitter contribution job")
    await process_guild_integrations()
    logger.info("Completed twitter contribution job")


asyncio.run(main())
