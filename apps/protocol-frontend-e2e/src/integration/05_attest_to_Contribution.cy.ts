/// <reference types="cypress" />

const mintContributionOnDB = `
  UPDATE "Contribution"
  SET status_id = 2
  WHERE proof = 'https://github.com/Govrn-HQ/airtable_migration.'
  RETURNING *;
  `;
beforeEach(() => {
  cy.fixture('testaccounts.json').then((accounts) => {
    this.accounts = accounts
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });
    //Mint a contribution//
    cy.get('[data-cy="myContributions-btn"]')
      .should('be.visible')
      .click({ force: true });
    
    cy.get('input[title="Toggle Row Selected"]')
      .click()
    
    cy.get('[data-testid="mint-btn-test"]') 
      .should('be.visible')
      .click();
    cy.get('[data-testid="checkbox-testid"]') //I understand
      .click()
    
    cy.get('[data-testid="mintContribution-test"]')
      .should('be.visible')
      //.click();
  
    cy.task('queryDatabase', mintContributionOnDB).then(res => {
      expect(res.rows[0].status_id).to.equal(2);
    
    cy.get(`.chakra-modal__close-btn`) 
      .click({force: true})

    cy.visit('http://localhost:3000/#/contributions')
    });

    cy.contains('Attestations')
      .click({force:true})
   
});

describe("Attestation flow", () => {
 
  it("attest to a minted Contribution", ()=>{
       
    //test attesting a minted Contribution(More to be done)
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
    cy.wait(3000)
    cy.get(`.chakra-modal__close-btn`) 
      .click({force: true})
    cy.wait(3000)
    cy.contains('My Attestations')
      .click()

    cy.contains(`These are Contributions that you have already Attested to.`)
      .should('be.visible')

    
  });
 
});