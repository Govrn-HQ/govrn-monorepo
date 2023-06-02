import datetime
import snscrape.modules.twitter as snscrape


class Tweet:
    id: int
    content: str
    profile_handle: str
    date: str
    url: str

    def from_scraped_tweet(scraped_tweet: snscrape.Tweet):
        tweet = Tweet()
        tweet.url = scraped_tweet.url
        tweet.id = scraped_tweet.id
        tweet.profile_handle = scraped_tweet.user.username
        tweet.content = scraped_tweet.rawContent
        tweet.date = scraped_tweet.date.isoformat()
        return tweet
