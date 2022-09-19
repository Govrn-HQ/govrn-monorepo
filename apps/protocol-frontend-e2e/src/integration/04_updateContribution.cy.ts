/// <reference types="cypress" />

beforeEach(() => {
  cy.fixture('testaccounts.json').then(accounts => {
    this.accounts = accounts;
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.fixture('contributions.json').then(contributions => {
    this.contributions = contributions;
  });

  cy.get('[data-cy="myContributions-btn"]')
    .should('be.visible')
    .click({ force: true });
});

describe('Edit first Contribution', () => {
  it('Update/Edit Contribution', () => {
    const contribution = this.contributions[1];

    cy.get('[data-testid="editContribution-test"]', { timeout: 10000 }).click();

    cy.get('input[data-testid="editContributionForm-name"]')
      .clear()
      .type(contribution.name)
      .should('have.value', contribution.name);

    cy.get('.css-ujecln-Input2 #react-select-3-input')
      .click({ force: true })
      .type(`${contribution.activityType}{enter}`);

    cy.get('textarea[data-testid="textarea-test"]')
      .clear()
      .click()
      .type(contribution.details);

    cy.get('input[data-testid="editContributionForm-name"]')
      .clear()
      .type(contribution.proof);

    cy.get('.css-ujecln-Input2 #react-select-5-input')
      .click({ force: true })
      .type(`${contribution.dao}{enter}`);

    cy.get('[ data-cy="updateContribution-test-btn"]').click();

    cy.contains(
      'Please select at least one Contribution to attribute to a DAO or mint.',
    );
  });
});
