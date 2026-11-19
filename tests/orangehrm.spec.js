
import { test, expect } from "@playwright/test";

test('orangehrm', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    
    await page.getByPlaceholder('Username').fill('Admin');

    
    await page.getByPlaceholder('Password').fill('admin123');

    
    await page.locator('xpath=//*[@type="submit"]').click();

    
    await expect(page).toHaveTitle('OrangeHRM');

    
    // await page.locator('xpath=//span[text()="PIM"]').waitFor();

    
    await page.locator('xpath=//span[text()="PIM"]').click();

    await page.locator('.oxd-selec-text-input').nth(2).click();

    const count = await page.locator('.oxd-select-text-input').nth(2).click();
    console.log(count);
    


});
