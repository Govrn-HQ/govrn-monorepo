  /// <reference types="cypress" />

  before(() => {
    const getChainTypeID = `SELECT id FROM "ChainType" WHERE name='Goerli-Test'`;
    const getUser1ID=`SELECT id FROM "User" WHERE name='testusernamegovrne2etesting2022'`;
    const getGuildID=`SELECT id FROM "Guild" WHERE name='GovrnE2eTesting2022'`;
    const getActivityTypeID = `SELECT id FROM "ActivityType" WHERE name='Pull Request'`;
    const getStagingStatusID = `SELECT id FROM "ContributionStatus" WHERE name='staged'`;
    const chainTypeName = 'Goerli-Test';
    const GuildUser1Object = {};
    
    //seed Guild
    cy.fixture('daos.json').then((guilds) => {
      for (const guild of guilds){
        cy.task('create_guild', guild.name);
      }
    });

    // seed ChainType
    cy.task('create_chainType', chainTypeName);

    //seed User table
    cy.fixture('users.json').then((users) => {
      const userData = users[0]
      cy.task('queryDatabase',getChainTypeID).then((res)=>{
        const chainTypeID = res.rows[0].id;
        userData["chain_type_id"] = chainTypeID
        cy.task('create_user', userData);
      });
    });

    //seed GuildUser1
    cy.task('queryDatabase', getUser1ID).then((res)=>{
      const  userID = res.rows[0].id;
      GuildUser1Object["userID"]=userID;
    });
    cy.task('queryDatabase', getGuildID).then((res)=>{
      const  guildID = res.rows[0].id;
      GuildUser1Object["guildID"]=guildID;
      cy.task('create_GuildUser', GuildUser1Object);
    });

    //seed ContributionStatus
    cy.task('contribution_status');

    //seed Contribution
    cy.fixture('contributions.json').then((contributions) => {
      const contributionData = contributions[1]
      cy.task('queryDatabase',getUser1ID).then((res)=>{
        const userID = res.rows[0].id;
        contributionData["userID"] = userID;
      });
      cy.task('queryDatabase',getActivityTypeID).then((res)=>{
        const ActivityTypeID = res.rows[0].id;
        contributionData["activityTypeID"] = ActivityTypeID;
      });
      cy.task('queryDatabase',getStagingStatusID).then((res)=>{
        const statusID = res.rows[0].id;
        contributionData["statusID"] = statusID;
      });
      cy.task('create_contribution', contributionData);
    });

    cy.fixture('users.json').then(users => {
      this.users = users;
    });
  
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
    //cy.teardownDB(["GuildContribution", "ContributionStatus", "Contribution","GuildUser", "Guild", "User"]);
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
