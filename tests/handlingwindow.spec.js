
import { test, expect, webkit } from "@playwright/test";

test("Handle Multiple Windows", async ({ browser }) => {

    // const browser = await webkit.launch({ headless: false });

    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    
    const total_pages = context.pages();
    console.log("Total Pages:", total_pages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page1).toHaveTitle(/OrangeHRM/);

    await page2.goto("https://www.saucedemo.com/");

    await expect(page2).toHaveTitle(/Swag Labs/);

    console.log("Page 1:", await page1.title());
    console.log("Page 2:", await page2.title());
    // page1.waitForTimeout(3000);

    await browser.close();

});
