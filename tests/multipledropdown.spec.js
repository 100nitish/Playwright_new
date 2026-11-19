import {test,expect} from '@playwright/test'

test('testmultipledropdown', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.selectOption('#colors',['Red','Blue','Green'])
    const options = await page.locator('#colors option')
    const count = await options.count()

    await expect(options).toHaveCount(7); 

    const colors = await page.locator('#colors').textContent();
    await expect(colors.includes('Blue')).toBeTruthy();

    console.log(`Total count is ${count}`)
})