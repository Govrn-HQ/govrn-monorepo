/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="cypress" />


// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
    import { MockExtensionProvider } from "../src/support/e2e";
    import { BigNumber, ethers } from 'ethers';
   
    interface Chainable<Subject> {
      login(network: string, address: string, COOKIE: string): void;
    }
    interface Chainable<Subject> {
      interceptGQL(method: string, operationNames: string[], COOKIE: string): void;
      }

    declare interface Window {
        ethereum: any;
        localStorage: Storage;
      }





  }

