import { MockProvider } from '@rsksmart/mock-web3-provider';

Cypress.Commands.add('login', (address, privateKey) => {
  cy.visit('http://localhost:3000/', {
    onBeforeLoad(win) {
      win.ethereum = new MockProvider({
        address,
        privateKey,
        networkVersion: 5,
        debug: false,
      });
    },
  });

  //network requests
  cy.interceptGQL('POST', ['listUserByAddress', 'createUserCustom']);

  cy.get('button').then($btn => {
    const text = $btn.text();  
    if (text === 'Connect Wallet') {
      cy.get('[data-cy=connect-wallet]', { timeout: 10000 })
        .should('be.enabled').click();
      cy.contains('MetaMask')
        .should('be.enabled').click();

    } else { //text === 'Join Our Discord'
      cy.get('[data-cy="joinOurDiscord-testBtn"]', { timeout: 60000 })
        .should('be.visible');
    }
  });
});

//intercept grahql
Cypress.Commands.add('interceptGQL', (httpMethod, operationNames) => {
  for (const operationName of operationNames) {
    cy.intercept(httpMethod, '/graphql', req => {
      if (req.body.operationName === operationName) {
        operationName === 'createUserCustom'
          ? (req.alias = `gql${req.body.operationName}Mutation`)
          : (req.alias = `gql${req.body.operationName}Query`);
      }
    });
  }

});

// Seed DAOs/Guilds into DB
Cypress.Commands.add('seedDB',(tableName)=>{
  if (tableName=="Guild"){
    cy.fixture('daos.json').then((daos) => {
      const DaoList = daos
      for (const daoIdx in DaoList){
        const  insertDAOs = `
          INSERT INTO "${tableName}" (id, name)
          VALUES ('${DaoList[daoIdx].id}','${DaoList[daoIdx].name}')
          ON CONFLICT DO NOTHING;
        `
        cy.task('queryDatabase', insertDAOs); 
      }
    });

  }
  else if (tableName=="User"){
    cy.fixture('users.json').then((userList) => {
      const user = userList[0]
      const  insertUserQuery = `
      INSERT INTO "${tableName}" (id, name, address, chain_type_id, active, email)
       VALUES (1,'${user.username}', '${user.address}', 1, TRUE, '${user.email}')
      ON CONFLICT DO NOTHING;
      `
      cy.task('queryDatabase', insertUserQuery); 
    
    });
  }
  else if (tableName=="Contribution2" || tableName=="Contribution1"){
    cy.fixture('contributions.json').then((contributions) => {
      const contribution = contributions[0]
      let user_id;
      if (tableName[tableName.length-1] == "2"){
        user_id=2
      }else{
        user_id=1
      }
      const insertContribution = `
      INSERT INTO "Contribution" (name, status_id, activity_type_id, user_id, date_of_engagement, details, proof )
        VALUES ('${contribution.name}',1 , 1, ${user_id}, current_timestamp,
         '${contribution.details}', '${contribution.proof}'
        )
      ON CONFLICT DO NOTHING;
      `
      cy.task('queryDatabase', insertContribution); 
    });
  }
  else if (tableName=="mintContribution"){
    cy.fixture('contributions.json').then((contributions) => {
      const contribution = contributions[0]
      const mintedContributionQuery = `
      INSERT INTO "Contribution" (id, name, status_id, activity_type_id, user_id, date_of_engagement, details, proof )
        VALUES (1000, '${contribution.name}',2 , 1, 100, current_timestamp,
         '${contribution.details}', '${contribution.proof}'
        )
      ON CONFLICT DO NOTHING;
      `
      cy.task('queryDatabase', mintedContributionQuery); 
    });
  }
  else if (tableName=="GuildContribution"){

    const GuildContributionQuery = `
    INSERT INTO "GuildContribution" (guild_id, contribution_id )
      VALUES (1, 1)
    ON CONFLICT DO NOTHING;
    `
    cy.task('queryDatabase', GuildContributionQuery); 
    
  }
  else if (tableName=="ContributionStatus"){

    const GuildContributionQuery = `
    INSERT INTO "ContributionStatus" (name )
      VALUES ('staging'), ('minted')
    ON CONFLICT DO NOTHING;
    `
    cy.task('queryDatabase', GuildContributionQuery); 
    
  }
  else if (tableName=="LoginUser1" || tableName=="LoginUser2"){
    cy.fixture('users.json').then((accounts) => {
      let userAccount: { username: string; address: string; email: string; };
      if (tableName[tableName.length-1] == "1"){ //user1
        userAccount = accounts[1]
      }else{
        userAccount = accounts[0]
      }
      const User1Login = `
      INSERT INTO "User" (name, address, chain_type_id, active, email )
        VALUES ('${userAccount.username}', '${userAccount.address}', 
          1, true, '${userAccount.email}'
        )
      ON CONFLICT DO NOTHING;
      `
      cy.task('queryDatabase', User1Login);
    });
  }
  else if (tableName=="User1CreateAndMintContribution"){
    cy.fixture('contributions.json').then((contributions) => {
      const user1ContributionData = contributions[3]
      const User1CreateAndMintContribution = `
      INSERT INTO "Contribution" (name, status_id, activity_type_id, user_id, date_of_engagement, details, proof )
        VALUES ('${user1ContributionData.name}',2 , 1, 1, current_timestamp,
         '${user1ContributionData.details}', '${user1ContributionData.proof}'
        )
      ON CONFLICT DO NOTHING;
      `
      cy.task('queryDatabase', User1CreateAndMintContribution);
    });
  }
  else if (tableName=="GuildUser1" || tableName=="GuildUser2"){
    let user_id: number
    if (tableName[tableName.length-1] == "1"){
      user_id=1
    }else{
      user_id=2;
    }
      const GuildUser1Query = `
      INSERT INTO "GuildUser" (user_id, guild_id)
        VALUES (${user_id}, 1)
      ON CONFLICT DO NOTHING;
      `
      cy.task('queryDatabase', GuildUser1Query );
  }

});

// tearDown DB
Cypress.Commands.add('teardownDB',(tableNames)=>{
    for (const tableName of tableNames){
      const teardownQuery = `
        TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE;
      `
      cy.task('queryDatabase', teardownQuery); 
    }
});
  

    







