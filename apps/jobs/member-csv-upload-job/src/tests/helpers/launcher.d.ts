// Original code can be found at https://github.com/nats-io/nats.js/blob/main/test/helpers/launcher.d.ts#L1
export interface PortInfo {
  clusterName?: string;
  hostname: string;
  port: number;
  cluster?: number;
  monitoring?: number;
  websocket?: number;
}

export interface Ports {
  nats: string[];
  cluster?: string[];
  monitoring?: string[];
  websocket?: string[];
}

export interface NatsServer extends PortInfo {
  restart(): Promise<NatsServer>;
  getLog(): string;
  stop(): Promise<void>;
  signal(s: 'KILL' | 'QUIT' | 'STOP' | 'REOPEN' | 'RELOAD' | 'LDM');
  varz(): Promise<any>;
}
