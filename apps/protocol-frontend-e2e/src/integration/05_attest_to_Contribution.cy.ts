/// <reference types="cypress" />

beforeEach(() => {
  const tableNamesOrActions = ["Guild", "LoginUser2", 
       "User2CreateAndMintContribution", "GuildContribution"
    ];
  for (const tableName of tableNamesOrActions){
    cy.seedDB(tableName);
  }
  
  cy.fixture('testaccounts.json').then((accounts) => {
    this.accounts = accounts
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="myContributions-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });

  cy.visit('http://localhost:3000/#/contributions')

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