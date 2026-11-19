
import { test, expect } from "@playwright/test";

test.skip('mouse hover', async ({ page }) => {

    await page.goto('https://tutorialsninja.com/demo/');

    const hoverelement = page.locator('xpath=//*[@class="dropdown"]').first();

   
    await hoverelement.hover();

   
    await expect(hoverelement).toBeVisible();

    await page.waitForTimeout(3000);

});




test('Clear', async ({ page }) => {

    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');

    const clear = page.frameLocator('xpath=//*[@id="iframeResult"]').locator('xpath=//*[@id="field1"]');

    await clear.clear();


    await page.waitForTimeout();

    



});

