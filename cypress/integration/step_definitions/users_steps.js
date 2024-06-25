import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import apiPage from '../../support/pages/apiPage';

// Load fixture data
let fixtureData;

before(() => {
  cy.fixture('users').then((data) => {
    fixtureData = data;
  });
});

Given('the API is available', () => {
  apiPage.checkApiAvailability();
});

When('I request the first page of users', () => {
  apiPage.requestUsersPage(fixtureData.usersPage.page);
});

When('I request user with ID {int}', (userId) => {
  apiPage.requestUserById(userId);
});

When('I submit a request to create a new user with name {string} and job {string}', (name, job) => {
  apiPage.createUser(name, job);
});

When('I submit a request to update user with ID {int} with name {string} and job {string}', (userId, name, job) => {
  apiPage.updateUser(userId, name, job);
});

When('I submit a request to delete user with ID {int}', (userId) => {
  apiPage.deleteUser(userId);
});

When('I submit a request to register a new user with email {string} and password {string}', (email, password) => {
  apiPage.registerUser(email, password);
});

When('I submit a request to login a user with email {string} and password {string}', (email, password) => {
  apiPage.loginUser(email, password);
});

When('I submit a request to login a user with email {string} and no password', (email) => {
  apiPage.loginUser(email, null);
});

Then('I should receive a {int} status code for users', (expectedStatusCode) => {
  apiPage.verifyStatusCode('@getUsers', expectedStatusCode);
});

Then('I should receive a {int} status code for user', (expectedStatusCode) => {
  apiPage.verifyStatusCode('@getUser', expectedStatusCode);
});

Then('I should receive a {int} status code', (expectedStatusCode) => {
  apiPage.verifyStatusCode('@createUser', expectedStatusCode);
});

Then('I should receive a {int} status code for user update', (expectedStatusCode) => {
  apiPage.verifyStatusCode('@updateUser', expectedStatusCode);
});

Then('I should receive a {int} status code for user deletion', (expectedStatusCode) => {
  apiPage.verifyStatusCode('@deleteUser', expectedStatusCode);
});

Then('I should receive a {int} status code for user registration', (expectedStatusCode) => {
  apiPage.verifyStatusCode('@registerUser', expectedStatusCode);
});

Then('I should receive a {int} status code for user login', (expectedStatusCode) => {
  apiPage.verifyStatusCode('@loginUser', expectedStatusCode);
});

Then('the response should contain a list of users', () => {
  cy.get('@getUsers').its('body').should((body) => {
    expect(body).to.have.property('data');
    expect(body.data).to.be.an('array');
  });
});

Then('the response should contain the user\'s details', () => {
  cy.get('@getUser').its('body.data').should((user) => {
    expect(user).to.have.property('id');
    expect(user).to.have.property('first_name');
    expect(user).to.have.property('last_name');
    expect(user).to.have.property('email');
  });
});

Then('the response should contain the updated user\'s details', () => {
  cy.get('@updateUser').its('body').should((user) => {
    expect(user).to.have.property('name');
    expect(user).to.have.property('job');
  });
});

Then('the response should contain the user\'s ID', () => {
  cy.get('@createUser').its('body').should((user) => {
    expect(user).to.have.property('id');
    expect(user).to.have.property('createdAt');
  });
});

Then('the response should contain the user ID and token', () => {
  cy.get('@registerUser').its('body').should((body) => {
    expect(body).to.have.property('id');
    expect(body).to.have.property('token');
  });
});

Then('the response should contain the user token', () => {
  cy.get('@loginUser').its('body').should((body) => {
    expect(body).to.have.property('token');
  });
});

Then('the response should contain an error message', () => {
  cy.get('@loginUser').its('body').should((body) => {
    expect(body).to.have.property('error');
  });
});
