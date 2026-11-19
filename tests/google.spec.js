
import { test, expect } from "@playwright/test";

test('dropdown', async ({ page }) => {

    await page.goto('https://www.google.com/');

    
    await expect(page).toHaveTitle('Google');

    
    await page.locator('xpath=//*[@class="gLFyf"]').fill('playwright');

    const search = page.locator('xpath=//ul[@role="listbox"]//li');

   
    await search.first().waitFor();

    
    const count = await search.count();

    console.log("Total:", count);

   
    for (let i = 0; i < count; i++) {

        const text = await search.nth(i).innerText();

        console.log(text);
    }

});
