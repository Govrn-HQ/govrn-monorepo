/// <reference types="cypress" />

const network = "goerli";
const address: string = Cypress.env('address');
const COOKIE: string = Cypress.env('COOKIE');

const truncateTablesQuery = `
TRUNCATE TABLE "GuildContribution" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Contribution" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;
`
beforeEach(()=>{
  cy.task('queryDatabase', truncateTablesQuery)
    .then((res) => {
    expect(res[0].rows.length).to.equal(0);
  });

  cy.fixture('users.json').then((users) => {
    this.users = users
  });
  
  cy.login(network, 
    address, 
    COOKIE
  );
});

afterEach(()=>{
  cy.login(network, 
    address, 
    COOKIE
  ); 
  
  //Now in Discord's window
});

describe("New User Login", () => {
  it("Fill Govrn Waitlist Form", () => {
  
    cy.get('[data-cy="create-my-profile-btn"]')
      .click({force:true});

    cy.get('input[data-testid="chakraInput-test"]') 
      .eq(0)  
      .type(this.users[0].username);
    
    cy.get('input[data-testid="chakraInput-test"]') 
      .eq(1) 
      .type(this.users[0].email);
    
    cy.get('[data-cy="join-waitlist"]')
      .click();

    cy.wait(3000); 

  });

});