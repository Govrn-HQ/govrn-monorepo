/// <reference types="cypress" />

before(() => {
  const getChaintTypeID = `SELECT id
                           FROM "ChainType"
                           WHERE name = 'Goerli-Test'`;
  const chainTypeName = 'Goerli-Test';

  //seed ChainType table
  cy.task('create_chainType', chainTypeName);

  //seed User table
  cy.fixture('users.json').then(users => {
    const userData = users[0];
    cy.task('queryDatabase', getChaintTypeID).then(res => {
      const chainTypeID = res.rows[0].id;
      userData['chain_type_id'] = chainTypeID;
      cy.task('create_user', userData);
    });
  });

  //seed Guild table
  cy.fixture('daos.json').then(guilds => {
    for (const guild of guilds) {
      cy.task('create_guild', guild.name);
    }
  });

  cy.fixture('contributions.json').then(contributions => {
    this.contributions = contributions;
  });

  cy.fixture('testaccounts.json').then(accounts => {
    this.accounts = accounts;
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="myDashboards-btn"]', { timeout: 15000 })
    .scrollIntoView()
    .should('be.visible')
    .click();

  cy.get('[data-cy="contributionsSidebar-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click();

  cy.get('[data-cy="reportFirstContribution-btn"]', {
    timeout: 10000,
  })
    .should('be.visible')
    .click({ force: true });
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000);
});
after(() => {
  const getUserID = `SELECT id
                     FROM "User"
                     WHERE name = 'testusernamegovrne2etesting2022'`;
  const chainTypeName = 'Goerli-Test';

  //teardown UserActivity table
  cy.task('queryDatabase', getUserID).then(res => {
    const userID = res.rows[0].id;
    cy.task('delete_UserActivity', userID);
  });

  //teardown Guild table
  cy.fixture('daos.json').then(guilds => {
    for (const guild of guilds) {
      const guild_name = guild.name;
      cy.task('delete_guild', guild_name);
    }
  });

  //teardown Contribution table
  cy.fixture('contributions.json').then(contributions => {
    const name = contributions[0].name;
    cy.task('delete_contribution', name);
  });

  //teardown User table
  cy.fixture('users.json').then(users => {
    const username = users[0].username;
    cy.task('delete_user', username);
  });

  //teardown ChainType table
  cy.task('delete_chainType', chainTypeName);
});

describe('Create First Contribution', () => {
  it('Report your first Contribution', () => {
    const contribution = this.contributions[0];

    cy.get('input[data-testid="reportForm-name"]', { timeout: 20000 })
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

    cy.contains(
      'Please select at least one contribution to attribute to a DAO or mint.',
      { timeout: 20000 },
    );
  });
});
