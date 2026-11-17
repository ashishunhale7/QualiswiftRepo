import { test, expect, Locator, Page } from '@playwright/test';

// Page Object Model for Redbus Home Page
class RedbusHomePage {
  readonly page: Page;
  readonly sourceInput: Locator;
  readonly destinationInput: Locator;
  readonly dateInput: Locator;
  readonly sourceDropdown: Locator;
  readonly destinationDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    // Using the provided XPath for source and destination wrappers
    this.sourceInput = page.locator('xpath=//*[@id="search-div"]/div/div[1]//input');
    this.destinationInput = page.locator('xpath=//*[@id="search-div"]/div/div[3]//input');
    this.dateInput = page.locator('xpath=//*[@id="date-box"]');

    // Dropdown items when typing source or destination
    this.sourceDropdown = page.locator('xpath=//ul[contains(@class, "autoFill")]/li');
    this.destinationDropdown = page.locator('xpath=//ul[contains(@class, "autoFill")]/li');
  }

  async clickSource() {
    await this.page.locator('xpath=//*[@id="search-div"]/div/div[1]').click();
  }

  async setSource(text: string) {
    await this.sourceInput.fill('');
    await this.sourceInput.type(text, { delay: 100 });
    // Wait for dropdown & select matching text exactly
    await this.page.waitForTimeout(500); // Wait for suggestions to appear
    const item = this.sourceDropdown.filter({ hasText: text });
    await expect(item.first()).toBeVisible({ timeout: 3000 });
    await item.first().click();
  }

  async clickDestination() {
    await this.page.locator('xpath=//*[@id="search-div"]/div/div[3]').click();
  }

  async setDestination(text: string) {
    await this.destinationInput.fill('');
    await this.destinationInput.type(text, { delay: 100 });
    await this.page.waitForTimeout(500); // Wait for suggestions
    const item = this.destinationDropdown.filter({ hasText: text });
    await expect(item.first()).toBeVisible({ timeout: 3000 });
    await item.first().click();
  }

  async openDatePicker() {
    await this.dateInput.click();
  }

  async selectTodayDate() {
    // Today's date cell likely to have 'current day' class or aria-selected true
    const todayCell = this.page.locator('xpath=//td[contains(@class,"current day") or @aria-selected="true"]');
    await todayCell.click();
  }

  async getSourceInputValue() {
    return this.sourceInput.inputValue();
  }

  async getDestinationInputValue() {
    return this.destinationInput.inputValue();
  }
}

// Helper function to get today's date in numeric day format
function getTodayDateNumber(): number {
  const today = new Date();
  return today.getDate();
}

// Tests

test.describe('Redbus ticket booking tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // 1. Verify bus ticket search functionality
  test('1. Verify bus ticket search functionality', async ({ page }) => {
    const home = new RedbusHomePage(page);

    // Verify user is able to click on Source
    await expect(home.page.locator('xpath=//*[@id="search-div"]/div/div[1]')).toBeVisible();
    await home.clickSource();

    // Verify user is able to add source "Pune"
    await home.setSource('Pune');

    // Assert the source input value is set correctly
    const sourceVal = await home.getSourceInputValue();
    expect(sourceVal).toContain('Pune');
  });

  // 2. Add destination
  test('2. Add destination', async ({ page }) => {
    const home = new RedbusHomePage(page);

    // Precondition states "User is logged into the app" but no login steps provided.
    // We assume no login needed for these UI interactions as per provided evidence.

    // Set source as Pune to fulfill requirement
    await home.setSource('Pune');
    const sourceVal = await home.getSourceInputValue();
    expect(sourceVal).toContain('Pune');

    // Navigate to destination and select Mumbai
    await expect(home.page.locator('xpath=//*[@id="search-div"]/div/div[3]')).toBeVisible();
    await home.clickDestination();
    await home.setDestination('Mumbai');

    // Assert destination input value
    const destinationVal = await home.getDestinationInputValue();
    expect(destinationVal).toContain('Mumbai');

    // Final expected result: Source and destination set without errors
    // We check no error messages present on page
    const errorMessages = home.page.locator('.error, .validation-error, .input-error');
    await expect(errorMessages).toHaveCount(0);
  });

  // 3. select date
  test('3. select date', async ({ page }) => {
    const home = new RedbusHomePage(page);

    await home.openDatePicker();

    // Select today's date
    await home.selectTodayDate();

    // Verify no past dates can be selected by checking attributes
    // Since exact selectors or disabled states not provided, verify today's date selected value matches today's date
    // Check the date input reflects today's date (format can vary, so partial match used)

    const dateInputValue = await home.dateInput.inputValue();
    const today = new Date();
    // Create a regex pattern for date presence (format may vary, so checking day number)
    const dayNumber = today.getDate().toString();
    expect(dateInputValue).toContain(dayNumber);
  });

});
