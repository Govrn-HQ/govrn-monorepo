/// <reference types="cypress" />

beforeEach(() => {
  const getChainTypeID = `SELECT id
                          FROM "ChainType"
                          WHERE name = 'Goerli-Test'`;
  const getUser1ID = `SELECT id
                      FROM "User"
                      WHERE name = 'testusernamegovrne2etesting2022'`;
  const getUser2ID = `SELECT id
                      FROM "User"
                      WHERE name = 'johnDoeGovrnE2eTesting2022'`;
  const getGuildID = `SELECT id
                      FROM "Guild"
                      WHERE name = 'GovrnE2eTesting2022'`;
  const getMembershipStatusId = `SELECT id
                                 FROM "GuildMembershipStatus"
                                 WHERE name = 'Supporter'`;
  const getActivityTypeID = `SELECT id
                             FROM "ActivityType"
                             WHERE name = 'Pull Request'`;
  const getContributionID = `SELECT id
                             FROM "Contribution"
                             WHERE name = 'e2eTesting2022-Govrn Protocol Note Taking'`;
  const getstatusID = `SELECT id
                       FROM "ContributionStatus"
                       WHERE name = 'minted'`;
  const urlToContributionsPage = 'http://localhost:3000/#/contributions';
  const chainTypeName = 'Goerli-Test';
  const GuildUser1Object = {};
  const GuildUser2Object = {};
  const GuildContribution2Object = {};

  // Guilds
  cy.fixture('daos.json').then(guilds => {
    for (const guild of guilds) {
      const guild_name = guild.name;
      cy.task('create_guild', guild_name);
    }
  });

  cy.task('create_MembershipStatus');

  // seed ChainType
  cy.task('create_chainType', chainTypeName);

  // seed ContributionStatus
  cy.task('contribution_status');

  // User1
  cy.fixture('users.json').then(users => {
    const userData = users[0];
    cy.task('queryDatabase', getChainTypeID).then(res => {
      const chainTypeID = res.rows[0].id;
      userData['chain_type_id'] = chainTypeID;
      cy.task('create_user', userData);
    });
  });

  // User2
  cy.fixture('users.json').then(users => {
    const userData = users[1];
    cy.task('queryDatabase', getChainTypeID).then(res => {
      const chainTypeID = res.rows[0].id;
      userData['chain_type_id'] = chainTypeID;
      cy.task('create_user', userData);
    });
  });

  // GuildUser1
  cy.task('queryDatabase', getUser1ID).then(res => {
    const userID = res.rows[0].id;
    GuildUser1Object['userID'] = userID;
  });
  cy.task('queryDatabase', getGuildID).then(res => {
    const guildID = res.rows[0].id;
    cy.task('queryDatabase', getMembershipStatusId).then(res => {
      const membershipID = res.rows[0].id;
      GuildUser1Object['guildID'] = guildID;
      GuildUser1Object['membershipID'] = membershipID;
      cy.task('create_GuildUser', GuildUser1Object);
    });
  });

  //GuildUser2
  cy.task('queryDatabase', getUser2ID).then(res => {
    const userID = res.rows[0].id;
    GuildUser2Object['userID'] = userID;
  });
  cy.task('queryDatabase', getGuildID).then(res => {
    const guildID = res.rows[0].id;
    cy.task('queryDatabase', getMembershipStatusId).then(res => {
      const membershipID = res.rows[0].id;
      GuildUser2Object['guildID'] = guildID;
      GuildUser2Object['membershipID'] = membershipID;
      cy.task('create_GuildUser', GuildUser2Object);
    });
  });

  // User-02 creates minted contribution
  cy.fixture('contributions.json').then(contributions => {
    const contributionData = contributions[1];
    cy.task('queryDatabase', getUser2ID).then(res => {
      const userID = res.rows[0].id;
      contributionData['userID'] = userID;
    });
    cy.task('queryDatabase', getActivityTypeID).then(res => {
      const ActivityTypeID = res.rows[0].id;
      contributionData['activityTypeID'] = ActivityTypeID;
    });
    cy.task('queryDatabase', getstatusID).then(res => {
      const statusID = res.rows[0].id;
      contributionData['statusID'] = statusID;
    });
    cy.task('queryDatabase', getChainTypeID).then(res => {
      const onChainId = res.rows[0].id;
      contributionData['onChainId'] = onChainId;
    });

    cy.task('create_MintedContribution', contributionData);
  });

  // GuildContribution User-02
  cy.task('queryDatabase', getContributionID).then(res => {
    const contributionID = res.rows[0].id;
    GuildContribution2Object['contributionID'] = contributionID;
  });
  cy.task('queryDatabase', getGuildID).then(res => {
    const guildID = res.rows[0].id;
    GuildContribution2Object['guildID'] = guildID;
    cy.task('create_GuildContribution', GuildContribution2Object);
  });

  // Login as User-01
  cy.fixture('testaccounts.json').then(accounts => {
    this.accounts = accounts;
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="myDashboards-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });

  cy.visit(urlToContributionsPage);

  cy.contains('Attestations').click({ force: true });

  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000);
});

afterEach(() => {
  const getUser1ID = `SELECT id
                      FROM "User"
                      WHERE name = 'testusernamegovrne2etesting2022'`;
  const getGuildID = `SELECT id
                      FROM "Guild"
                      WHERE name = 'GovrnE2eTesting2022'`;
  const users = [
    'johnDoeGovrnE2eTesting2022',
    'testusernamegovrne2etesting2022',
  ];
  const guilds = ['GovrnE2eTesting2022', 'MGDEe2eTesting2022'];
  const target_contributionName = 'e2eTesting2022-Govrn Protocol Note Taking';

  // teardown Attestation
  cy.task('queryDatabase', getUser1ID).then(res => {
    const userID = res.rows[0].id;
    cy.task('delete_attestation', userID);
  });

  // teardown GuildUser and GuildContribution
  cy.task('queryDatabase', getGuildID).then(res => {
    const guildID = res.rows[0].id;
    cy.task('delete_GuildContribution', guildID);
    cy.task('delete_GuildUser', guildID);
    cy.task('delete_MembershipStatus');
  });

  // teardown Contribution
  cy.task('delete_contribution', target_contributionName);

  // teardown Guild
  for (const guild of guilds) {
    cy.task('delete_guild', guild);
  }

  // teardown User
  for (const user of users) {
    cy.task('delete_user', user);
  }
});

describe('Attestation flow', () => {
  it('attest to a minted Contribution', () => {
    cy.get('[testid="toggle-row-selected"]').click({ multiple: true });

    cy.get('[data-testId="attest-testId"]').click();

    cy.contains('Attest to DAO Contributions').should('be.visible');

    cy.get('[data-testId="addAttestations-btn"]').click();

    cy.get(`.chakra-modal__close-btn`, { timeout: 10000 }).click({
      force: true,
    });

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000); //wait for the attestation loading-process
    cy.contains('My Attestations', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.contains(`These are contributions that you have already attested to.`, {
      timeout: 10000,
    }).should('be.visible');
  });
});
