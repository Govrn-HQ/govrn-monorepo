/// <reference types="cypress" />

const CONTRIBUTIONS_URL = 'http://localhost:3000/#/contributions'
beforeEach(() => {
  cy.fixture('testaccounts.json').then((accounts) => {
    this.accounts = accounts
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="myContributions-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });
  
  cy.fixture('users.json').then((accounts) => {
    this.accounts = accounts[1]
    const user2Account = this.accounts
    console.log(user2Account)
    const User2Login = `
    INSERT INTO "User" (id, name, address, chain_type_id, active, email )
      VALUES (100,'${user2Account.username}', '${user2Account.address}', 
        1, true, '${user2Account.email}'
      )
    ON CONFLICT DO NOTHING;
    `
    cy.task('queryDatabase', User2Login);
  });

  cy.fixture('contributions.json').then((accounts) => {
    this.accounts = accounts[3]
    const user2ContributionData = this.accounts
    const User2CreateAndMintContribution = `
    INSERT INTO "Contribution" (id, name, status_id, activity_type_id, user_id, date_of_engagement, details, proof )
      VALUES (10000, '${user2ContributionData.name}',2 , 1, 100, current_timestamp,
       '${user2ContributionData.details}', '${user2ContributionData.proof}'
      )
    ON CONFLICT DO NOTHING;
    `
    cy.task('queryDatabase', User2CreateAndMintContribution);
  });

  cy.visit(CONTRIBUTIONS_URL)

  cy.contains('Attestations')
    .click({force:true})
  
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000)
   
});

describe("Attestation flow", () => {
  it("attest to a minted Contribution", ()=>{

    cy.get('input[title="Toggle Row Selected"]')
      .click()

    cy.get('[data-testId="attest-testId"]')
      .click()

    cy.contains('Attest to DAO Contributions')
      .should('be.visible')

    cy.get('[data-testId="addAttestations-btn"]')
      .click()

    cy.get(`.chakra-modal__close-btn`, {timeout:10000}) 
      .click({force: true})

    // eslint-disable-next-line cypress/no-unnecessary-waiting 
    cy.wait(5000) //wait for the attestation loading-process
    cy.contains('My Attestations', {timeout:10000})
      .should('be.visible')
      .click({force:true})

    cy.contains(`These are Contributions that you have already Attested to.`, {timeout:10000})
      .should('be.visible')

  });
 
});