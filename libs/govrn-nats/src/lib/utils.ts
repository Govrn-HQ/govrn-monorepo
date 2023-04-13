import {
  JetStreamClient,
  JetStreamManager,
  JsMsg,
  JSONCodec,
  NatsConnection,
} from 'nats';

export const decodeJSON = <T>(msg: JsMsg): T =>
  JSONCodec().decode(msg.data) as T;

export const streamExists = async (
  connection: NatsConnection,
  streamName: string,
) => {
  const js = await connection.jetstreamManager();
  try {
    await js.streams.info(streamName);
    return true;
  } catch (e) {
    return false;
  }
};
