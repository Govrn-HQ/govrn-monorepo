import { NatsConnection, JsMsg, StringCodec } from 'nats';
import { setupNats, pullMessages } from '@govrn/govrn-nats';
import { GovrnProtocol } from '@govrn/protocol-client';
import { ethers } from 'ethers';
console.log('Hello World!');
const protcolUrl = process.env.PROTOCOL_URL;
const protocolApiToken = process.env.PROTOCOL_API_TOKEN;

// 1. Receives form data with a file and input for dao name
// https://stackoverflow.com/questions/74927686/how-to-upload-a-file-from-client-to-server-and-then-server-to-server
// 2. Verify File is a CSV file
// 3. Verify columns are correct
// 4. Verify data is correct
//
//
//
//
const servers = [
  // { servers: ["demo.nats.io:4442", "demo.nats.io:4222"] },
  // { servers: "demo.nats.io:4443" },
  // { port: 4222 },
  { servers: 'localhost' },
];
let govrn: GovrnProtocol = null;
const logic = async (conn: NatsConnection) => {
  console.log(conn);
  console.log('Main');
  // pull
  // transform
  // enqueue
  // etc
  const pullTransform = async (conn: NatsConnection, msg: JsMsg) => {
    const sc = StringCodec();
    const data = sc.decode(msg.data);
    console.log('processing message...');
    // DAO ID, address, discord name/username (optional), dicord_id (optional	), admin
    const [daoId, address, discordName, discordId, admin] = data.split(',');

    // verify row
    const guild = await govrn.guild.get({
      id: +daoId,
    });
    // ack is handled by pull messages
    return;
  };
  await pullMessages(
    conn,
    'dao-membership-csv',
    'dao-membership-csv-durable',
    pullTransform,
  );
};

const main = async () => {
  govrn = new GovrnProtocol(protcolUrl, undefined, {
    Authorization: protocolApiToken,
  });

  await setupNats(servers, logic);
  // TODO: Add schema validation
};

main();
