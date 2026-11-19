
import { test, expect } from "@playwright/test";

test('frames', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    await page.waitForTimeout(3000);

    
    const allframes = page.frames();

    console.log(`The length is ${allframes.length}`);

    
    const input = page
        .frameLocator('frame[src="frame_1.html"]')
        .locator('[name="mytext1"]');

    await input.fill("done");

    await expect(input).toHaveValue("done");

    console.log("Frame 1 input value:", await input.inputValue());

   
    const input2 = page
        .frameLocator('frame[src="frame_3.html"]')
        .locator('[name="mytext3"]');

    await input2.fill("Spiderman");

    await expect(input2).toHaveValue("Spiderman");

    console.log("Frame 3 input value:", await input2.inputValue());

    await page.waitForTimeout(3000);

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3' });
    const child= await frame3.childFrames();
    console.log(`childeframe count ${child.length}`);

});
