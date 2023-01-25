import asyncio
import discord
import json
import logging
import random
import re
import snscrape.modules.twitter as sntwitter
import string
import eth_account

from bot.config import (
    Redis,
    REQUESTED_TWEET_FMT,
    INFO_EMBED_COLOR,
    TWEET_NONCE_LEGNTH,
    TWITTER_URL_REGEXP,
    REQUESTED_SIGNED_MESSAGE,
    WALLET_VERIFICATION_INSTRUCTIONS,
    SKIP_EMOJI,
)
from bot.common.bot.bot import bot
import bot.common.graphql as gql
from bot.common.threads.thread_builder import (
    BaseStep,
    StepKeys,
    write_cache_metadata,
    get_cache_metadata_key,
)
from bot.exceptions import ThreadTerminatingException

DISCORD_USER_CACHE_KEY = "discord_user_previously_exists"
USER_CACHE_KEY = "user_previously_exists"
DISCORD_DISPLAY_NAME_CACHE_KEY = "discord_display_name"
TWITTER_HANDLE_CACHE_KEY = "twitter_handle"
REQUESTED_TWEET_CACHE_KEY = "requested_tweet"
TWEET_VERIFIED_CACHE_KEY = "tweet_verified"
WALLET_CACHE_KEY = "user_wallet_address"
WALLET_VERIFICATION_MESSAGE_CACHE_KEY = "wallet_verification_message"

logger = logging.getLogger(__name__)


class SelectGuildEmojiStep(BaseStep):
    """A step to allow a user to select a guild

    Typically used at the beginning of threads to
    help set the guild_id value when a user interacts
    in DMs.
    """

    name = StepKeys.SELECT_GUILD_EMOJI.value
    emoji = True

    def __init__(self, cls):
        super().__init__()
        self.cls = cls

    async def handle_emoji(self, raw_reaction):
        channel = await bot.fetch_channel(raw_reaction.channel_id)
        message = await channel.fetch_message(raw_reaction.message_id)
        key_vals = await Redis.get(raw_reaction.user_id)
        if not key_vals:
            return None, None
        daos = json.loads(key_vals).get("metadata").get("daos")
        selected_guild_reaction = None
        for reaction in message.reactions:
            if reaction.count >= 2:
                selected_guild_reaction = reaction
                self.cls.guild_id = daos.get(reaction.emoji)["guild_discord_id"]
                break
        if not selected_guild_reaction:
            raise Exception("Reacted with the wrong emoji")
        return None, None


class VerifyUserWalletStep(BaseStep):
    """Step to verify user's wallet"""

    name = StepKeys.VERIFY_USER_WALLET.value
    # If another user verifies an address already in use, update the profile with
    # the following message in the wallet field.
    unverified_address_fmt = "UNVERIFIED_ADDRESS_IN_USE_WITH_PROFILE + %s"

    def __init__(self, cache, update: bool) -> None:
        super().__init__()
        self.cache = cache
        # Flag to indicate if this step should update an existing user to use the
        # current wallet, or if a new user should be created
        self.update = update

    async def send(self, message, user_id):
        # Send and save nonce
        nonce = get_nonce()
        requested_message = REQUESTED_SIGNED_MESSAGE % nonce

        await write_cache_metadata(
            user_id,
            self.cache,
            WALLET_VERIFICATION_MESSAGE_CACHE_KEY,
            requested_message,
        )

        instructions_embed = discord.Embed(
            color=INFO_EMBED_COLOR,
            title="Verification instructions",
            description=WALLET_VERIFICATION_INSTRUCTIONS,
        )

        requested_signature = discord.Embed(
            color=INFO_EMBED_COLOR,
            title="Please sign the below message with your wallet",
            description=requested_message,
        )

        await message.channel.send(embed=instructions_embed)
        sent_message = await message.channel.send(embed=requested_signature)

        return sent_message, None

    async def save(self, message, guild_id, user_id):
        verified_wallet = await self.verify_message(user_id, message)
        if self.update:
            await self.remove_existing_wallet_usage(user_id, verified_wallet)
            await self.update_existing_user_with_wallet(user_id, verified_wallet)

    async def verify_message(self, user_id, message):
        # Retrieve expected message and wallet from cache
        address = await get_cache_metadata_key(user_id, self.cache, WALLET_CACHE_KEY)
        expected_message = await get_cache_metadata_key(
            user_id, self.cache, WALLET_VERIFICATION_MESSAGE_CACHE_KEY
        )
        supplied_signature = message.content.strip()

        try:
            # Signature needs to be in hex
            int(supplied_signature, 16)
        except ValueError:
            raise ThreadTerminatingException("The response wasn't a correct signature!")

        requested_msg_hex = eth_account.messages.encode_defunct(text=expected_message)
        recovered_address = eth_account.Account.recover_message(
            requested_msg_hex, signature="0x" + supplied_signature
        )

        if address != recovered_address:
            raise ThreadTerminatingException(
                "Recovered address from message & signature doesn't match supplied."
                " Make sure there's no extra line when pasting the message into"
                " myetherwallet.com's signature box."
            )
        return address

    async def remove_existing_wallet_usage(self, user_id, verified_wallet):
        user = await gql.get_user_by_wallet(verified_wallet)

        # no users are using the supplied wallet
        if user is None:
            return

        # udpate the conflicting user with a "pointer" to the profile which is using the
        # verified address
        err_address_marker = VerifyUserWalletStep.unverified_address_fmt % user_id
        await gql.update_user_wallet(user.get("id"), err_address_marker)

    async def update_existing_user_with_wallet(self, user_id, verified_wallet):
        user = await gql.get_user_by_discord_id(user_id)
        # Update the user's profile with the verified wallet address
        await gql.update_user_wallet(user.get("id"), verified_wallet)


