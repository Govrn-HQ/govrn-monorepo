import { Client } from 'twitter-api-sdk';
console.log('Hello World!');

const client = new Client(process.env.BEARER_TOKEN);

//            query: {
//                /** One query/rule/filter for matching Tweets. Refer to https:\/\/t.co\/rulelength to identify the max query length */
//                query: string;
//                /** YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute). */
//                start_time?: string;
//                /** YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute). */
//                end_time?: string;
//                /** Returns results with a Tweet ID greater than (that is, more recent than) the specified ID. */
//                since_id?: components["schemas"]["TweetID"];
//                /** Returns results with a Tweet ID less than (that is, older than) the specified ID. */
//                until_id?: components["schemas"]["TweetID"];
//                /** The maximum number of search results to be returned by a request. */
//                max_results?: number;
//                /** This order in which to return results. */
//                sort_order?: "recency" | "relevancy";
//                /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. */
//                next_token?: string;
//                /** This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified. */
//                pagination_token?: string;
//                /** A comma separated list of fields to expand. */
//                expansions?: components["parameters"]["TweetExpansionsParameter"];
//                /** A comma separated list of Tweet fields to display. */
//                "tweet.fields"?: components["parameters"]["TweetFieldsParameter"];
//                /** A comma separated list of User fields to display. */
//                "user.fields"?: components["parameters"]["UserFieldsParameter"];
//                /** A comma separated list of Media fields to display. */
//                "media.fields"?: components["parameters"]["MediaFieldsParameter"];
//                /** A comma separated list of Place fields to display. */
//                "place.fields"?: components["parameters"]["PlaceFieldsParameter"];
//                /** A comma separated list of Poll fields to display. */
//                "poll.fields"?: components["parameters"]["PollFieldsParameter"];
//            };
//        };

const main = async () => {
  // 1. Fetch all dao accounts
  // 2. From dao account get all tweets
  // 3. Store tweets and users
  // 4. The frontend will figure out who owns
  //   the tweet after the fact.
  // 5. Store last job run to give a starting piont for next run
  //
  // Get dao account names from database
  // Then split into the specific number of calls
  //
  // Then a user can connect their account to see past
  // tweets.
  //
  const tweets = await client.tweets.tweetsRecentSearch({
    query: '(@twitterdev OR @twitterapi) -@twitter',
  });
};
// {
//    "data": [
//        {
//            "author_id": "2244994945",
//            "created_at": "2020-06-11T16:05:06.000Z",
//            "id": "1271111223220809728",
//            "text": "Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj"
//        },
//        {
//            "author_id": "2244994945",
//            "created_at": "2020-06-10T19:25:24.000Z",
//            "id": "1270799243071062016",
//            "text": "As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk"
//        },
//        {
//            "author_id": "2244994945",
//            "created_at": "2020-06-09T18:08:47.000Z",
//            "id": "1270417572001976322",
//            "text": "Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV"
//        }
//    ],
//    "includes": {
//        "users": [
//            {
//                "description": "The voice of Twitter's #DevRel team, and your official source for updates, news, & events about Twitter's API. \n\n#BlackLivesMatter",
//                "id": "2244994945",
//                "name": "Twitter Dev",
//                "username": "TwitterDev"
//            }
//        ]
//    },
//    "meta": {
//        "newest_id": "1271111223220809728",
//        "oldest_id": "1270417572001976322",
//        "result_count": 3
//    }
// }

main();
