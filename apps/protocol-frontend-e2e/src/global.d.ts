/// <reference types="cypress" />

declare namespace Cypress {
  /**
     * Logs in to Metamask and intercepts with Graphql
  */
  interface Chainable<Subject> {
    login(address, privateKey): void;
  }
  /**
     * Intercepts with Graphql
  */
  interface Chainable<Subject> {
    interceptGQL(httpMethod: Method, operationNames: string[]): void;
  }

  interface Chainable<Subject> {
    switchWindow(): void;
  }

  declare interface Window {
      ethereum: any;
      localStorage: Storage;
  }

}

