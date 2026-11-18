# OrangeHRM Playwright Tests

This project contains Playwright tests for the OrangeHRM login page validating the following scenarios:

- Opening the login page URL
- Presence and visibility of Username, Password fields, and the Login button
- Ability to enter username and password values
- Password input masking

## Setup Instructions

1. Install Node.js (version 16 or newer recommended).
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Set environment variables for credentials:
   - `HRM_USERNAME` - your OrangeHRM username
   - `HRM_PASSWORD` - your OrangeHRM password
5. Set `BASE_URL` environment variable to `https://opensource-demo.orangehrmlive.com`.

## Running Tests

Execute all tests with:

```bash
npx playwright test
```

Test results and failure artifacts will be saved automatically.

## Notes

- Tests use environment variables for sensitive credentials.
- Tests run against the staging environment.
- Use Playwright Test Runner report for detailed outcome.

---

