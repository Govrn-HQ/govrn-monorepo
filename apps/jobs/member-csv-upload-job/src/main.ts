import { NatsConnection, JsMsg } from 'nats';
import { setupNats, pullMessages } from '@govrn/govrn-nats';
console.log('Hello World!');

// 1. Receives form data with a file and input for dao name
// https://stackoverflow.com/questions/74927686/how-to-upload-a-file-from-client-to-server-and-then-server-to-server
// 2. Verify File is a CSV file
// 3. Verify columns are correct
// 4. Verify data is correct
//
//
// columns, address, discord name/username (optional), dicord_id (optional	), admin
//
//
const servers = [
  // { servers: ["demo.nats.io:4442", "demo.nats.io:4222"] },
  // { servers: "demo.nats.io:4443" },
  // { port: 4222 },
  { servers: 'localhost' },
];
const logic = (conn: NatsConnection, msg: JsMsg) => {
  console.log(conn);
  console.log('Main');
  console.log(msg);
};

const main = async () => {
  await pullMessages('dao-membership-csv', 'dao-membership-csv-durable', logic);

  await setupNats(servers, logic);
  // TODO: Add schema validation
};

main();
