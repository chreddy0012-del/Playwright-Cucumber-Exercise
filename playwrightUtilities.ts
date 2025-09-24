import { Browser, Page, chromium } from "@playwright/test";

let browser: Browser | null = null;
let page: Page | null = null;

export async function initializeBrowser() {
  browser = await chromium.launch({ headless: true });
}

export function getBrowser(): Browser {
  if (!browser) {
    throw new Error("Browser has not been initialized");
  }
  return browser;
}

export function initializePage(newPage: Page) {
  page = newPage;
}

export function getPage(): Page {
  if (!page) {
    throw new Error("Page has not been initialized. Please call initializePage first.");
  }
  return page;
}

export async function closeBrowser() {
  if (browser) {
    await browser.close();
    browser = null;
    page = null;
  }
}
