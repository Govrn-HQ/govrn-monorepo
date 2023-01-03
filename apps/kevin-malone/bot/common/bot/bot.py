import discord


def get_bot() -> discord.Bot:
    intents = discord.Intents.all()
    return discord.Bot(intents=intents)


bot: discord.Bot = get_bot()
