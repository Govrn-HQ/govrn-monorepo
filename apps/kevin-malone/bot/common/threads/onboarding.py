import discord
import logging
from web3 import Web3
import bot.common.graphql as gql
from bot.config import (
    YES_EMOJI,
    NO_EMOJI,
    SKIP_EMOJI,
    INFO_EMBED_COLOR,
)
from bot.common.threads.thread_builder import (
    BaseStep,
    StepKeys,
    Step,
    ThreadKeys,
    BaseThread,
    get_cache_metadata_key,
    write_cache_metadata,
)
from bot.common.threads.shared_steps import (
    VerifyUserTwitterStep,
    VerifyUserWalletStep,
    WALLET_CACHE_KEY,
    TWEET_VERIFIED_CACHE_KEY,
)
from bot.exceptions import InvalidWalletAddressException
from bot import constants

DISCORD_USER_CACHE_KEY = "discord_user_previously_exists"
USER_CACHE_KEY = "user_previously_exists"
USER_DB_ID_CACHE_KEY = "user_db_id"
DISCORD_DISPLAY_NAME_CACHE_KEY = "discord_display_name"
DISPLAY_NAME_CACHE_KEY = "display_name"
TWITTER_HANDLE_CACHE_KEY = "twitter_handle"
REQUESTED_TWEET_CACHE_KEY = "requested_tweet"

logger = logging.getLogger(__name__)


def _handle_skip_emoji(raw_reaction, guild_id):
    if SKIP_EMOJI in raw_reaction.emoji.name:
        return None, True
    raise Exception("Reacted with the wrong emoji")


class CheckIfDiscordUserExists(BaseStep):
    """Checks if the user with particular discord id exists"""

    name = StepKeys.CHECK_USER_EXISTS.value

    def __init__(self, cache):
        super().__init__()
        self.cache = cache

    # No input is required of the user, the step can be performed without
    # the discord user id
    async def send(self, message, user_id):
        return None, None

    async def control_hook(self, message, user_id):
        user = await gql.get_user_by_discord_id(user_id)
        if user:
            # Cache for the message send in the next step rather than retrieving
            # from the database
            await write_cache_metadata(
                user_id, self.cache, DISPLAY_NAME_CACHE_KEY, user["display_name"]
            )
            await write_cache_metadata(
                user_id, self.cache, WALLET_CACHE_KEY, user["address"]
            )
            await write_cache_metadata(
                user_id, self.cache, USER_DB_ID_CACHE_KEY, user["id"]
            )
            return StepKeys.ASSOCIATE_EXISTING_USER_WITH_GUILD.value
        return StepKeys.PROMPT_USER_CONNECT_WALLET.value


class PromptUserToConnectWallet(BaseStep):
    """Step to submit wallet address for the govrn profile"""

    name = StepKeys.PROMPT_USER_CONNECT_WALLET.value

    def __init__(self, cache, guild_id, bot):
        super().__init__()
        self.cache = cache
        self.guild_id = guild_id
        self.bot = bot

    async def send(self, message, user_id):
        channel = message.channel
        discord_user = await self.bot.fetch_user(user_id)
        msg = f"""It doesn't look like your wallet is connected to this discord account please connected them at this link {constants.Bot.frontend_url}/#/signature?displayName={discord_user.display_name}. Once you finish connecting your accounts rerun the join flow or join your dao via the web app"""
    

        sent_message = await channel.send(msg)
        return sent_message, None


class PromptUserWalletAddressStep(BaseStep):
    """Step to submit wallet address for the govrn profile"""

    name = StepKeys.PROMPT_USER_WALLET_ADDRESS.value

    wallet_prompt = (
        "What Ethereum wallet address would you like to associate with this guild?"
    )

    invalid_wallet_exception_fmt = "%s is not a valid wallet address"

    def __init__(self, cache, guild_id):
        super().__init__()
        self.cache = cache
        self.guild_id = guild_id

    async def send(self, message, user_id):
        channel = message.channel
        sent_message = await channel.send(PromptUserWalletAddressStep.wallet_prompt)
        return sent_message, None

    async def save(self, message, guild_id, user_id):
        # Save the supplied wallet address to cache
        wallet = message.content.strip()

        if not Web3.isAddress(wallet):
            raise InvalidWalletAddressException(
                PromptUserWalletAddressStep.invalid_wallet_exception_fmt % wallet
            )

        await write_cache_metadata(user_id, self.cache, WALLET_CACHE_KEY, wallet)


