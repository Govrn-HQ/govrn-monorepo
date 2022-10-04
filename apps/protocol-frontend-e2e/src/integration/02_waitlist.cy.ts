/// <reference types="cypress" />

beforeEach(() => {
  //seed DB with all guilds
  cy.fixture('daos.json').then((guilds) => {
    for (const guild of guilds){
      cy.task('create_guild', guild.name);
    }
  });
  cy.fixture('users.json').then(users => {
    this.users = users;
  });

  cy.fixture('testaccounts.json').then(accounts => {
    this.accounts = accounts;
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });

  cy.get('[data-cy="create-my-profile-btn"]', { timeout: 60000 })
      .should('be.enabled')
      .click({ force: true });
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(3000);
});

afterEach(() => {
  cy.login(this.accounts[0].address, this.accounts[0].privateKey);
 
  //teatdown User
  cy.fixture('users.json').then((users) => {
      const username = users[0].username
      cy.task('delete_user', username);
  });
  //teatdown DAOs
  cy.fixture('daos.json').then((guilds) => {
    for (const guild of guilds){
      const guild_name = guild.name
      cy.task('delete_guild', guild_name);
    }
  });
 

});

describe('Join Waitlist', () => {
  it('Fill Govrn Waitlist Form', () => {
    const user = this.users[0];
   
    cy.get('input[data-testid="createWaitlistUserForm-username"]', {  
      timeout: 60000,
    }) 
      .should('be.enabled')
      .type(user.username)
      .should('have.value', user.username);

    cy.get('input[data-testid="createWaitlistUserForm-email"]')
      .type(user.email)
      .should('have.value', user.email);

    cy.get('[data-cy="join-waitlist"]')
      .should('be.enabled')
      .click();
  });
});