class VerifyUserTwitterStep(BaseStep):
    """Step to verify user's twitter profile"""

    name = StepKeys.VERIFY_USER_TWITTER.value
    exception_message = "Reacted with the wrong emoji"

    def __init__(self, user_id, guild_id, cache, update: bool):
        super().__init__()
        self.user_id = user_id
        self.guild_id = guild_id
        self.cache = cache
        self.update = update

    async def send(self, message, user_id):
        embed_title = (
            "To verify your twitter, please tweet the below message from your"
            " selected account, and reply with the URL to the tweet"
        )
        nonce = get_nonce()
        requested_tweet = REQUESTED_TWEET_FMT % nonce

        # save requested tweet in cache
        await write_cache_metadata(
            user_id, self.cache, "requested_tweet", requested_tweet
        )
        embed = discord.Embed(
            colour=INFO_EMBED_COLOR,
            title=embed_title,
            description=requested_tweet,
        )

        # send request to tweet a given message + nonce
        sent_message = await message.channel.send(embed=embed)
        return sent_message, None

    async def save(self, message, guild_id, user_id):
        await self.verify_message(message)
        if self.update:
            await self.save_authenticated_account()

    async def handle_emoji(self, raw_reaction):
        # skips twitter verification
        if SKIP_EMOJI in raw_reaction.emoji.name and not self.update:
            return StepKeys.CREATE_USER.value, False
        raise Exception(VerifyUserTwitterStep.exception_message)

    async def verify_message(self, authentication_message):
        twitter_handle = await get_cache_metadata_key(
            self.user_id, self.cache, TWITTER_HANDLE_CACHE_KEY
        )
        tweet_url = authentication_message.content.strip()
        profile, status_id = verify_twitter_url(tweet_url, twitter_handle)
        tweet = await retrieve_tweet(profile, status_id)
        requested_tweet = await get_cache_metadata_key(
            self.user_id, self.cache, "requested_tweet"
        )
        verify_tweet_text(tweet.content, requested_tweet)
        # write to cache after tweet verification so that a user can't skip this step
        # if they want to associate a twitter profile
        await write_cache_metadata(
            self.user_id, self.cache, TWEET_VERIFIED_CACHE_KEY, "True"
        )

    async def save_authenticated_account(self):
        user_record = await gql.get_user_by_discord_id(self.user_id)
        twitter_handle = await get_cache_metadata_key(
            self.user_id, self.cache, TWITTER_HANDLE_CACHE_KEY
        )
        await gql.update_user_twitter_handle(user_record["id"], twitter_handle)


def get_nonce():
    return "".join(
        random.choice(string.ascii_letters) for i in range(TWEET_NONCE_LEGNTH)
    )


def verify_twitter_url(tweet_url, expected_profile):
    #  ensure the shared tweet matches the account and message
    match = re.search(TWITTER_URL_REGEXP, tweet_url)

    if match is None:
        raise ThreadTerminatingException(
            f"Tweet URL {tweet_url} was not in the expected format"
        )

    profile = match.group(1)
    expected_profile_stripped = expected_profile.strip().replace("@", "")
    if profile.lower() != expected_profile_stripped.lower():
        errMsg = (
            f"Tweet profile {profile} does not match the supplied"
            f" handle {expected_profile_stripped}"
        )
        raise ThreadTerminatingException(errMsg)

    status_id = match.group(2)

    return profile, status_id


async def retrieve_tweet(profile, status_id):
    loop = asyncio.get_event_loop()
    scraper = sntwitter.TwitterTweetScraper(status_id)
    gen = scraper.get_items()
    try:
        tweet = await loop.run_in_executor(None, gen.__next__)
    except Exception as e:
        logger.error(
            f"unable to retrieve tweet for profile {profile}, id {status_id}: {e}"
        )
        raise e
    return tweet


def verify_tweet_text(tweet_text, expected_tweet_text):
    if tweet_text != expected_tweet_text:
        raise ThreadTerminatingException(
            f"Tweet text {tweet_text} doesn't match the verification"
            f" tweet {expected_tweet_text}"
        )
