import discord
import aioredis
from bot import constants

GUILD_IDS = [747131845317230695, 799328534988193793]

IS_DEV = constants.Bot.is_dev
REDIS_URL = constants.Bot.redis_tls_url
if IS_DEV:
    REDIS_URL = constants.Bot.redis_url

YES_EMOJI = "\U0001F44D"
NO_EMOJI = "\U0001F44E"
SKIP_EMOJI = "\U000023ED"

ALIEN_EMOJI = "\U0001F47D"
ALIEN_MONSTER_EMOJI = "\U0001F47E"
ROBOT_EMOJI = "\U0001F916"
GHOST_EMOJI = "\U0001F47B"
CLOWN_EMOJI = "\U0001F921"
GRINNING_CAT_EMOJI = "\U0001F63A"
SMILING_WITH_SUNGLASSES_EMOJI = "\U0001F60E"
BRAIN_EMOJI = "\U0001F9E0"
BOMB_EMOJI = "\U0001F4A3"
COLLISION_EMOJI = "\U0001F4A5"
MECHANICAL_ARM_EMOJI = "\U0001F9BE"

REPORTING_FORM_FMT = "https://govrn.app/#/report?daoId=%s"

REQUESTED_TWEET_FMT = "Kevin Malone told me to tweet this number %s"
TWITTER_URL_REGEXP = r"^https://twitter.com/(.+)/status/([0-9]+)"
TWEET_NONCE_LEGNTH = 20

REQUESTED_SIGNED_MESSAGE = (
    "Kevin Malone told me to sign this message with this number %s"
)
WALLET_VERIFICATION_INSTRUCTIONS = (
    "To verify you have access to the wallet at your address, follow these steps:"
    "\n1: Navigate to myetherwallet.com/wallet/sign"
    '\n2: Connect to MyEtherWallet with your wallet in the browser by pressing "browser extension"'
    "\n3: Copy and paste the message below into the 'Signature' box"
    "\n4: Click the green 'Sign' button"
    "\n5: Approve the metamask notification and sign the message (it should match the message below)"
    "\n6: Copy the long string of characters right after 'sig' (without quotes)"
    "\n7: Paste that string into this conversation to verify your wallet ownership"
)

emojis = [
    ALIEN_EMOJI,
    ALIEN_MONSTER_EMOJI,
    ROBOT_EMOJI,
    GHOST_EMOJI,
    CLOWN_EMOJI,
    GRINNING_CAT_EMOJI,
    SMILING_WITH_SUNGLASSES_EMOJI,
    BRAIN_EMOJI,
    BOMB_EMOJI,
    COLLISION_EMOJI,
    MECHANICAL_ARM_EMOJI,
]


def get_list_of_emojis(num):
    return emojis[0:num]


INFO_EMBED_COLOR = discord.Colour.blue()
Redis = aioredis.from_url(f"{REDIS_URL}")

MAX_CONTRIBUTIONS_TO_DISPLAY = 5
