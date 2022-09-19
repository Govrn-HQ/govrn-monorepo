/// <reference types="cypress" />

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

  cy.fixture('testaccounts.json').then((accounts) => {
    this.accounts = accounts
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="myContributions-btn"]', {timeout:10000})
    .should('be.visible')
    .click({force:true});

});

describe("Create First Contribution", () => {

  it('Report your first Contribution', () => {

    cy.get('[data-cy="reportFirstContribution-btn"]' , { timeout: 10000 })
      .click();
      
    cy.get('input[data-testid="chakraInput-test"]')
      .eq(0)
      .type(this.contributions[0].name)
      .should('have.value', this.contributions[0].name);
  
    cy.get(".css-ujecln-Input2 #react-select-3-input")
      .type(`${this.contributions[0].activityType}{enter}`);
    
    cy.get('textarea[data-testid="textarea-test"]')
      .click() 
      .type(this.contributions[0].details);   
    
    cy.get('input[data-testid="chakraInput-test"]')
      .eq(1)
      .type(this.contributions[0].proof); 
        
    cy.get(".css-ujecln-Input2 #react-select-5-input") 
      .click({ force: true})
      .type(`${this.contributions[0].dao}{enter}`);
        
    cy.get('[data-cy="addContribution-btn"]')
      .click({ force: true }) 

    cy.contains('Please select at least one Contribution to attribute to a DAO or mint.', 
       {timeout: 10000 });

  });

 
});
   
