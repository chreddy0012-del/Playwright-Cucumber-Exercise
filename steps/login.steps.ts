import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});

// New step for login with username + password
Then(
  'I will login with username {string} and password {string}',
  async (userName: string, password: string) => {
    const page = getPage();
    await page.locator('input[id="user-name"]').fill(userName);
    await page.locator('input[id="password"]').fill(password);
    await page.locator('input[id="login-button"]').click();
  }
);

Then('I should see the error message {string}', async (expectedMessage: string) => {
  const page = getPage();
  const errorMessage = await page.locator('[data-test="error"]').textContent();
  expect(errorMessage?.trim()).toBe(expectedMessage);
});
