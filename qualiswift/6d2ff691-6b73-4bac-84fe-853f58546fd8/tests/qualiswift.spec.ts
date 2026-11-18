import { test, expect, Page } from '@playwright/test';

// Page Object Model for OrangeHRM Login Page
class OrangeHRMLoginPage {
  readonly page: Page;
  readonly usernameInput = 'input[name="username"]';
  readonly passwordInput = 'input[name="password"]';
  readonly loginButton = 'button[type="submit"]';
  readonly dashboardHeaderSelector = 'header h6'; // Visible text usually 'Dashboard'

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    // Navigate to login page path
    await this.page.goto('/web/index.php/auth/login');
  }

  async isLoginPageDisplayed() {
    // Check for username, password fields and login button presence
    await expect(this.page.locator(this.usernameInput)).toBeVisible();
    await expect(this.page.locator(this.passwordInput)).toBeVisible();
    await expect(this.page.locator(this.loginButton)).toBeVisible();
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async getPasswordInputType() {
    return await this.page.getAttribute(this.passwordInput, 'type');
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async isDashboardDisplayed() {
    // Wait for some dashboard-specific element
    // OrangeHRM shows header with text 'Dashboard'
    const dashboardHeader = this.page.locator(this.dashboardHeaderSelector);
    await expect(dashboardHeader).toBeVisible({ timeout: 10000 });
    await expect(dashboardHeader).toHaveText(/Dashboard/i);
  }
}

const USERNAME = process.env.HRM_USERNAME || '';
const PASSWORD = process.env.HRM_PASSWORD || '';

test.describe('OrangeHRM Login Tests', () => {
  test('1. Verify OrangeHRM login page loads correctly', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);
    await loginPage.goto();
    await loginPage.isLoginPageDisplayed();
  });

  test('2. Verify Username and Password fields are editable', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);
    await loginPage.goto();

    // Fill username
    await loginPage.enterUsername(USERNAME);
    await expect(page.locator(loginPage.usernameInput)).toHaveValue(USERNAME);

    // Fill password
    await loginPage.enterPassword(PASSWORD);
    // Verify password field value is NOT visible in plain text by checking input value - password input type hides text
    // The visible value will be masked automatically by input[type="password"], so we can confirm input type
    const passwordType = await loginPage.getPasswordInputType();
    expect(passwordType).toBe('password');
  });

  test('3. Verify password input is masked', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);
    await loginPage.goto();

    await loginPage.enterPassword(PASSWORD);

    const passwordType = await loginPage.getPasswordInputType();
    expect(passwordType).toBe('password');
  });

  test('4. Verify successful login with valid credentials', async ({ page }) => {
    const loginPage = new OrangeHRMLoginPage(page);
    await loginPage.goto();

    await loginPage.enterUsername(USERNAME);
    await loginPage.enterPassword(PASSWORD);
    await loginPage.clickLogin();

    await loginPage.isDashboardDisplayed();
  });
});
