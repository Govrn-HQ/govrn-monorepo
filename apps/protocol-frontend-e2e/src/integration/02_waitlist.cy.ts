/// <reference types="cypress" />

const insertDAOs = `
INSERT INTO "Guild" (id, name)
    VALUES (1,'Govrn')
ON CONFLICT DO NOTHING;

INSERT INTO "Guild" (id, name)
    VALUES (2,'MGD')
ON CONFLICT DO NOTHING;
`;
beforeEach(() => {
  cy.task('queryDatabase', insertDAOs);

  cy.fixture('users.json').then(users => {
    this.users = users;
  });

  cy.fixture('testaccounts.json').then(accounts => {
    this.accounts = accounts;
    cy.login(this.accounts[0].address, this.accounts[0].privateKey);
  });
});

afterEach(() => {
  cy.login(this.accounts[0].address, this.accounts[0].privateKey);
});

describe('Join Waitlist', () => {
  it('Fill Govrn Waitlist Form', () => {
    const user = this.users[0];

    cy.get('[data-cy="create-my-profile-btn"]', { timeout: 60000 })
      .should('be.visible')
      .click({ force: true });

    cy.get('input[data-testid="createWaitlistUserForm-username"]', {  //DOM issue here
      timeout: 20000,
    })
      .should('be.enabled')
      .type(user.username)
      .should('have.value', user.username);

    cy.get('input[data-testid="createWaitlistUserForm-email"]')
      .type(user.email)
      .should('have.value', user.email);

    cy.get('[data-cy="join-waitlist"]').click();
  });
});
