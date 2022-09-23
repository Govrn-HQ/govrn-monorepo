/// <reference types="cypress" />

const mintContributionDBQuery = `
  UPDATE "Contribution"
  SET status_id = 2
  WHERE proof = 'https://github.com/Govrn-HQ/airtable_migration.'
  RETURNING *;
  `;
const CONTRIBUTIONS_URL = 'http://localhost:3000/#/contributions'
beforeEach(() => {
  cy.fixture('testaccounts.json').then((accounts) => {
    this.accounts = accounts
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="myContributions-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });
  
  cy.mintContribution(mintContributionDBQuery);

  cy.visit(CONTRIBUTIONS_URL)

  cy.contains('Attestations')
    .click({force:true})
  
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000)
   
});

describe("Attestation flow", () => {
  it("attest to a minted Contribution", ()=>{
       
    cy.contains(`These are minted Contributions that you haven't already Attested to.`)
      .should('be.visible')

    cy.get('input[title="Toggle Row Selected"]')
      .click()

    cy.get('[data-testId="attest-testId"]')
      .click()

    cy.contains('Attest to DAO Contributions')
      .should('be.visible')

    cy.get('[data-testId="addAttestations-btn"]')
      .click()

    cy.get(`.chakra-modal__close-btn`) 
      .click({force: true})
  
    cy.contains('My Attestations')
      .click()

    cy.contains(`These are Contributions that you have already Attested to.`)
      .should('be.visible')

  });
 
});