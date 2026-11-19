import {test,expect} from '@playwright/test'

test('dropdown', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator("#country").selectOption("India");
    await page.locator('#country').selectOption({index:9})
    // await page.locator('#country').selectOption({value:'India'})

    const total = await page.locator('#country option')
    const count = await total.count();
    console.log(`Total count is ${count}`);

    await expect(total).toHaveCount(10);

    const country = await page.locator('#country').textContent();
    await expect(country.includes('India')).toBeTruthy();

    await page.waitForTimeout(3000);

})