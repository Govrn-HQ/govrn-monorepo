import { MockExtensionProvider } from "./metamaskMockExt";

Cypress.Commands.add('login', (network, address, COOKIE) => {
  //cy.session([address, COOKIE], ()=>{

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
      cy.wait(5000);
      cy.get('button').then(($btn) => {
        const text = $btn.text()
        console.log(text)
        if (text==="Join Our Discord" || text.slice(0, 2)==="0x") {
          cy.get('[data-cy="joinOurDiscord-testBtn"]' , {timeout:20000})
            .should("be.visible")
            //.click() //proceed to Discord by clicking the btn
          cy.wait(3000); //time to view screen contents
          
        } else if(text==="Connect Wallet"){
          cy.get('[data-cy=connect-wallet]', {timeout:10000})
            .click();
          cy.contains('MetaMask')
            .click();
        } 
      });

      
    });
 // });

 
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


