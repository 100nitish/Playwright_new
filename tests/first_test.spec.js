
import { test, expect } from '@playwright/test';

test('Fetch title, URL and login', async ({ page }) => {

    // Open website
    await page.goto('https://www.saucedemo.com/');

    // Fetch title
    const title = await page.title();
    console.log('Title:', title);

    // Verify title
    await expect(page).toHaveTitle('Swag Labs');

    // Fetch URL
    const url = page.url();
    console.log('URL:', url);

    // Locate login elements
    const usernameField = page.locator('#user-name');
    const passwordField = page.locator('#password');
    const loginButton = page.locator('#login-button');

    // Enter credentials
    await usernameField.fill('standard_user');
    await passwordField.fill('secret_sauce');

    // Click login
    await loginButton.click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(
        page.locator('.title')
    ).toHaveText('Products');

    console.log('Login successful!');
});
