import 'express-session';
import { SiweResponse } from 'siwe';

declare module 'express-session' {
  interface SessionData {
    userId: string;
    siwe: SiweResponse;
    nonce: string;
  }
}
