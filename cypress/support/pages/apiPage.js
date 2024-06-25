class ApiPage {
  checkApiAvailability() {
    cy.request('GET', '/users?page=1').its('status').should('eq', 200);
  }

  requestUsersPage(page) {
    return cy.request('GET', `/users?page=${page}`).as('getUsers');
  }

  requestUserById(userId) {
    return cy.request('GET', `/users/${userId}`).as('getUser');
  }

  createUser(name, job) {
    return cy.request('POST', '/users', {
      name: name,
      job: job
    }).as('createUser');
  }

  updateUser(userId, name, job) {
    return cy.request('PUT', `/users/${userId}`, {
      name: name,
      job: job
    }).as('updateUser');
  }

  deleteUser(userId) {
    return cy.request('DELETE', `/users/${userId}`).as('deleteUser');
  }

  registerUser(email, password) {
    return cy.request('POST', '/register', {
      email: email,
      password: password
    }).as('registerUser');
  }

  loginUser(email, password) {
    return cy.request('POST', '/login', {
      email: email,
      password: password
    }).as('loginUser');
  }

  verifyStatusCode(alias, expectedStatusCode) {
    cy.get(alias).its('status').should('eq', expectedStatusCode);
  }
}

export default new ApiPage();
