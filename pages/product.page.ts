import { Page } from "@playwright/test";

export class Product {
    private readonly page: Page;
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]';
    private readonly sortDropdown: string = '.product_sort_container';
    private readonly productPrices: string = '.inventory_item_price';

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click();
    }

    public async sortItems(option: string) {
        await this.page.locator(this.sortDropdown).selectOption({ label: option });
    }

    public async getAllPrices(): Promise<number[]> {
        const pricesText = await this.page.locator(this.productPrices).allTextContents();
        return pricesText.map(text => parseFloat(text.replace('$', '')));
    }

    public async validateSortedAscending() {
        const prices = await this.getAllPrices();
        const sorted = [...prices].sort((a, b) => a - b);
        if (JSON.stringify(prices) !== JSON.stringify(sorted)) {
            throw new Error('Prices are not sorted ascending');
        }
    }

    public async validateSortedDescending() {
        const prices = await this.getAllPrices();
        const sorted = [...prices].sort((a, b) => b - a);
        if (JSON.stringify(prices) !== JSON.stringify(sorted)) {
            throw new Error('Prices are not sorted descending');
        }
    }
}
