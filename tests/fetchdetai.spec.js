
import { test, expect } from '@playwright/test';

test('nav menu count', async ({ page }) => {

    await page.goto("https://www.automationexercise.com/");

    // Count navigation menus
    const menus = page.locator('.navbar-nav li');

    const count = await menus.count();
    console.log("Menu count:", count);

    // Get all menu names
    const text = await menus.allTextContents();
    console.log(text);

    // Print menu names one by one
    for (let i = 0; i < count; i++) {
        const text2 = await menus.nth(i).textContent();
        console.log(text2);
    }

    // Click second menu
    await menus.nth(1).click();

    await page.waitForTimeout(4000);

    // Get all product information
    const product = await page.locator(
        "xpath=//*[@class='productinfo text-center']"
    );

    console.log("All Products:", product.allTextContents());

    // Get first product name
    const firstproduct = await product.first().textContent();
    console.log("First Product:", firstproduct.trim());

    const lastproduct = await product.last().textContent();
    console.log("Last Product:",lastproduct.trim())


    await product.first().click();
    await page.waitForTimeout(3000);
    await page.locator("//*[@class='fa fa-plus-square']").nth(0).click();
    await page.waitForTimeout(7000);

    await expect (page).toHaveText('Blue Top');

});
