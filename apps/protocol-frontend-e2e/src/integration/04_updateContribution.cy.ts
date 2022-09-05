/// <reference types="cypress" />
const network = "goerli";
const address = Cypress.env('address');
const COOKIE = Cypress.env('COOKIE');

beforeEach(() => {
    cy.login(network, 
        address, 
        COOKIE
     );
     
    cy.fixture('contributions.json').then((contributions) => {
      this.contributions = contributions
    });
 
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
      .type(this.contributions[1].name)
      .should('have.value', this.contributions[1].name);
    
    cy.get(".css-ujecln-Input2 #react-select-3-input")
      .click({ force: true})
      .type(`${this.contributions[1].activityType}{enter}`);
   
    cy.get('[name="details"]')
      .clear()
      .click() 
      .type(this.contributions[1].details);   
    
    cy.get('[name="proof"]')
      .clear()
      .type(this.contributions[1].proof);   
        
    cy.get(".css-ujecln-Input2 #react-select-5-input") 
      .click({ force: true})
      .type(`${this.contributions[1].dao}{enter}`);
        
    cy.get('[ data-cy="updateContribution-test-btn"]')
      .click();

    cy.contains('Please select at least one Contribution to attribute to a DAO or mint.');

  });
 
});
   