class AssociateDiscordProfileWithUser(BaseStep):
    """Check if the supplied user wallet already exists with Govrn; If the wallet
    is already associated with a user profile, associates their discord profile with
    the user profile. This will happen if a user has joined via the webapp but not
    with Kevin Malone"""

    name = StepKeys.ASSOCIATE_DISCORD_PROFILE_WITH_USER.value

    def __init__(self, cache, bot):
        super().__init__()
        self.cache = cache
        self.bot = bot

    # No user input is required
    async def send(self, message, user_id):
        return None, None

    async def control_hook(self, message, user_id):
        wallet_id = await get_cache_metadata_key(user_id, self.cache, WALLET_CACHE_KEY)
        user = await gql.get_user_by_wallet(wallet_id)
        if user:
            discord_user = await self.bot.fetch_user(user_id)
            discord_display_name = discord_user.display_name

            # A user exists with a govrn profile, indicating they've joined on the webapp
            # Need to create a discord user object, and then associate the govrn user with the guild
            await gql.create_discord_user(user.get("id"), user_id, discord_display_name)

            # Cache user info for following step of associating with guild
            await write_cache_metadata(
                user_id, self.cache, DISPLAY_NAME_CACHE_KEY, discord_display_name
            )
            await write_cache_metadata(
                user_id, self.cache, USER_DB_ID_CACHE_KEY, user.get("id")
            )

            return StepKeys.ASSOCIATE_EXISTING_USER_WITH_GUILD.value

        return StepKeys.USER_DISPLAY_CONFIRM.value


class AssociateExistingUserWithGuild(BaseStep):
    """Associates an existing user profile with a given guild"""

    name = StepKeys.ASSOCIATE_EXISTING_USER_WITH_GUILD.value

    associate_msg_fmt = (
        'I found your profile "`%s`" associated with wallet address'
        " %s through your discord id, and associated it with %s."
        " You should be all good to start reporting those contributions with"
        " `/report`!"
    )

    def __init__(self, cache, guild_id):
        super().__init__()
        self.cache = cache
        self.guild_id = guild_id

    async def send(self, message, user_id):
        # discord user + user exist, guild user does not
        wallet_id = await get_cache_metadata_key(user_id, self.cache, WALLET_CACHE_KEY)
        user = await gql.get_user_by_wallet(wallet_id)
        guild = await gql.get_guild_by_discord_id(self.guild_id)
        guild_id = guild["id"]

        # skip if the user has already joined the guild
        guild_users = user.get("guild_users")
        if guild_users is not None and any(
            guild_user.get("guild_id") == guild_id for guild_user in guild_users
        ):
            desc = (
                "It looks like you've joined this guild previously, but I didn't have your "
                "discord info. I just associated this discord profile with your Govrn profile! "
                "You're onboarded to this Guild, so why not try submitting a contribution with "
                "`/report`?"
            )
            embed = discord.Embed(
                colour=INFO_EMBED_COLOR,
                title="Welcome Back",
                description=desc,
            )
            channel = message.channel
            sent_message = await channel.send(embed=embed)
            return sent_message, None

        user_db_id = await get_cache_metadata_key(
            user_id, self.cache, USER_DB_ID_CACHE_KEY
        )
        await gql.create_guild_user(user_db_id, guild.get("id"))

        guild_name = await get_cache_metadata_key(user_id, self.cache, "guild_name")
        display_name = await get_cache_metadata_key(
            user_id, self.cache, DISPLAY_NAME_CACHE_KEY
        )
        address = await get_cache_metadata_key(user_id, self.cache, WALLET_CACHE_KEY)

        channel = message.channel
        sent_message = await channel.send(
            AssociateExistingUserWithGuild.associate_msg_fmt
            % (display_name, address, guild_name)
        )
        return sent_message, None

    async def control_hook(self, message, user_id):
        return StepKeys.END.value


