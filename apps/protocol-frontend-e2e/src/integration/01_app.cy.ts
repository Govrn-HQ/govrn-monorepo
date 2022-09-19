/// <reference types="cypress" />
import { getGreeting } from '../support/app.po';

describe('protocol-frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('should have visually hidden h1 for "Govrn" which still shows up in the DOM', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    getGreeting().contains('Govrn');
  });
});
