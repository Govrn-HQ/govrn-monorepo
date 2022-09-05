/// <reference types="cypress" />

const network = "goerli";
const address = Cypress.env('address');
const COOKIE = Cypress.env('COOKIE');

const getUserOffWaitlistQuery = `
  UPDATE "User"
  SET active = TRUE
  WHERE email = 'testemail@gmail.com'
  RETURNING *;
  `
before(()=>{
   //Get user off the waitlist
  cy.task('queryDatabase', getUserOffWaitlistQuery)
    .then((res) => {
    expect(res.rows[0].active).to.equal(true);
  });

  cy.login(network, 
    address, 
    COOKIE
);

  //network requests
  cy.interceptGQL('POST',
          ['listUserByAddress',
          'createUserCustom'
        ],
          COOKIE
      );

  cy.get('[data-cy="myContributions-btn"]')
    .should('be.visible')
    .click();

});

describe("MetaMask and seed db", () => {

  it('Report your first Contribution', () => {

    cy.get('[data-cy="reportFirstContribution-btn"]')
      .click();
      
    cy.get('input[name="name"]')
      .type('Govrn Protocol Pull Request')
      .should('have.value', 'Govrn Protocol Pull Request');
    
    cy.contains('Select an activity type or add a new one')
      .click({ force: true });
    cy.get('#react-select-3-listbox')
      .should('contain', 'Pull Request')
      .type('Pull Request{enter}');
    
    cy.get('[name="details"]')
      .click() 
      .type('I added a section to our onboarding documentation that provides an overview of our Discord channels.');   
    
    cy.get('[name="proof"]') 
      .type('https://github.com/Govrn-HQ/airtable_migration.');   
        
    cy.contains('Select a DAO to associate this Contribution with');
        
    cy.get('[data-cy="addContribution-btn"]')
      .click({ force: true }) 

    cy.contains('Please select at least one Contribution to attribute to a DAO or mint.');

  });

 
});
   
