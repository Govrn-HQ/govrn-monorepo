/// <reference types="cypress" />
import { MockExtensionProvider } from '../support/e2e'

const network = "goerli";
const address = Cypress.env('address');
const COOKIE = Cypress.env('COOKIE');
const baseURL ='http://localhost:3000/';
const DATABASE_URL = Cypress.env('DATABASE_URL');

const query = `
  UPDATE "User"
  SET active = TRUE
  WHERE email = 'testemail@gmail.com'
  RETURNING *;
  
  `

//Before test, ensure that User is active
describe("MetaMask and seed db", () => {
  it("Lets user connect with Metamask provider", () => {
    cy.visit(baseURL, {
    onBeforeLoad(win) {
        win.ethereum = new MockExtensionProvider(network, address);
        }

    });
    //Get User off the waitlist
    cy.task('queryDatabase', {DATABASE_URL, query }) 

    //add cookie into '/siwe/active' request
    cy.intercept('/siwe/active', req => {
      req.headers['Cookie'] = COOKIE;
    });

     //network requests
     cy.intercept('POST', '/graphql', req => {
      req.headers['Cookie'] = COOKIE;
      if (req.body.operationName ===  'listUserByAddress') {
        req.headers['Cookie'] = COOKIE;
        req.alias = `gql${req.body.operationName}Query`;
      } 
      if (req.body.operationName ===  'createUserCustom') {
        req.headers['Cookie'] = COOKIE;
        req.alias = `gql${req.body.operationName}Mutation`;
        req.reply((res) => {
          cy.log(res.toString());
          console.log(res.toString());
  
        });
      }
    });
  
    cy.contains('Connect Wallet').click();
    cy.contains('MetaMask').click();
    cy.wait(3000);  //wait for 'My Contributions' button to display
    cy.contains('My Contributions').should('be.visible').click();

  });

    it ('Report your first Contribution', () => {

        //network requests
        cy.intercept('POST', '/graphql', req => {
          req.headers['Cookie'] = COOKIE;
          if (req.body.operationName ===  'listUserByAddress') {
            req.headers['Cookie'] = COOKIE;
            req.alias = `gql${req.body.operationName}Query`;
          } 
          if (req.body.operationName ===  'createUserCustom') {
            req.headers['Cookie'] = COOKIE;
            req.alias = `gql${req.body.operationName}Mutation`;
            req.reply((res) => {
              cy.log(res.toString());
              console.log(res.toString());
      
            });
          }
        });
     
        cy.contains('Report a Contribution').click()
        
        cy.get('input[name="name"]')
            .type('Govrn Protocol Pull Request')
            .should('have.value', 'Govrn Protocol Pull Request')
        
        cy.contains('Select an activity type or add a new one').click({ force: true })
        cy.get('#react-select-3-listbox')
          .should('contain', 'Pull Request')
          .type('Pull Request{enter}')
        
        cy.get('[name="details"]').click() 
          .type('I added a section to our onboarding documentation that provides an overview of our Discord channels.')       
        
        cy.get('[name="proof"]') 
          .type('https://github.com/Govrn-HQ/airtable_migration.')   
            
        cy.contains('Select a DAO to associate this Contribution with')  //All DAOs
            
        cy.contains('Add Contribution').click({ force: true }) 
        cy.contains('Please select at least one Contribution to attribute to a DAO or mint.')  

    });
});
   
