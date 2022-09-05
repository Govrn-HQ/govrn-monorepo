/// <reference types="cypress" />
const network = "goerli";
const address = Cypress.env('address');
const COOKIE = Cypress.env('COOKIE');

beforeEach(() => {
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
    cy.wait(3000); //wait for el-DOM attachment

    cy.get('[data-cy=connect-wallet]')
      .click();

    cy.contains('MetaMask')
      .click(); 

    cy.get('[data-cy="myContributions-btn"]')
      .should('be.visible')
      .click({ force: true });
});

describe("MetaMask and seed db", () => {
 
  it("Update/Edit Contribution", ()=>{
    cy.get('[aria-label="Edit Contribution"]')
      .click()

    cy.get('input[placeholder="DAOContributor"]')
      .clear()
      .type('Govrn Protocol Note Taking')
      .should('have.value', 'Govrn Protocol Note Taking');
    
    cy.get(".css-ujecln-Input2 #react-select-3-input")
      .click({ force: true})
      .type('Note Taking{enter}');
   
    cy.get('[name="details"]')
      .clear()
      .click() 
      .type('I added a section to our onboarding documentation that provides an overview of our Discord channels.');   
    
    cy.get('[name="proof"]')
      .clear()
      .type('https://github.com/Govrn-HQ/airtable_migration.');   
        
    cy.get(".css-ujecln-Input2 #react-select-5-input") 
      .click({ force: true})
      .type('MGD{enter}');
        
    cy.get('[ data-cy="updateContribution-test-btn"]')
      .click({ force: true }) 

    cy.contains('Please select at least one Contribution to attribute to a DAO or mint.');

  });
 
});
   
