import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I sort the items by {string}', async (sort: string) => {
  await new Product(getPage()).sortItems(sort);
});

Then('I validate all 6 items are sorted correctly by price', async () => {
  const product = new Product(getPage());
  const sortDropdown = getPage().locator('.product_sort_container');
  const selectedValue = await sortDropdown.inputValue();

  if (selectedValue === 'lohi') {
    await product.validateSortedAscending();
  } else if (selectedValue === 'hilo') {
    await product.validateSortedDescending();
  } else {
    throw new Error(`Unknown sort value: ${selectedValue}`);
  }
});

Then('I validate all items are sorted correctly by name', async () => {
  const product = new Product(getPage());
  const names = await getPage().locator('.inventory_item_name').allTextContents();
  const sortedAsc = [...names].sort();
  const sortedDesc = [...names].sort().reverse();

  const sortDropdown = getPage().locator('.product_sort_container');
  const selectedValue = await sortDropdown.inputValue();

  if (selectedValue === 'az') {
    if (JSON.stringify(names) !== JSON.stringify(sortedAsc)) {
      throw new Error('Items are not sorted A→Z');
    }
  } else if (selectedValue === 'za') {
    if (JSON.stringify(names) !== JSON.stringify(sortedDesc)) {
      throw new Error('Items are not sorted Z→A');
    }
  } else {
    throw new Error(`Unknown sort value: ${selectedValue}`);
  }
});