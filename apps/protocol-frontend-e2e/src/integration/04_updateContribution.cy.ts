/// <reference types="cypress" />

beforeEach(() => {
  const chainTypeName = 'Goerli-Test';
  const getChaintTypeID = `SELECT id
                           FROM "ChainType"
                           WHERE name = 'Goerli-Test'`;
  const getUserID = `SELECT id
                     FROM "User"
                     WHERE name = 'testusernamegovrne2etesting2022'`;
  const getActivityTypeID = `SELECT id
                             FROM "ActivityType"
                             WHERE name = 'Pull Request'`;

  //seed ChainType table
  cy.task('create_chainType', chainTypeName);

  //seed ContributionStatus table (not sure if this is necessary?)
  cy.task('contribution_status');

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
      const guild_name = guild.name;
      cy.task('create_guild', guild_name);
    }
  });

  //seed Contribution table
  cy.fixture('contributions.json').then(contributions => {
    const contributionData = contributions[0];
    cy.task('queryDatabase', getUserID).then(res => {
      const userID = res.rows[0].id;
      contributionData['userID'] = userID;
    });
    cy.task('queryDatabase', getActivityTypeID).then(res => {
      const ActivityTypeID = res.rows[0].id;
      contributionData['activityTypeID'] = ActivityTypeID;
    });
    cy.task('create_contribution', contributionData);
  });

  //Login User
  cy.fixture('testaccounts.json').then(accounts => {
    this.accounts = accounts;
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.fixture('contributions.json').then(contributions => {
    this.contributions = contributions;
  });

  cy.get('[data-cy="myDashboards-btn"]', { timeout: 60000 })
    .should('be.enabled')
    .click();

  cy.get('[data-cy="contributionsSidebar-btn"]', { timeout: 100000 })
    .should('be.visible')
    .click();

  cy.get('.infinite-scroll-component').scrollTo('500px');

  cy.get('[data-testid="editContribution-test"]', { timeout: 60000 })
    .should('be.visible')
    .click({ force: true });
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000);
});
after(() => {
  const chainTypeName = 'Goerli-Test';
  const getUserID = `SELECT id
                     FROM "User"
                     WHERE name = 'testusernamegovrne2etesting2022'`;

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
    const name = contributions[1].name;
    cy.task('delete_contribution', name);
  });

  //teardown User table
  cy.fixture('users.json').then(users => {
    const username = users[0].username;
    cy.task('delete_user', username);
  });
  cy.task('delete_chainType', chainTypeName);
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

    cy.get('[ data-cy="updateContribution-test-btn"]', { timeout: 30000 })
      .should('exist')
      .should('be.visible')
      .click();

    cy.contains(
      'Please select at least one Contribution to attribute to a DAO or mint.',
    );
  });
});
