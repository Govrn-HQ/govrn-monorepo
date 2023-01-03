from abc import ABC, abstractmethod
from bot.config import Redis


def build_congrats_key(user_id):
    return f"{user_id}-congrats"


# Abstract base class #


class Cache(ABC):
    @abstractmethod
    async def get(self, key):
        pass

    @abstractmethod
    async def set(self, key, value):
        pass

    @abstractmethod
    async def delete(self, key):
        pass


class RedisCache(Cache):
    async def get(self, key):
        return await Redis.get(key)

    async def set(self, key, value):
        return await Redis.set(key, value)

    async def delete(self, key):
        return await Redis.delete(key)
