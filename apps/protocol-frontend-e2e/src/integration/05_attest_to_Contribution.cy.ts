/// <reference types="cypress" />
const network = "goerli";
const address = Cypress.env('address');
const COOKIE = Cypress.env('COOKIE');

beforeEach(() => {
    cy.login(network, 
        address, 
        COOKIE
     );
    //Mint a contribution//
    cy.get('[data-cy="myContributions-btn"]')
      .should('be.visible')
      .click({ force: true });
    
    // cy.get('input[data-testid="chakraInput-test"]', {timeout:15000}) =>select contribution checkbox
    //   .eq(3)
    cy.get('input[title="Toggle Row Selected"]')
      .click()
    
    cy.get('[data-testid="mint-btn-test"]') //click mint btn
      .should('be.visible')
      .click();
    cy.get('[data-testid="checkbox-testid"]') //I understand
      .click()
    //mint contribution
    cy.get('[data-testid="mintContribution-test"]')
      .should('be.visible')
      .click();
   
});

describe("Attestation flow", () => {
 
  it("attest to a contribution", ()=>{

    // Start attestation flow here
    // cy.contains("Attestations")
    //   .should("be.visible")
    //   .click()

    // cy.contains("These are minted Contributions that you haven't already Attested to.")
    //   .should("be.visible")

    
  });
 
});