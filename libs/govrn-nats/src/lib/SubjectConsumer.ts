import {
  AckPolicy,
  connect,
  ConnectionOptions,
  nanos,
  NatsConnection,
} from 'nats';
import { decodeJSON, streamExists } from './utils';

class SubjectConsumer<MessageType> {
  private connection: NatsConnection | null = null;

  private constructor(
    private readonly connectionOptions: Partial<ConnectionOptions>,
  ) {}

  private async init() {
    this.connection = await connect(this.connectionOptions);
  }

  public static async create<MessageType>(
    connectionOptions: Partial<ConnectionOptions>,
  ) {
    const consumer = new SubjectConsumer<MessageType>(connectionOptions);
    await consumer.init();
    return consumer;
  }

  public async pull(
    subject: string,
    callback: (data: MessageType) => void,
    expires = 5000,
    batch = 10,
  ) {
    if (!this.connection) {
      throw new Error(':: Connection not initialized');
    }

    const [streamName] = subject.split('.');
    if (!(await streamExists(this.connection, streamName))) {
      throw new Error(`Stream ${streamName} does not exist`);
    }

    console.log(`:: Consuming messages from ${streamName}`);
    const js = this.connection.jetstream();

    const subscription = await js.pullSubscribe(subject, {
      mack: true,
      config: {
        durable_name: `durable-${streamName}-${Date.now()}`,
        ack_policy: AckPolicy.Explicit,
        ack_wait: nanos(4000),
      },
    });

    const done = (async () => {
      await subscription.pull({ no_wait: true, batch, expires });
      for await (const m of subscription) {
        await callback(decodeJSON<MessageType>(m));
        m.ack();
      }
    })();

    await done;
    subscription.unsubscribe();
  }

  public get natsConnection() {
    if (!this.connection) {
      throw new Error(':: Connection not initialized');
    }
    return this.connection;
  }

  public async close() {
    if (!this.connection) {
      throw new Error(':: Connection not initialized');
    }

    await this.connection.drain();
    await this.connection.close();
    console.log(':: Connection closed');
  }
}

export default SubjectConsumer;
