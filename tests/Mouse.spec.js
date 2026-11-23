
import { test, expect, } from "@playwright/test";

test.skip('mouse hover', async ({ page }) => {

    await page.goto('https://tutorialsninja.com/demo/');

    const hoverelement = page.locator('xpath=//*[@class="dropdown"]').first();

   
    await hoverelement.hover();

   
    await expect(hoverelement).toBeVisible();

    await page.waitForTimeout(3000);

});




test('Clear', async ({ page }) => {

     await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

const frame = page.frameLocator('#iframeResult');
   const field1 =await frame.locator('#field1');
  const field2 =await frame.locator('#field2');
   await field1.clear();

   await field1.fill('playwright');
     await page.waitForTimeout(5000);

   const button = await frame.locator('//button[text()="Copy Text"]');


   await button.dblclick();




     await page.waitForTimeout(5000);


     const value1 = await field1.inputValue();
const value2 = await field2.inputValue();

console.log(value1);
console.log(value2);

expect(value2).toEqual(value1);

    



});

