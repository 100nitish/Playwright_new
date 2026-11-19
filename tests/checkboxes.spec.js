
import { test, expect } from '@playwright/test';

test('Validate selective Hobbies Uncheck', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    const hobbies = [
        { id: '#hobbies-checkbox-1', name: 'Sports' },
        { id: '#hobbies-checkbox-2', name: 'Reading' },
        { id: '#hobbies-checkbox-3', name: 'Music' }
    ];

    const count = hobbies.length;

    console.log(`The checkboxes count is ${count}`);
    expect(count).toBe(3);

    // First select all checkboxes
    for (let i = 0; i < hobbies.length; i++) {
        const checkbox = page.locator(hobbies[i].id);
        await checkbox.check({ force: true });
    }

    // Uncheck only Sports and Music
    const uncheckHobbies = ['Sports', 'Music'];

    for (let i = 0; i < hobbies.length; i++) {

        const checkbox = page.locator(hobbies[i].id);

        if (uncheckHobbies.includes(hobbies[i].name)) {

            // Uncheck checkbox
            await checkbox.uncheck({ force: true });

            // Validate checkbox is unchecked
            await expect(checkbox).not.toBeChecked();

            console.log(hobbies[i].name + ' checkbox is unchecked');

        } else {

            // Validate checkbox is still checked
            await expect(checkbox).toBeChecked();

            console.log(hobbies[i].name + ' checkbox is still checked');
        }
    }

    await page.waitForTimeout(5000);

});
