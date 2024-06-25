# Cypress Gherkin REST API Project

This repository contains a project setup for using Cypress with Gherkin to test REST APIs.

## Getting Started

You can follow these steps to clone the repository and set up Cypress.

### Prerequisites

Make sure you have the following installed on your system:

- [Git](https://git-scm.com/)
- [Node.js and npm](https://nodejs.org/)

### Cloning the Repository

1. Open Git Bash and navigate to your desired project directory.

   cd path/to/your/project/directory

2. Clone the repository:
git clone https://github.com/osama4test/cypress-gherkin-rest-api.git

### Setting Up Cypress

1. Open the terminal in Visual Studio Code (VSCode).

2. Install Cypress:
npm install cypress --save-dev

3. Open Cypress
npx cypress open


### Project Structure

- `cypress/`
  - `fixtures/`
    - `users.json` - Contains the data used for the tests.
  - `integration/`
    - `features/`
      - `users.feature` - Contains the Gherkin scenarios for the Reqres API.
    - `step_definitions/`
      - `users_steps.js` - Contains the step definitions for the Gherkin scenarios.
  - `support/`
    - `commands.js` - Custom commands (if any).
    - `index.js` - Global configuration and behavior.
    - `pages/`
      - `apiPage.js` - Page object model for API requests.
