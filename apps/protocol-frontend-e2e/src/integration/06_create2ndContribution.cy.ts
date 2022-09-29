/// <reference types="cypress" />

before(() => {
  for (const tableName of ["LoginUser2","Guild","GuildUser1","ContributionStatus","Contribution1"]){
    cy.seedDB(tableName);
  };

  cy.fixture('testaccounts.json').then(accounts => {
    this.accounts = accounts;
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="myDashboards-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });

  cy.get('[data-testid="floatingreportbtn-testid"]', {
      timeout: 10000,
    }).should('be.visible')
      .click();

  cy.fixture('contributions.json').then(contributions => {
      this.contributions = contributions;
      });
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000)
});
afterEach(() => {
  //teardown 
  cy.teardownDB(["GuildContribution", "Contribution","GuildUser", "Guild", "User"]);
});

describe("Create Second Contribution", () => {
  it('Report your Second Contribution', () => {
    const contribution = this.contributions[2];

    cy.get('input[data-testid="reportForm-name"]', {timeout:20000})  
      .should('be.visible')
      .type(contribution.name)
      .should('have.value', contribution.name);

    cy.get('[data-cy="daoCreatableSelect-testing"]')
      .should('be.visible')
      .children()
      .find('input')
      .type(`${contribution.activityType}{enter}`);

    cy.get('textarea[data-testid="textarea-test"]')
      .click()
      .type(contribution.details);

    cy.get('input[data-testid="reportForm-proof"]').type(contribution.proof);

    cy.get('[data-cy="daoSelect-testing"]')
      .should('be.visible')
      .children()
      .find('input')
      .type(`${contribution.dao}{enter}`);

    cy.get('[data-cy="addContribution-btn"]').click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)
    cy.contains(
      'Please select at least one Contribution to attribute to a DAO or mint.',
      { timeout: 20000 },
    );
  });
});