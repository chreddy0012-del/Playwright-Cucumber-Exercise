import { Page, Locator } from '@playwright/test';

export class PurchasePage {
  readonly cartIcon: Locator;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly confirmationText: Locator;

  constructor(private page: Page) {
    this.cartIcon = page.locator('.shopping_cart_link');
    this.checkoutButton = page.locator('#checkout');
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.confirmationText = page.locator('.complete-header');
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async finishPurchase() {
    await this.finishButton.click();
  }

  async getConfirmationText(): Promise<string | null> {
    return this.confirmationText.textContent();
  }
}
