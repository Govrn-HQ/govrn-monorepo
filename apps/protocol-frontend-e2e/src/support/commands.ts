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
                  )


});

Cypress.Commands.add('interceptGQL',(method, operationNames, COOKIE) =>{
  //network requests
  cy.intercept('POST', '/graphql', req => {
    req.headers['Cookie'] = COOKIE;
    if (req.body.operationName ===  method[0]) {
      req.headers['Cookie'] = COOKIE;
      req.alias = `gql${req.body.operationName}Query`;
    } 
    if (req.body.operationName ===  method[1]) {
      req.headers['Cookie'] = COOKIE;
      req.alias = `gql${req.body.operationName}Mutation`;
      req.reply((res) => {
        cy.log(res.toString());
        console.log(res.toString());

      });
    }
  });

});








//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
