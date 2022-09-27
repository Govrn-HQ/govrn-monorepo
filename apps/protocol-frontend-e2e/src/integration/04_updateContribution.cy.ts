/// <reference types="cypress" />

beforeEach(() => {
  for (const tableName of ["LoginUser2", "Guild", "GuildUser2", "Contribution2"]){
    cy.seedDB(tableName);
  }
  cy.fixture('testaccounts.json').then(accounts => {
    this.accounts = accounts;
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });
  cy.fixture('contributions.json').then(contributions => {
    this.contributions = contributions;
  });
  //never found timeout
  cy.get('[data-cy="myDashboards-btn"]', { timeout: 60000 })
    .should('be.enabled')
    .click({ force: true });

  cy.get('[data-cy="contributionsSidebar-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });

  cy.get('[data-testid="editContribution-test"]', { timeout: 60000 })
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true });
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000);
});
after(() => {
  cy.teardownDB(["Guild","User",  "GuildUser", "Contribution"]);
});

describe('Edit first Contribution', () => {
  it('Update/Edit Contribution', () => {
    const contribution = this.contributions[1];

    cy.get('input[data-testid="editContributionForm-name"]')
      .clear()
      .type(contribution.name)
      .should('have.value', contribution.name);

    cy.get('.css-ujecln-Input2')
      .should('be.visible')
      .eq(0)
      .children()
      .eq(0)
      .type(`${contribution.activityType}{enter}`);

    cy.get('textarea[data-testid="textarea-test"]')
      .clear()
      .click()
      .type(contribution.details);

    cy.get('input[data-testid="editContributionForm-proof"]')
      .clear()
      .type(contribution.proof);

    cy.get('.css-ujecln-Input2')
      .eq(1)
      .children()
      .eq(0)
      .type(`${contribution.dao}{enter}`);

    cy.get('[ data-cy="updateContribution-test-btn"]').click();
     // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000) //wait for all the remaining xhr requests

    cy.contains(
      'Please select at least one Contribution to attribute to a DAO or mint.',
    );
  
  });
});
