import SubjectConsumer from './SubjectConsumer';
import { NatsConnection, JSONCodec } from 'nats';

interface Message {
  id: string;
}

const generateStreamName = () =>
  `test-stream-${Math.floor(Math.random() * 10)}`;

const generateMessages = (count: number): Message[] => {
  const messages: Message[] = [];
  for (let i = 0; i < count; i++) {
    messages.push({ id: `test-message-${i}` });
  }
  return messages;
};
const publishMessages = async (
  nc: NatsConnection,
  streamName: string,
  subjectName: string,
  messages: Message[],
) => {
  const js = await nc.jetstream();
  const subj = `${streamName}.row`;
  for (const msg of messages) {
    await js.publish(subj, JSONCodec().encode(`${msg}`));
  }
};

const deleteStream = async (nc: NatsConnection, streamName: string) => {
  const js = await nc.jetstreamManager();
  await js.streams.delete(streamName);
};

const createStream = async (nc: NatsConnection, streamName: string) => {
  const js = await nc.jetstreamManager();
  await js.streams.add({
    name: streamName,
    subjects: [`${streamName}.row`],
  });
};

describe('SubjectConsumer', () => {
  let consumer: SubjectConsumer<Message>;
  let streamName: string;

  jest.setTimeout(10000);

  beforeAll(async () => {
    streamName = generateStreamName();
    consumer = await SubjectConsumer.create({
      servers: ['localhost'],
    });
    await createStream(consumer.natsConnection, streamName);
  });

  afterAll(async () => {
    await deleteStream(consumer.natsConnection, streamName);
    await consumer.close();
  });

  it('should retrieve n published messages', done => {
    const data = generateMessages(10);
    const callback = jest.fn();

    (async () => {
      await publishMessages(
        consumer.natsConnection,
        streamName,
        `${streamName}.row`,
        data,
      );
      let tracker = 0;
      await consumer.pull(`${streamName}.row`, async msg => {
        expect(msg.id).toBe(data[tracker].id);
        tracker++;

        callback(msg.id);
        if (callback.mock.calls.length === data.length) {
          expect(callback.mock.calls.length).toEqual(data.length);
          expect(callback).toHaveBeenCalledWith(data.map(d => d.id));
        }
        done();
      });
    })();
  });
});
