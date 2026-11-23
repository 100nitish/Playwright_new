import {test,expect} from "@playwright/test";

test.skip('draganddrop', async ({page})=>{
    await page.goto('https://www.qa-practice.com/elements/dragndrop/boxes');

    const source_element = page.locator('#rect-draggable');
    const dest_element = page.locator('#rect-droppable');

    // //Method 1
    // await source_element.hover()

    // await page.mouse.down();

    // await dest_element.hover();

    // await page.mouse.up();

    // await page.waitForTimeout(3000);

    //method-2

    await source_element.dragTo(dest_element)
});


test('imagesdrop', async ({ page }) => {

    await page.goto('https://www.qa-practice.com/elements/dragndrop/images');

    const smiley = page.locator('.rect-draggable');

    const empty_box = page.locator('#rect-droppable2');

   
    await smiley.hover();

    
    await page.mouse.down();

    await page.waitForTimeout(1000);

    
    await empty_box.hover();

   
    await page.mouse.up();

    await page.waitForTimeout(2000);

});
