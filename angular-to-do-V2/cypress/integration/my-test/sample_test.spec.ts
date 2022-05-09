/// <reference types="cypress" />

describe('my first test', function() {
  beforeEach(() => {
    // cy.visit('http://localhost:63797')
    cy.visit('https:/localhost:4200/auth/login');
    cy.get('#username')
    .type('admin-12345', {delay: 100}).should('have.value', 'admin-12345');

    cy.get('#password')
    .type('12345', {delay: 100}).should('have.value', '12345');

    cy.get('.btn[type=submit]').click();
    // cy.wait(6000)
    cy.request({
      method: 'POST',
      url: 'https://smt-lc01.dev-stakelogic.com:443/users/login',
      body: {
        username: 'admin-12345',
        password: '12345'
      }
    })
    .then(resp => {
      window.localStorage.setItem('token', resp.token);
      window.localStorage.setItem('userName', resp.username);
    });
  });
  it('visit game-details', function() {
    cy.visit('http://localhost:4200/dashboard')
    // expect(true).to.equal(true)
    // cy.get('.admin-btn').click()
    // cy.visit('games/casino')
  });
  afterEach(() => {
    // cy.visit('https:/localhost:4200/auth/login')
  })
  // this.afterAll(() => {
  //   cy.get(':nth-child(2) > .sidebar__link').click()
  // })

})
