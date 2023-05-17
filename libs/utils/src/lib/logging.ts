import { createLogger, format, transports } from 'winston';

const { timestamp, json, splat } = format;

// TODO: cust class appending appending more info per log
export const getLogger = (source: string, tag: string) => {
  const logger = createLogger({
    level: 'info',
    format: format.combine(splat(), timestamp(), json()),
    defaultMeta: { source: source, tag: tag },
    transports: [new transports.Console()],
  });
  return logger;
};