class UserDisplayConfirmationStep(BaseStep):
    """Confirm display name fetched from discord"""

    name = StepKeys.USER_DISPLAY_CONFIRM.value
    msg = "Would you like your display name to be"

    def __init__(self, cache, bot):
        self.cache = cache
        self.bot = bot

    @property
    def emojis(self):
        return [YES_EMOJI, NO_EMOJI]

    async def send(self, message, user_id):
        user = await self.bot.fetch_user(user_id)
        discord_display_name = user.display_name
        await write_cache_metadata(
            user_id, self.cache, DISCORD_DISPLAY_NAME_CACHE_KEY, discord_display_name
        )
        channel = message.channel
        sent_message = await channel.send(f"{self.msg} `{discord_display_name}`")
        await sent_message.add_reaction(YES_EMOJI)
        await sent_message.add_reaction(NO_EMOJI)
        return sent_message, None


# save is a single branch so it can be one to one
# handle_emoji can branch
class UserDisplayConfirmationEmojiStep(BaseStep):
    """Emoji confirmation step of whether the Discord name should be accepted"""

    name = StepKeys.USER_DISPLAY_CONFIRM_EMOJI.value
    emoji = True

    exception_msg = "Reacted with the wrong emoji"

    def __init__(self, cache, bot):
        self.cache = cache
        self.bot = bot

    @property
    def emojis(self):
        return [YES_EMOJI, NO_EMOJI]

    async def handle_emoji(self, raw_reaction):
        if raw_reaction.emoji.name in self.emojis:
            if raw_reaction.emoji.name == NO_EMOJI:
                return StepKeys.USER_DISPLAY_SUBMIT.value, None
            return StepKeys.ADD_USER_TWITTER.value, None
        raise Exception(UserDisplayConfirmationEmojiStep.exception_msg)

    async def save(self, message, guild_id, user_id):
        discord_display_name = await get_cache_metadata_key(
            user_id, self.cache, DISCORD_DISPLAY_NAME_CACHE_KEY
        )
        await write_cache_metadata(
            user_id, self.cache, DISPLAY_NAME_CACHE_KEY, discord_display_name
        )


class UserDisplaySubmitStep(BaseStep):
    """Submit new display name to be saved"""

    name = StepKeys.USER_DISPLAY_SUBMIT.value

    display_name_prompt = "What would you like your display name to be?"

    def __init__(self, cache):
        self.cache = cache

    async def send(self, message, user_id):
        channel = message.channel
        sent_message = await channel.send(UserDisplaySubmitStep.display_name_prompt)
        return sent_message, None

    async def save(self, message, guild_id, user_id):
        display_name = message.content.strip()
        await write_cache_metadata(
            user_id, self.cache, DISPLAY_NAME_CACHE_KEY, display_name
        )

    async def handle_emoji(self, raw_reaction):
        return _handle_skip_emoji(raw_reaction, self.guild_id)


class AddUserTwitterStep(BaseStep):
    """Step to submit twitter name for the govrn profile"""

    name = StepKeys.ADD_USER_TWITTER.value

    handle_prompt = "What twitter handle would you like to associate with this guild!"

    def __init__(self, guild_id, cache):
        super().__init__()
        self.guild_id = guild_id
        self.cache = cache

    async def send(self, message, user_id):
        channel = message.channel
        sent_message = await channel.send(AddUserTwitterStep.handle_prompt)
        return sent_message, None

    async def save(self, message, guild_id, user_id):
        twitter_handle = message.content.strip().replace("@", "")
        await write_cache_metadata(
            user_id, self.cache, TWITTER_HANDLE_CACHE_KEY, twitter_handle
        )


