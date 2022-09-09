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

  cy.get('[data-cy="myContributions-btn"]', {timeout:10000})
    .should('be.visible')
    .click({force:true});

});

describe("Create First Contribution", () => {

  it('Report your first Contribution', () => {
    cy.wait(3000)
    cy.get('[data-testid="floatingreportbtn-testid"]' , { timeout: 10000 })
      .click();
    cy.wait(10000)
    cy.get('input[data-testid="chakraInput-test"]')
      .eq(0)
      .type(this.contributions[2].name)
      .should('have.value', this.contributions[2].name);
    
    cy.get(".css-ujecln-Input2 #react-select-7-input")
      .click({ force: true})
      .type(`${this.contributions[2].activityType}{enter}`);
   
    cy.get('textarea[data-testid="textarea-test"]')
      .clear()
      .click() 
      .type(this.contributions[2].details);   
    
    cy.get('input[data-testid="chakraInput-test"]')
      .eq(1)
      .clear()
      .type(this.contributions[2].proof);   
        
    cy.get(".css-ujecln-Input2 #react-select-9-input") 
      .click({ force: true})
      .type(`${this.contributions[2].dao}{enter}`);
        
    cy.get('[data-cy="addContribution-btn"]')
      .click();

    cy.contains('Please select at least one Contribution to attribute to a DAO or mint.');
      
 
  
   

  });

 
});