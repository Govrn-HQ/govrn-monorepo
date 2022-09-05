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

  cy.fixture('contributions.json').then((contributions) => {
    this.contributions = contributions
  });

  cy.login(network, 
    address, 
    COOKIE
  );

  cy.get('[data-cy="myContributions-btn"]')
    .should('be.visible')
    .click({force:true});

});

describe("MetaMask and seed db", () => {

  it('Report your first Contribution', () => {

    cy.get('[data-cy="reportFirstContribution-btn"]')
      .click();
      
    cy.get('input[name="name"]')
      .type(this.contributions[0].name)
      .should('have.value', this.contributions[0].name);
  
    cy.get(".css-ujecln-Input2 #react-select-3-input")
      .type(`${this.contributions[0].activityType}{enter}`);
    
    cy.get('[name="details"]')
      .click() 
      .type(this.contributions[0].details);   
    
    cy.get('[name="proof"]') 
      .type(this.contributions[0].proof); 
        
    cy.get(".css-ujecln-Input2 #react-select-5-input") 
      .click({ force: true})
      .type(`${this.contributions[0].dao}{enter}`);
        
    cy.get('[data-cy="addContribution-btn"]')
      .click({ force: true }) 

    cy.wait(3000);
    cy.contains('Please select at least one Contribution to attribute to a DAO or mint.');

  });

 
});
   
