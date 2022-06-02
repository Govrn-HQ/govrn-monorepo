import { Client } from 'twitter-api-sdk';
import {
  GovrnProtocol,
  cursorPagination,
  SortOrder,
} from '@govrn/protocol-client';

const bearerToken = process.env.BEARER_TOKEN;
const protcolUrl = process.env.PROTOCOL_URL;
const jobName = 'twitter-contribution-job';

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
const main = async () => {
  const client = new Client(bearerToken);
  const govrn = new GovrnProtocol(protcolUrl);
  const lastRun = await govrn.jobRun.list({
    first: 1,
    orderBy: { completedDate: SortOrder.Desc },
    where: { name: { equals: jobName } },
  });
  const startDate =
    lastRun.length > 0 ? new Date(lastRun[0].startDate) : new Date();

  console.log('Starting to fetch new tweets');
  for await (const accounts of cursorPagination(
    govrn.twitter.listAccounts,
    {
      first: 10,
    },
    govrn.twitter
  )) {
    const accountNames = accounts
      .map((account) => {
        return `@${account.account_name}`;
      })
      .join(' OR ');
    const pages = client.tweets.tweetsRecentSearch({
      query: `(${accountNames}) -@twitter`,
      max_results: 100,
    });
    const tweets = [];
    const authorIds = [];
    for await (const page of pages) {
      for (const tweet of page.data) {
        authorIds.push(tweet.author_id);
      }
      tweets.push(...page.data);
    }
    const users = await client.users.findUsersById({ ids: authorIds });
    const upsertPromises = [];
    for (const user of users.data) {
      upsertPromises.push(
        govrn.twitter.upsertUser({
          create: {
            twitter_user_id: user.id,
            description: user.description,
            name: user.name,
            username: user.username,
          },
          update: {
            name: { set: user.name },
          },
          where: {
            twitter_user_id: user.id,
          },
        })
      );
    }
    const resp = await Promise.all(upsertPromises);
    const authorMapping = {};
    for (const user of resp) {
      authorMapping[user.twitter_user_id] = user;
    }
    const createItems = [];
    for (const tweet of tweets) {
      createItems.push({
        text: tweet.text,
        twitter_tweet_id: tweet.id,
        twitter_user_id: authorMapping[tweet.author_id] || null,
      });
    }

    const created = await govrn.twitter.bulkCreate({
      data: createItems,
      skipDuplicates: true,
    });
    console.log(`Created ${created} new tweets`);
  }
  await govrn.jobRun.create({
    data: { startDate: startDate, completedDate: new Date(), name: jobName },
  });
  console.log(`Finished processing twitter tweets`);
};

main();
