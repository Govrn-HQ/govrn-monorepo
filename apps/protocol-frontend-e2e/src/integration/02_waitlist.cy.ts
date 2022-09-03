/// <reference types="cypress" />

const network = "goerli";
const address: string = Cypress.env('address');
const COOKIE: string = Cypress.env('COOKIE');

const truncateTablesQuery = `
TRUNCATE TABLE "GuildContribution" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "Contribution" RESTART IDENTITY CASCADE;
TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;
`

describe("Login with Metamask", () => {
  it("Lets user connect with Metamask provider", () => {
    cy.task('queryDatabase', truncateTablesQuery)
      .then((res) => {
      expect(res[0].rows.length).to.equal(0);
      });
      
    cy.login(network, 
            address, 
            COOKIE
          );

    cy.get('[data-cy=connect-wallet]')
      .click();
    cy.contains('MetaMask')
      .click();
    cy.wait(5000);  //wait for 'Create Profile' button to display
    cy.get('[data-cy="create-my-profile-btn"]')
      .should('be.visible')
      .click();
  });

  it("Fill Govrn Waitlist Form", () => {
    cy.interceptGQL('POST',
                    ['listUserByAddress',
                    'createUserCustom'
                  ],
                     COOKIE
                  );
   
    cy.get('input[name="username"]')   //'input[data-cy="username"]'
      .type('TestUsername');
    
    cy.get('[name="email"]')
      .type('testemail@gmail.com');
    
    cy.get('[data-cy="join-waitlist"]')
      .click();
    
  });

});