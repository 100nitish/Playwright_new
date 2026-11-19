import { test, expect } from '@playwright/test';


test('automation', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    await page.pause()
})