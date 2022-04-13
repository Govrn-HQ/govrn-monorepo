import { LinearClient } from '@linear/sdk';
console.log('Hello World!');

// 1. Call api fetch last issue from last run
//    if no run do not set
// 2. Fetch all issues and create contributions
// 3. Store last issue and run info
const apiKey = process.env.API_KEY;

const main = async () => {
  const linearClient = new LinearClient({ apiKey });
};

main();
