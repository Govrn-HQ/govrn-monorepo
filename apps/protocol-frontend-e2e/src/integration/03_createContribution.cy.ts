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
    cy.wait(1000);  //wait for 'Create Profile' button to display
    cy.visit("http://localhost:3000/#/contributions");
    //cy.contains('My Contributions').should('be.visible').click();


  });


 
    it ('Report your first Contribution', () => {
        
        cy.contains('Report a Contribution').click()
        
        cy.get('input[name="name"]')
            .type('Govrn Protocol Pull Request')
            .should('have.value', 'Govrn Protocol Pull Request')

        
        cy.contains('Select an activity type or add a new one').click({ force: true })
        cy.get('#react-select-3-listbox')
          .should('contain', 'Pull Request')
          .type('Pull Request{enter}')
        

        cy.get('[name="details"]').click() 
          .type('I added a section to our onboarding documentation that provides an overview of our Discord channels.')       
        
        
        cy.get('[name="proof"]') 
          .type('https://github.com/Govrn-HQ/airtable_migration.')   
            
        cy.contains('Select a DAO to associate this Contribution with')  //All DAOs
            

        cy.contains('Add Contribution').click({ force: true }).click({ force: true })  
        //cy.visit('http://localhost:3000/#/contributions')   

    });
});
   
