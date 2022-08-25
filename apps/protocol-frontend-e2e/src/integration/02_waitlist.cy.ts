/// <reference types="cypress" />
import { MockExtensionProvider } from '../support/e2e'
const network = "goerli";
const address = "0xef73E4d33352FdFB3ffe20666a653BB9F4FcEEAf"
describe("MetaMask", () => {
  it("Lets user connect with Metamask provider", () => {
   
    cy.visit("http://localhost:3000/", {
    onBeforeLoad(win) {
        win.ethereum = new MockExtensionProvider(network, address);
    }

    });
  
    cy.contains('Connect Wallet').click();
    cy.contains('MetaMask').click();
    cy.wait(10000);  //wait for 'Create Profile' button to display

    cy.contains('Create My Profile').should('be.visible').click();


  });


  it("Fills Form to Join Govrn Waitlist", () => {

    //cy.wait('@gqlcreateUserCustomMutation');
    //cy.request('POST', "http://localhost:4000/graphql")
    // cy.request('POST', "http://localhost:4000/graphql").then(response =>{
    //   console.log(response);
    // });

    cy.get('[name="username"]')
      .type('TestUsername');

    cy.get('[name="email"]')
      .type('testemail@gmail.com');

    cy.contains('Join Waitlist').click();

  });


});


// authentication, token
// setting cookies
// Interacting with Graphql (POST requests)