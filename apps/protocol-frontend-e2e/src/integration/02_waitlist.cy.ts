/// <reference types="cypress" />

const insertDAOs = `
INSERT INTO "Guild" (id, name)
    VALUES (1,'Govrn')
ON CONFLICT DO NOTHING;

INSERT INTO "Guild" (id, name)
    VALUES (2,'MGD')
ON CONFLICT DO NOTHING;
`
beforeEach(()=>{
  cy.task('queryDatabase', insertDAOs)
    .then((res) => {
    expect(res.length*res[0].rowCount).to.equal(0);
  });

  cy.fixture('users.json').then((users) => {
    this.users = users
  });

  cy.fixture('testaccounts.json').then((accounts) => {
    this.accounts = accounts
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });
 
});

afterEach(()=>{
  
  cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  //Now in Discord's window
});

describe("Join Waitlist", () => {
  it("Fill Govrn Waitlist Form", () => {

    cy.get('[data-cy="create-my-profile-btn"]',{ timeout: 3000 })
      .should('be.visible')
      .click({force:true});

    cy.get('input[data-testid="chakraInput-test"]') 
      .eq(0)  
      .type(this.users[0].username)
      .should('have.value', this.users[0].username);
    
    cy.get('input[data-testid="chakraInput-test"]') 
      .eq(1) 
      .type(this.users[0].email)
      .should('have.value',this.users[0].email)
    
    cy.get('[data-cy="join-waitlist"]')
      .click();
   
  });

});