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
      console.log(user)
      const  insertUserQuery = `
      INSERT INTO "${tableName}" (id, name, address, chain_type_id, active, email)
       VALUES (1,'${user.username}', '${user.address}', 1, TRUE, '${user.email}')
      ON CONFLICT DO NOTHING;
      `
      console.log(insertUserQuery)
      cy.task('queryDatabase', insertUserQuery); 
    
    });
  }
  else if (tableName=="Contribution"){
    cy.fixture('contributions.json').then((contributions) => {
      const contribution = contributions[0]

      const insertContribution = `
      INSERT INTO "Contribution" (id, name, status_id, activity_type_id, user_id, date_of_engagement, details, proof )
        VALUES (1, '${contribution.name}',1 , 1, 1, current_timestamp,
         '${contribution.details}', '${contribution.proof}'
        )
      ON CONFLICT DO NOTHING;
      `
      cy.task('queryDatabase', insertContribution); 
    
    });
  }
  
});

// tearDown DB
Cypress.Commands.add('teardownDB',(tableNames)=>{
    for (const tableName of tableNames){
      console.log(tableName)
      const teardownQuery = `
        TRUNCATE TABLE "${tableName}" RESTART IDENTITY CASCADE;
      `
      cy.task('queryDatabase', teardownQuery); 
    }
});
  

    







