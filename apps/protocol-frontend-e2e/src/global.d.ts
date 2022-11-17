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

  /**
   * Seed DB
   */
  interface Chainable<Subject> {
    seedDB(tableName: string): void;
  }

  /**
   * teardown DB
   */
  interface Chainable<Subject> {
    teardownDB(tableNames: Array<string>): void;
  }

  interface Chainable<Subject> {
    switchWindow(): void;
  }

  declare interface Window {
    ethereum: any;
    localStorage: Storage;
  }
}

declare global {
  type JSONPrimitive = string | number | boolean | null;
  type JSONObject = { [k: string]: JSONValue };
  type JSONArray = JSONValue[];
  type JSONValue = JSONArray | JSONObject | JSONPrimitive;
  type JsonObject = Record<string, unknown>;
}
