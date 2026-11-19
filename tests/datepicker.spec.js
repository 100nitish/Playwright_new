
import { test, expect } from '@playwright/test';

test.skip('datepicker', async ({ page }) => {

    await page.goto('https://jqueryui.com/datepicker/');

    
    const frame = page.frameLocator('.demo-frame');

    
    const dateframe = frame.locator('#datepicker');

    await dateframe.click();

    const year = '2027';
    const month = 'December';
    const date = '12';

   

    while (true) {

        const currentYear = await frame
            .locator('.ui-datepicker-year')
            .textContent();

        const currentMonth = await frame
            .locator('.ui-datepicker-month')
            .textContent();

        console.log(currentMonth, currentYear);

        if (
            currentYear.trim() === year &&
            currentMonth.trim() === month
        ) {
            break;
        }

        await frame.locator('.ui-datepicker-next').click();
    }

    

    const dates = await frame
        .locator('.ui-datepicker-calendar td a')
        .all();

    

    for (const dt of dates) {

        const dateText = await dt.textContent();

        if (dateText.trim() === date) {

            await dt.click();

            console.log('Date selected:', date);

            break;
        }
    }

    

    await expect(dateframe).toHaveValue('12/12/2027');

    console.log('Datepicker validation successful');

});


test.skip('newdate', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const date = page.locator('#txtDate').click();

    // await date.fill('11/18/2026');

    // await expect(date).toHaveValue('11/18/2026');

    await page.locator('xpath=//*[@id="ui-datepicker-div"]').selectOption('2025');
    await page.locator('.ui-datepicker-month').selectOption('11')

    const count = await dates.count();
    

    console.log('Date selected successfully');

});
test ('datepicker2', async ({ page }) => {


     await page.goto('https://testautomationpractice.blogspot.com/');


      await page.locator('#txtDate').click();

     



        await page.locator('.ui-datepicker-year').selectOption('2025');
  await page.locator('.ui-datepicker-month').selectOption('11');

   const date = '12';

    const dates = page.locator(
        '.ui-datepicker-calendar td:not(.ui-datepicker-other-month) a'
    );

    const count = await dates.count();

    for (let i = 0; i < count; i++) {

        const dt = dates.nth(i);

        if (await dt.textContent() === date) {
            await dt.click();
            break;
        }
    }

    // Verify selected date
    await expect(page.locator('#txtDate'))
        .toHaveValue('12/12/2025');
// await page.waitForTimeout(5000);
});
