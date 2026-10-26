
import { test, expect } from '@playwright/test';

test('Complete order and verify confirmation', async ({ page }) => {

    // 1. Login
    await page.goto('https://www.saucedemo.com/');

    await page.locator("//input[@id='user-name']")
        .fill('standard_user');

    await page.locator("//input[@id='password']")
        .fill('secret_sauce');

    await page.locator("//input[@id='login-button']").click();

    // 2. Add product to cart
    await page.locator(
        "//button[@id='add-to-cart-sauce-labs-backpack']"
    ).click();

    // 3. Open cart and click Checkout
    await page.locator("//a[@class='shopping_cart_link']").click();

    await page.locator("//button[@id='checkout']").click();

    // 4. Fill checkout information
    await page.locator("//input[@id='first-name']").fill('Nitish');
    await page.locator("//input[@id='last-name']").fill('Maurya');
    await page.locator("//input[@id='postal-code']").fill('141001');

    // 5. Click Continue
    await page.locator("//input[@id='continue']").click();

    // Verify checkout overview page
    await expect(page).toHaveURL(/checkout-step-two\.html/);

    // 6. Get Order Summary
    const summary = page.locator("//div[@class='summary_info']");
    const summaryText = await summary.innerText();

    console.log('----- ORDER SUMMARY -----');
    console.log(summaryText);

    // Get product name
    const productName = await page.locator(
        "//div[@class='inventory_item_name']"
    ).allInnerTexts();

    console.log('Products:', productName);

    // Verify summary is visible
    await expect(summary).toBeVisible();

    // 7. Click Finish
    await page.locator("//button[@id='finish']").click();

    // 8. Verify order confirmation
    const confirmation = page.locator(
        "//h2[@class='complete-header']"
    );

    await expect(confirmation).toHaveText(
        'Thank you for your order!'
    );

    const confirmationMessage = await confirmation.innerText();
    console.log('Order Confirmation:', confirmationMessage);

    // Get confirmation description
    const confirmationText = await page.locator(
        "//div[@class='complete-text']"
    ).innerText();

    console.log('Confirmation Details:', confirmationText);

    // 9. Click Back Home
    await page.locator("//button[@id='back-to-products']").click();

    // 10. Verify return to Products page
    await expect(page).toHaveURL(/inventory\.html/);

    await expect(
        page.locator("//span[@class='title']")
    ).toHaveText('Products');

    console.log('Returned to Home/Products page successfully!');
});
