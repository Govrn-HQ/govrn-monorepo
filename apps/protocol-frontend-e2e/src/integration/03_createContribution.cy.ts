/// <reference types="cypress" />

const network = "goerli";
const address = Cypress.env('address');
const COOKIE = Cypress.env('COOKIE');

const query = `
  UPDATE "User"
  SET active = TRUE
  WHERE email = 'testemail@gmail.com'
  RETURNING *;
  `
//Before test, ensure that User is active
describe("MetaMask and seed db", () => {
  it("Lets user connect with Metamask provider", () => {
    cy.login(network, address, COOKIE);

    //Get user off the waitlist
    cy.task('queryDatabase', query)
      .then((res) => {
      expect(res.rows[0].active).to.equal(true);
      });

    //network requests
    cy.interceptGQL('POST',
                  ['listUserByAddress','createUserCustom'],
                  COOKIE
              );

    cy.contains('Connect Wallet')
      .click();
    cy.contains('MetaMask')
      .click(); 

    cy.wait(3000); //'My Contributions' button to display
    cy.contains('My Contributions')
      .should('be.visible')
      .click();

  });

  it('Report your first Contribution', () => {
    //network requests
    cy.interceptGQL('POST',
                   ['listUserByAddress',
                   'createUserCustom'
                   ],
                   COOKIE
              );
  
    cy.contains('Report a Contribution')
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
        
    cy.contains('Add Contribution')
      .click({ force: true }) 
    cy.contains('Please select at least one Contribution to attribute to a DAO or mint.');

  });
 
});
   
