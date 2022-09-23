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

//mint Contribution
Cypress.Commands.add('mintContribution', (query) => {

  cy.get('input[title="Toggle Row Selected"]')
  .click()

  cy.get('[data-testid="mint-btn-test"]') 
    .should('be.visible')
    .click();

  cy.get('[data-testid="checkbox-testid"]') 
    .click()

  cy.get('[data-testid="mintContribution-test"]')
    .should('be.visible')
  
  cy.task('queryDatabase', query).then(res => {
    expect(res.rows[0].status_id).to.equal(2);

  cy.get(`.chakra-modal__close-btn`) //close modal
    .click({force: true})
 
  });

});

