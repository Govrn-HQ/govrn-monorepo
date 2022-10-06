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
  const getUserID=`SELECT id FROM "User" WHERE name='testusernamegovrne2etesting2022'`;
  const getGuildID=`SELECT id FROM "Guild" WHERE name='GovrnE2eTesting2022'`;
  const GuildUserObject = {}
  cy.task('queryDatabase', getUserID).then((res)=>{
    const  userID = res.rows[0].id;
    GuildUserObject["userID"]=userID;
  });
  cy.task('queryDatabase', getGuildID).then((res)=>{
    const  guildID = res.rows[0].id;
    GuildUserObject["guildID"]=guildID;
    cy.task('create_GuildUser', GuildUserObject);
  });

  //GuildUser2
  const getUserID=`SELECT id FROM "User" WHERE name='johnDoeGovrnE2eTesting2022'`;
  const getGuildID=`SELECT id FROM "Guild" WHERE name='GovrnE2eTesting2022'`;
  const GuildUserObject = {}
  cy.task('queryDatabase', getUserID).then((res)=>{
    const  userID = res.rows[0].id;
    GuildUserObject["userID"]=userID;
  });
  cy.task('queryDatabase', getGuildID).then((res)=>{
    const  guildID = res.rows[0].id;
    GuildUserObject["guildID"]=guildID;
    cy.task('create_GuildUser', GuildUserObject);
  });

  //User-02 creates minted contribution
  cy.fixture('contributions.json').then((contributions) => {
    const contributionData = contributions[0]
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

  cy.fixture('testaccounts.json').then((accounts) => {
    this.accounts = accounts
    //login User2
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