class CreateUserStep(BaseStep):
    """Creates User, GuildUser, DiscordUser, TwitterUser in our DB"""

    name = StepKeys.CREATE_USER.value
    trigger = True

    def __init__(self, cache):
        self.cache = cache

    async def send(self, message, user_id):
        return message, None

    async def save(self, message, guild_id, user_id):
        # check for twitter verification
        verified_twitter = await get_cache_metadata_key(
            user_id, self.cache, TWEET_VERIFIED_CACHE_KEY
        )
        twitter_handle = await get_cache_metadata_key(
            user_id, self.cache, TWITTER_HANDLE_CACHE_KEY
        )

        # retrieve user fields from cache
        address = await get_cache_metadata_key(user_id, self.cache, WALLET_CACHE_KEY)
        display_name = await get_cache_metadata_key(
            user_id, self.cache, DISPLAY_NAME_CACHE_KEY
        )
        discord_display_name = await get_cache_metadata_key(
            user_id, self.cache, DISCORD_DISPLAY_NAME_CACHE_KEY
        )

        # Assumption: user is in a discord server/not in DMs
        guild = await gql.get_guild_by_discord_id(guild_id)

        # Create a new user row with the supplied display name, wallet, etc.
        # TODO: make atomic
        user = await gql.create_user(
            display_name, user_id, discord_display_name, address
        )
        await gql.create_guild_user(user.get("id"), guild.get("id"))
        if verified_twitter:
            await gql.update_user_twitter_handle(user.get("id"), twitter_handle)


class CongratsStep(BaseStep):
    """Send congratulations for completing the profile"""

    name = StepKeys.ONBOARDING_CONGRATS.value

    def __init__(self, user_id, guild_id, cache):
        super().__init__()
        self.user_id = user_id
        self.guild_id = guild_id
        self.cache = cache

    async def send(self, message, user_id):
        channel = message.channel
        guild_name = await get_cache_metadata_key(user_id, self.cache, "guild_name")
        sent_message = await channel.send(
            f"Nice job! That's it for now! "
            f"Welcome and congratulations on onboarding to {guild_name}"
        )
        return sent_message, None


def get_profile_embed_from_profile_fields(guild_name, fields):
    embed = discord.Embed(
        colour=INFO_EMBED_COLOR,
        description=f"We updated your {guild_name} profile!",
    )
    embed.add_field(name="Display Name", value=fields.get("display_name"))
    embed.add_field(name="Twitter", value=fields.get("twitter"))
    embed.add_field(name="Ethereum Wallet Address", value=fields.get("wallet"))

    return embed


class Onboarding(BaseThread):
    name = ThreadKeys.ONBOARDING.value

    def get_profile_setup_steps(self):
        create_user_chain = (
            Step(CreateUserStep(self.cache))
            .add_next_step(CongratsStep(self.user_id, self.guild_id, self.cache))
            .build()
        )

        verify_twitter = (
            Step(VerifyUserTwitterStep(self.user_id, self.guild_id, self.cache, False))
            .add_next_step(create_user_chain)
            .build()
        )

        twitter_retrieval_steps = (
            Step(
                current=AddUserTwitterStep(guild_id=self.guild_id, cache=self.cache)
            ).fork((verify_twitter, create_user_chain))
        ).build()

        custom_user_name_steps = (
            Step(current=UserDisplaySubmitStep(cache=self.cache))
            .add_next_step(twitter_retrieval_steps)
            .build()
        )

        govrn_user_not_exist_flow = (
            Step(current=UserDisplayConfirmationStep(cache=self.cache, bot=self.bot))
            .add_next_step(
                UserDisplayConfirmationEmojiStep(cache=self.cache, bot=self.bot)
            )
            .fork((custom_user_name_steps, twitter_retrieval_steps))
            .build()
        )

        guild_user_not_exist_flow = (
            Step(
                current=PromptUserToConnectWallet(
                    cache=self.cache, guild_id=self.guild_id,
                    bot=self.bot
                )
            )
            .build()
        )

        profile_setup_steps = Step(
            current=CheckIfDiscordUserExists(cache=self.cache)
        ).fork(
            (
                AssociateExistingUserWithGuild(
                    cache=self.cache, guild_id=self.guild_id
                ),
                guild_user_not_exist_flow,
            )
        )

        return profile_setup_steps.build()

    async def get_steps(self):
        return self.get_profile_setup_steps().build()
