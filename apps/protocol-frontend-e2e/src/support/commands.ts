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

