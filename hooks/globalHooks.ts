// globalHooks.ts
import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage, getBrowser } from "../playwrightUtilities";

setDefaultTimeout(15000);

Before(async () => {
  // Start browser
  await initializeBrowser();

  // Create a new page from the browser
  const browser = getBrowser();
  const page = await browser.newPage();

  // Initialize the shared page
  initializePage(page);
});

After(async () => {
  await closeBrowser();
});
