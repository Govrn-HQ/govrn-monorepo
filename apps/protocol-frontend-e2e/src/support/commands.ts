import { MockExtensionProvider } from "./metamaskMockExt";

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
                 ['listUserByAddress',
                 'createUserCustom'
                ],
                  COOKIE
              );

  cy.get('button').then(($btn) => {
    const text = $btn.text()
    console.log(text);
    if (text==="Join Our Discord" || text.slice(0, 2)==="0x") {
      // waitlisted User redirected to join Govrn's Discord
      cy.contains("Join Our Discord")
        .click({force: true})
    } else {
      cy.get('[data-cy=connect-wallet]')
        .click();
      cy.contains('MetaMask')
        .click();
    }
  });

  cy.wait(5000);

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

  // Cypress.Commands.add('switchWindow', ()=>{
  //   return new Promise(resolve=>{
  //     if(cy.state('window').APP_ID === 1){
  //       // switch to our ALT window
  //       console.log('switching to alt popup window...')
  //       cy.state('document', originalWindow.top.MyAltWindow.document)
  //       cy.state('window', originalWindow.top.MyAltWindow)
  //       originalWindow.blur()
  //     }else{
  //       console.log('switching back to original window')
  //       // switch back to originalWindow
  //       cy.state('document', originalWindow.document)
  //       cy.state('window', originalWindow)
  //       originalWindow.top.MyAltWindow.blur()
  //     }
  //     window.blur();
  
  //     cy.state('window').focus()
  
  //     resolve();
  //   })
  // })



