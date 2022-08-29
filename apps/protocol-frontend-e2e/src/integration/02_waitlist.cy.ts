/// <reference types="cypress" />
import { MockExtensionProvider } from '../support/e2e';

import updateUserActiveStatus from '../support/db';

const network = "goerli";
const address: string = Cypress.env('address');
const COOKIE: string = Cypress.env('COOKIE');
//console.log('coookie,: '+ COOKIE);
 
describe("MetaMask", () => {
  it("Lets user connect with Metamask provider", () => {
   
    cy.visit("http://localhost:3000/", {
    onBeforeLoad(win) {
        win.ethereum = new MockExtensionProvider(network, address);
    }
    });
    //add cookie into '/siwe/active' request
    cy.intercept('/siwe/active', req => {
      req.headers['Cookie'] = COOKIE;
    });
    //network requests
    cy.intercept('POST', '/graphql', req => {
    req.headers['Cookie'] = COOKIE;
    if (req.body.operationName ===  'listUserByAddress') {
      req.headers['Cookie'] = COOKIE;
      req.alias = `gql${req.body.operationName}Query`;
    } 
    if (req.body.operationName ===  'createUserCustom') {
      req.headers['Cookie'] = COOKIE;
      req.alias = `gql${req.body.operationName}Mutation`;
      req.reply((res) => {
        cy.log(res.toString());
        console.log(res.toString());

      });
    }
  });

    cy.contains('Connect Wallet').click();
    cy.contains('MetaMask').click();
    cy.wait(5000);  //wait for 'Create Profile' button to display

    cy.contains('Create My Profile').should('be.visible').click();
  });

  it("Fill Govrn Waitlist Form", () => {
    //network requests
    cy.intercept('POST', '/graphql', req => {
      req.headers['Cookie'] = COOKIE;
      if (req.body.operationName ===  'listUserByAddress') {
        req.headers['Cookie'] = COOKIE;
        req.alias = `gql${req.body.operationName}Query`;
      } 
      if (req.body.operationName ===  'createUserCustom') {
        req.headers['Cookie'] = COOKIE;
        req.alias = `gql${req.body.operationName}Mutation`;
        req.reply((res) => {
          cy.log(res.toString());
          console.log(res.toString());
  
        });
      }
    });
   
    cy.get('[name="username"]')
      .type('TestUsername');

    cy.get('[name="email"]')
      .type('testemail@gmail.com');
    
    cy.contains('Join Waitlist').click();
  });
});