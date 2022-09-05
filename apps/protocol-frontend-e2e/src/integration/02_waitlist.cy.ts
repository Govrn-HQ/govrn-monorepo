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
});

afterEach(()=>{
  cy.login(network, 
    address, 
    COOKIE
  ); 
  // //Now in Discord's window
  // cy.switchWindow()
  // cy.title()
  //   .should('eq', 'Discord');
  
  // cy.get('input[name=""username]')
  //   .type('testUserFromCypress');

  // cy.get("button")
  //   .click();
});

describe("New User Login", () => {
  it("Fill Govrn Waitlist Form", () => {
    cy.login(network, 
      address, 
      COOKIE
    );
 
    cy.interceptGQL('POST',
                  ['listUserByAddress',
                    'createUserCustom'
                  ],
                     COOKIE
                );
    cy.wait(5000);
    cy.get('[data-cy="create-my-profile-btn"]')
      .click({force:true});

    cy.get('input[name="username"]')   //'input[data-cy="username"]'
      .type('TestUsername');
    
    cy.get('[name="email"]')
      .type('testemail@gmail.com');
    
    cy.get('[data-cy="join-waitlist"]')
      .click();
    cy.wait(3000);

  });

});