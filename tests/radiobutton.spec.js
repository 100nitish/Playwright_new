
import { test, expect } from '@playwright/test';

test('Validate all Gender Radio Buttons', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    const genders = [
        { id: '#gender-radio-1', name: 'Male' },
        { id: '#gender-radio-2', name: 'Female' },
        { id: '#gender-radio-3', name: 'Other' }
    ];

    // Count total radio buttons
    const radio = page.locator('input[type="radio"]');

    const count = await radio.count();

    console.log('Total Radio Buttons:', count);

    // Validate radio button count
    expect(count).toBe(3);

    for (let i = 0; i < genders.length; i++) {

        const radioButton = page.locator(genders[i].id);

        // Select radio button
        await radioButton.check({ force: true });

        // Validate selected radio button
        await expect(radioButton).toBeChecked();

        console.log(genders[i].name + ' is selected');

    }

});
