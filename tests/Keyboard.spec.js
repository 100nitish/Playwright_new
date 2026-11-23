
import { test, expect } from "@playwright/test";

test('keyboard', async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    const text1 = page.locator("[name='text1']");
    await text1.fill('Welcome');

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Control+C');

    await page.keyboard.press('Tab');

    await page.waitForTimeout(1000);

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(2000);

    const text2 = page.locator("[name='text2']");
    await expect(text2).toHaveValue('Welcome');

    const simple = page.locator('#simple');
    await simple.check();

    await expect(simple).toBeChecked();

});
