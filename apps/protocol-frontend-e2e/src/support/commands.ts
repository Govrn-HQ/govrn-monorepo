import { MockExtensionProvider } from "./e2e";

Cypress.Commands.add('login', (network, address, COOKIE) => {
  cy.visit("http://localhost:3000/", {
    onBeforeLoad(win) {
        win.ethereum = new MockExtensionProvider(network, address);
    }
    });
  //add cookie into '/siwe/active' request
  cy.intercept('/siwe/active', req => {
    req.headers['Cookie'] = COOKIE;
  });
  //network requests
  cy.interceptGQL('POST',
                 ['listUserByAddress','createUserCustom'],
                  COOKIE
                  );
});
 
Cypress.Commands.add('interceptGQL',(httpMethod, operationNames, COOKIE) =>{
  //network requests
  for (const operationName of operationNames){  
    cy.intercept(httpMethod, '/graphql', req => {
      req.headers['Cookie'] = COOKIE;
      if (req.body.operationName === operationName) {
        operationName ==='createUserCustom'? 
        req.alias = `gql${req.body.operationName}Mutation`:
        req.alias = `gql${req.body.operationName}Query`
       } 

    });
  }
  });



