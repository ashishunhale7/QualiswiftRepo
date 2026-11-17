# Qualiswift Playwright Tests for Redbus Application

This project contains Playwright tests implemented in TypeScript to verify key ticket booking functionalities on the Redbus website.

## Setup & Installation

1. Ensure you have Node.js (>=14) installed.
2. Clone the repository.
3. Install dependencies via:
```
npm install
```

## Environment Variables

- `BASE_URL`: The base URL of the Redbus website to test against (e.g., https://www.redbus.com/).

Ensure the `BASE_URL` environment variable is set before running tests. Example:

```bash
export BASE_URL=https://www.redbus.com/
```

## Running Tests

Run all tests via:
```
npx playwright test
```

To run a specific test by name, for example Test case 1:
```
npx playwright test -g "1. Verify bus ticket search functionality"
```

## Test Artifacts

- Screenshots are captured on failure.
- Video recordings and trace files are retained on failures for diagnostics.

## Notes

- Tests assume no prior login requirement as no credentials or login flows are provided.
- Tests operate publicly on the main search page using environment BASE_URL.
- Only source, destination, and date selection functionalities are covered as per requirements.

---

# Test Implementation Details
- Page Object Model (POM) included inline in `qualiswift.spec.ts` for modularity.
- Locators are based on provided XPath and text hints.
