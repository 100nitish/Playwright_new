
import { test, expect } from "@playwright/test";

test('jquery', async ({ page }) => {

    await page.goto('https://www.jquery-az.com/');

    await page.locator('.nav-link').nth(1).click();

    // await page.locator('.dropdown-item').nth(0).click();

    await page.waitForTimeout(3000);

    // Locate all links inside the visible dropdown menu
    const menus = page.locator(
        "xpath=//*[@class='dropdown-menu m-0 bg-secondary rounded-0 show']//a"
    );
     await page.waitForTimeout(3000);

    const count = await menus.all();

    // console.log("Total menu count:", all);

    // Print all menu names using for loop
    let expected = "Java"
    for (let i = 0; i < count.length; i++) {
        const text = await count[i].textContent();
        
    if(text===expected){
        await count[i].click();
        break;
    }
    }
await expect(page).toHaveTitle('Java Tutorials')
});
