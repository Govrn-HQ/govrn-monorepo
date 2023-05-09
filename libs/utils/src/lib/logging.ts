import { createLogger, format, transports } from 'winston';

const { timestamp, json } = format;

// TODO: cust class appending appending more info per log
export const getLogger = (source: string, tag: string) => {
  const logger = createLogger({
    level: 'info',
    format: format.combine(timestamp(), json()),
    defaultMeta: { source: source, tag: tag },
    transports: [new transports.Console()],
  });
  return logger;
};
