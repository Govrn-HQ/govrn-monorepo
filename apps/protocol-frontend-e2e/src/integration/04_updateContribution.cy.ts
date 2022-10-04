/// <reference types="cypress" />

beforeEach(() => {
  //seed User, GUilds
  cy.fixture('users.json').then((users) => {
    const userData = users[0]
    cy.task('create_user', userData);
  });
  cy.fixture('daos.json').then((guilds) => {
    for (const guild of guilds){
      const guild_name = guild.name
      cy.task('create_guild', guild_name);
    }
  });
  cy.fixture('contributions.json').then((contributions) => {
    const contributionData=contributions[0]
    cy.task('contribution_status')
    cy.task('create_contribution', contributionData);
  });
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
    .click();

  cy.get('[data-cy="contributionsSidebar-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click();
 
  cy.get(".infinite-scroll-component")
    .scrollTo('500px');

  cy.get('[data-testid="editContribution-test"]', { timeout: 60000 })
    .should('be.visible')
    .click({ force: true });
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000);
});
after(() => {
    cy.fixture('daos.json').then((guilds) => {
      for (const guild of guilds){
        const guild_name = guild.name
        cy.task('delete_guild', guild_name);
      }
    });
  
    cy.fixture('contributions.json').then((contributions) => {
      //delete updated contribution
      const contribution_name = contributions[0].name //contribution not Updating. Must fix
      cy.task('delete_contribution', contribution_name);
    });
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
    cy.fixture('users.json').then((users) => {
      const username = users[0].username
      cy.task('delete_user', username);
    });
   
});

describe('Edit first Contribution', () => {
  it('Update/Edit Contribution', () => {
    const contribution = this.contributions[1];

    cy.get('input[data-testid="editContributionForm-name"]')
      .clear()
      .type(contribution.name)
      .should('have.value', contribution.name);

    cy.get('[data-cy="daoCreatableSelect-testing"]')
      .should('be.visible')
      .children()
      .find('input')
      .type(`${contribution.activityType}{enter}`);

    cy.get('textarea[data-testid="textarea-test"]')
      .clear()
      .click()
      .type(contribution.details);

    cy.get('input[data-testid="editContributionForm-proof"]')
      .clear()
      .type(contribution.proof);

    cy.get('[data-cy="daoSelect-testing"]')
      .should('be.visible')
      .children()
      .find('input')
      .type(`${contribution.dao}{enter}`);

    cy.get('[ data-cy="updateContribution-test-btn"]',  { timeout: 30000 })
      .should('exist')
      .should('be.visible')
      .click();
     // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000) //wait for all the remaining xhr requests

    cy.contains(
      'Please select at least one Contribution to attribute to a DAO or mint.',
    );
  
  });
});
