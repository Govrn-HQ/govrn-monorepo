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
    cy.get('[data-testid="editContribution-test"]', { timeout: 40000 }).click();

    cy.get('input[data-testid="chakraInput-test"]')
      .eq(0)
      .clear()
      .type(this.contributions[1].name)
      .should('have.value', this.contributions[1].name);

    cy.get('.css-ujecln-Input2 #react-select-3-input')
      .click({ force: true })
      .type(`${this.contributions[1].activityType}{enter}`);

    cy.get('textarea[data-testid="textarea-test"]')
      .clear()
      .click()
      .type(this.contributions[1].details);

    cy.get('input[data-testid="chakraInput-test"]')
      .eq(1)
      .clear()
      .type(this.contributions[1].proof);

    cy.get('.css-ujecln-Input2 #react-select-5-input')
      .click({ force: true })
      .type(`${this.contributions[1].dao}{enter}`);

    cy.get('[ data-cy="updateContribution-test-btn"]').click();

    cy.contains(
      'Please select at least one Contribution to attribute to a DAO or mint.',
    );
  });
});
