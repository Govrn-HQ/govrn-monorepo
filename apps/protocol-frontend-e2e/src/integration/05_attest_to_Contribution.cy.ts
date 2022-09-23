/// <reference types="cypress" />

const mintContributionDBQuery = `
  UPDATE "Contribution"
  SET status_id = 2
  WHERE name = 'Govrn Protocol Note Taking'
  RETURNING *;
  `;
const User2MintsContributionQuery = `
  INSERT INTO "User" (id, name, address, chain_type_id, active, email )
      VALUES (100,'JohnDoe', '0xc2b6bc23853Ab1d3e9D9df9C93ADA346c0A8f715', 1, true, 'johndoe@yahoo.com')
  ON CONFLICT DO NOTHING;

  INSERT INTO "Contribution" (id, name, status_id, activity_type_id, user_id, date_of_engagement, details, proof )
      VALUES (10000, 'Test Automation',2, 1, 100, current_timestamp, 'Fixed flaky cypress tests', 'https://github.com/Govrn-HQ/documentation/cypress-automation.')
  ON CONFLICT DO NOTHING;

`
const CONTRIBUTIONS_URL = 'http://localhost:3000/#/contributions'
beforeEach(() => {
  cy.fixture('testaccounts.json').then((accounts) => {
    this.accounts = accounts
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="myContributions-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });
  
  //cy.mintContribution(mintContributionDBQuery);

  cy.task('queryDatabase', User2MintsContributionQuery)


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