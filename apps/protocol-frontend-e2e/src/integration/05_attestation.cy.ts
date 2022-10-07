/// <reference types="cypress" />

beforeEach(() => {
  //Guilds
  cy.fixture('daos.json').then((guilds) => {
    for (const guild of guilds){
      const guild_name = guild.name
      cy.task('create_guild', guild_name);
    }
  });
  //ChainType, ContributionStatus
  cy.task('create_chainType','Goerli-Test');
  cy.task('contribution_status');

  //User1
  cy.fixture('users.json').then((users) => {
    const userData = users[0]
    const getChaintTypeID = `SELECT id FROM "ChainType" WHERE name='Goerli-Test'`;
    cy.task('queryDatabase',getChaintTypeID).then((res)=>{
      const chainTypeID = res.rows[0].id;
      userData["chain_type_id"] = chainTypeID
      cy.task('create_user', userData);
    });
  });

  //User2
  cy.fixture('users.json').then((users) => {
    const userData = users[1]
    const getChaintTypeID = `SELECT id FROM "ChainType" WHERE name='Goerli-Test'`;
    cy.task('queryDatabase',getChaintTypeID).then((res)=>{
      const chainTypeID = res.rows[0].id;
      userData["chain_type_id"] = chainTypeID
      cy.task('create_user', userData);
    });
    });
  //GuildUser1
  const getUser1ID=`SELECT id FROM "User" WHERE name='testusernamegovrne2etesting2022'`;
  const getGuildID=`SELECT id FROM "Guild" WHERE name='GovrnE2eTesting2022'`;
  const GuildUser1Object = {}
  cy.task('queryDatabase', getUser1ID).then((res)=>{
    const  userID = res.rows[0].id;
    GuildUser1Object["userID"]=userID;
  });
  cy.task('queryDatabase', getGuildID).then((res)=>{
    const  guildID = res.rows[0].id;
    GuildUser1Object["guildID"]=guildID;
    cy.task('create_GuildUser', GuildUser1Object);
  });

  //GuildUser2
  const getUser2ID=`SELECT id FROM "User" WHERE name='johnDoeGovrnE2eTesting2022'`;
  const GuildUser2Object = {}
  cy.task('queryDatabase', getUser2ID).then((res)=>{
    const  userID = res.rows[0].id;
    GuildUser2Object["userID"]=userID;
  });
  cy.task('queryDatabase', getGuildID).then((res)=>{
    const  guildID = res.rows[0].id;
    GuildUser2Object["guildID"]=guildID;
    cy.task('create_GuildUser', GuildUser2Object);
  });

  //User-02 creates minted contribution
  cy.fixture('contributions.json').then((contributions) => {
    const contributionData = contributions[1]
    const getUserID = `SELECT id FROM "User" WHERE name='johnDoeGovrnE2eTesting2022'`;
    const getActivityTypeID = `SELECT id FROM "ActivityType" WHERE name='Pull Request'`;
    cy.task('queryDatabase',getUserID).then((res)=>{
      const userID = res.rows[0].id;
      contributionData["userID"] = userID;
    });
    cy.task('queryDatabase',getActivityTypeID).then((res)=>{
      const ActivityTypeID = res.rows[0].id;
      contributionData["activityTypeID"] = ActivityTypeID;
    });
    cy.task('create_MintedContribution', contributionData);
  });

  //GuildContribution User02
  //const getGuildID=`SELECT id FROM "Guild" WHERE name='GovrnE2eTesting2022'`;  //will declare at top
  const getContributionID=`SELECT id FROM "Contribution" WHERE name='e2eTesting2022-Govrn Protocol Note Taking'`;
  
  const GuildContribution2Object = {}
  cy.task('queryDatabase', getContributionID).then((res)=>{
    const  contributionID = res.rows[0].id;
    GuildContribution2Object["contributionID"]=contributionID;
  });
  cy.task('queryDatabase', getGuildID).then((res)=>{
    const  guildID = res.rows[0].id;
    GuildContribution2Object["guildID"]=guildID;
    cy.task('create_GuildContribution', GuildContribution2Object);
  });

  cy.fixture('testaccounts.json').then((accounts) => {
    this.accounts = accounts
    //login User-01
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="myDashboards-btn"]', { timeout: 15000 })
    .should('be.visible')
    .click({ force: true });

  cy.visit('http://localhost:3000/#/contributions')

  cy.contains('Attestations')
    .click({force:true})
  
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000)
    
  });
  
afterEach(() => {
  //teardown 
  //cy.teardownDB(["Attestation", "GuildContribution", "Contribution", "ContributionStatus", "Guild",  "User"]);
  //delete_attestation  (by userid)
  const getUser1ID=`SELECT id FROM "User" WHERE name='testusernamegovrne2etesting2022'`;
  const getGuildID=`SELECT id FROM "Guild" WHERE name='GovrnE2eTesting2022'`;
 
  cy.task('queryDatabase', getUser1ID).then((res)=>{
    const  userID = res.rows[0].id;
    cy.task('delete_attestation', userID)

  });
  cy.task('queryDatabase', getGuildID).then((res)=>{
    const  guildID = res.rows[0].id;
    cy.task('delete_GuildContribution', guildID);
    cy.task('delete_GuildUser', guildID);
  });
  
  cy.task('delete_contribution', 'e2eTesting2022-Govrn Protocol Note Taking');
  
  //wipe out GuildUser before advancing to Guild
  const guilds = ['GovrnE2eTesting2022', 'MGDEe2eTesting2022']
  for (const guild of guilds){
    cy.task('delete_guild', guild);
  }
  const users= ['johnDoeGovrnE2eTesting2022', 'testusernamegovrne2etesting2022']
  for (const user of users){
    cy.task('delete_user', user);
  }
  
});

describe("Attestation flow", () => {
  it("attest to a minted Contribution", ()=>{

    cy.get('input[title="Toggle Row Selected"]')
      .click()

    cy.get('[data-testId="attest-testId"]')
      .click()

    cy.contains('Attest to DAO Contributions')
      .should('be.visible')

    cy.get('[data-testId="addAttestations-btn"]')
      .click()

    cy.get(`.chakra-modal__close-btn`, {timeout:10000}) 
      .click({force: true})

    // eslint-disable-next-line cypress/no-unnecessary-waiting 
    cy.wait(5000) //wait for the attestation loading-process
    cy.contains('My Attestations', {timeout:10000})
      .should('be.visible')
      .click({force:true})

    cy.contains(`These are Contributions that you have already Attested to.`, {timeout:10000})
      .should('be.visible')

  });
  
});

