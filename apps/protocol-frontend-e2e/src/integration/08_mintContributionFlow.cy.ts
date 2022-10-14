/// <reference types="cypress" />

beforeEach(() => {
  const chainTypeName = 'Goerli-Test';
  const getChaintTypeID = `SELECT id FROM "ChainType" WHERE name='Goerli-Test'`;
  const getUserID = `SELECT id FROM "User" WHERE name='testusernamegovrne2etesting2022'`;
  const getActivityTypeID = `SELECT id FROM "ActivityType" WHERE name='Pull Request'`;

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

  cy.get('[data-cy="myDashboards-btn"]', { timeout: 60000 })
    .should('be.enabled')
    .click();

  cy.get('[data-cy="contributionsSidebar-btn"]', { timeout: 100000 })
    .should('be.visible')
    .click();

  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000);
});
after(() => {
  const chainTypeName = 'Goerli-Test';
  const getUserID = `SELECT id FROM "User" WHERE name='testusernamegovrne2etesting2022'`;

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
  cy.task('delete_chainType', chainTypeName);
});

describe('Edit first Contribution', () => {
  it('Update/Edit Contribution', () => {
    cy.get('input[title="Toggle Row Selected"]').click();

    cy.get('[data-testid="mint-btn-test"]').click();

    cy.get('[data-testid="checkbox-testid"]').click();

    cy.get('[data-testid="mintContribution-test"]').should('be.enabled');
  });
});
