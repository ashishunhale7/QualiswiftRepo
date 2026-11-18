# OrangeHRM Login Feature Tests

This project contains Playwright tests for the OrangeHRM login page as described in the provided test plan.

## Setup & Installation

1. Ensure you have Node.js (>=14) installed on your machine.
2. Install dependencies by running:
   ```
   npm install
   ```
3. To run tests, set environment variables for credentials and base URL:
   - `BASE_URL` - Base URL of the OrangeHRM application (e.g. https://opensource-demo.orangehrmlive.com)
   - `HRM_USERNAME` - Valid username for login
   - `HRM_PASSWORD` - Valid password for login

4. Run tests with:
   ```
   npx playwright test
   ```

## Tests

- Verify login page loads with all required fields
- Verify input fields accept user input
- Verify password field masks input
- Verify successful login navigates to dashboard

## Note

- Credentials should be securely set in your environment. Do not hardcode them.
- Tests use the `BASE_URL` environment variable as base; the login page path is appended internally.
