import { test, expect, Page } from '@playwright/test';

class OrangeHRMLoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    // Open the login page
    await this.page.goto('/web/index.php/auth/login');
  }

  // Locators
  usernameInput() {
    return this.page.locator('input[name="username"]');
  }

  passwordInput() {
    return this.page.locator('input[name="password"]');
  }

  loginButton() {
    return this.page.locator('button[type="submit"]');
  }
}

// Test 1: Verify OrangeHRM login page opens on navigating to application URL
test('1. Verify OrangeHRM login page opens on navigating to application URL', async ({ page }) => {
  const loginPage = new OrangeHRMLoginPage(page);
  await loginPage.goto();
  // Expect URL to be the login URL
  await expect(page).toHaveURL(/\/web\/index\.php\/auth\/login/);
  // Expect a form or login heading to confirm the page
  await expect(page.locator('h5')).toHaveText(/login/i);
});

// Test 2: Verify presence of Username and Password fields and Login button on login page
test('2. Verify presence of Username and Password fields and Login button on login page', async ({ page }) => {
  const loginPage = new OrangeHRMLoginPage(page);
  await loginPage.goto();

  // Username field
  await expect(loginPage.usernameInput()).toBeVisible();
  await expect(loginPage.usernameInput()).toHaveAttribute('name', 'username');

  // Password field
  await expect(loginPage.passwordInput()).toBeVisible();
  await expect(loginPage.passwordInput()).toHaveAttribute('name', 'password');

  // Login button
  await expect(loginPage.loginButton()).toBeVisible();
  await expect(loginPage.loginButton()).toHaveText(/login/i);
});

// Test 3: Verify the user can enter the provided username and password
test('3. Verify the user can enter the provided username and password', async ({ page }) => {
  const loginPage = new OrangeHRMLoginPage(page);
  await loginPage.goto();

  const username = process.env.HRM_USERNAME || '';
  const password = process.env.HRM_PASSWORD || '';

  await loginPage.usernameInput().fill(username);
  await loginPage.passwordInput().fill(password);

  // Validate that input was successfully set
  await expect(loginPage.usernameInput()).toHaveValue(username);
  await expect(loginPage.passwordInput()).toHaveValue(password);
});

// Test 4: Verify the password field masks the input while entered
test('4. Verify the password field masks the input while entered', async ({ page }) => {
  const loginPage = new OrangeHRMLoginPage(page);
  await loginPage.goto();

  await loginPage.passwordInput().fill('anyText');

  // Expect input type to be password to mask input
  await expect(loginPage.passwordInput()).toHaveAttribute('type', 'password');
});
