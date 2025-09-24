import { getPage } from '../playwrightUtilities';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { PurchasePage } from '../pages/purchase.page';

Then('I select the cart', async function () {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.goToCart();
});

Then('I select Checkout', async function () {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.checkout();
});

Then(
  'I fill in the details {string} {string} {string}',
  async function (firstName: string, lastName: string, postalCode: string) {
    const purchasePage = new PurchasePage(getPage());
    await purchasePage.fillInformation(firstName, lastName, postalCode);
  }
);

Then('I select Continue', async function () {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.continueCheckout();
});

Then('I select Finish', async function () {
  const purchasePage = new PurchasePage(getPage());
  await purchasePage.finishPurchase();
});

Then('I should see the text {string}', async function (expected: string) {
  const purchasePage = new PurchasePage(getPage());
  const text = await purchasePage.getConfirmationText();
  expect(text).toContain(expected);
});

Then('I will add the bike light to the cart', async function () {
  await getPage().locator('button[id="add-to-cart-sauce-labs-bike-light"]').click();
});
