/// <reference types="cypress" />

const network = "goerli";
const address: string = Cypress.env('address');
const COOKIE: string = Cypress.env('COOKIE');

describe("Login with Metamask", () => {
  it("Lets user connect with Metamask provider", () => {
  
    cy.login(network, address, COOKIE);

    cy.contains('Connect Wallet')
      .click();
    cy.contains('MetaMask')
      .click();
    cy.wait(5000);  //wait for 'Create Profile' button to display
    cy.contains('Create My Profile')
      .should('be.visible')
      .click();
  });

  it("Fill Govrn Waitlist Form", () => {
    cy.interceptGQL('POST',
                    ['listUserByAddress','createUserCustom'],
                     COOKIE
                  );
   
    cy.get('[name="username"]')
      .type('TestUsername');

    cy.get('[name="email"]')
      .type('testemail@gmail.com');
    
    cy.contains('Join Waitlist')
      .click();
    
  });

});