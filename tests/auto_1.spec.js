const { test, expect } = require('@playwright/test');

test('Login and Logout functionality', async ({ page }) => {

    // 1. Open website
    await page.goto('https://www.automationexercise.com/');

    // 2. Click Signup / Login
    await page.getByRole('link', { name: /Signup \/ Login/i }).click();

    // 3. Verify login page
    await expect(
        page.getByText('Login to your account')
    ).toBeVisible();

    // 4. Enter valid credentials
    await page.locator('[data-qa="login-email"]')
        .fill(process.env.TEST_EMAIL);

    await page.locator('[data-qa="login-password"]')
        .fill(process.env.TEST_PASSWORD);

    // 5. Click Login button
    await page.locator('[data-qa="login-button"]').click();

    // 6. Verify successful login
    await expect(
        page.getByText('Logged in as')
    ).toBeVisible();

    console.log('Login successful');

    // 7. Click Logout
    await page.getByRole('link', { name: 'Logout' }).click();

    // 8. Verify redirection to login page
    await expect(page).toHaveURL(/login/);

    await expect(
        page.getByText('Login to your account')
    ).toBeVisible();

    console.log('Logout successful');
});