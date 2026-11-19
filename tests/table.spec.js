
import { test, expect } from "@playwright/test";

test("table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = page.locator("#productTable");

    const columns = table.locator("thead tr th");
    const rows = table.locator("tbody tr");

    console.log("Columns:", await columns.count());
    console.log("Rows:", await rows.count());

    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    // Find Smartwatch row
    const matchedRow = rows.filter({
        hasText: "Smartwatch"
    });

    await expect(matchedRow).toHaveCount(1);

    // Select Smartwatch checkbox
    const checkbox = matchedRow.locator("input[type='checkbox']");

    await checkbox.check();
    await expect(checkbox).toBeChecked();

    console.log("Smartwatch checkbox selected");

    // Click product name
    await matchedRow.locator("td").nth(1).click();

    // Select multiple products
    const expected = [
        "Laptop",
        "Smartwatch",
        "Wireless Earbuds"
    ];

    const count = await rows.count();

    for (let i = 0; i < count; i++) {

        const productName = (
            await rows.nth(i).locator("td").nth(1).textContent()
        ).trim();

        console.log(productName);

        if (expected.includes(productName)) {

            const checkbox = rows.nth(i)
                .locator("input[type='checkbox']");

            await checkbox.check();

            console.log(productName + " checkbox selected");
        }
    }

    // Print all table data
    for (let i = 0; i < count; i++) {

        const data = await rows.nth(i).textContent();

        console.log(data.trim());
    }

    // Pagination
    const pages = page.locator(
        'ul li a'
    ).filter({ hasText: /^[1-4]$/ });

    const pageCount = await pages.count();

    console.log("Total Pages:", pageCount);

    expect(pageCount).toBe(4);

    // Store IDs from all pages

    await pages.nth(0).click();

    const page1Ids = await table
        .locator("tbody tr td:first-child")
        .allTextContents();

    await pages.nth(1).click();

    const page2Ids = await table
        .locator("tbody tr td:first-child")
        .allTextContents();

    await pages.nth(2).click();

    const page3Ids = await table
        .locator("tbody tr td:first-child")
        .allTextContents();

    await pages.nth(3).click();

    const page4Ids = await table
        .locator("tbody tr td:first-child")
        .allTextContents();


    const allIds = [
        ...page1Ids,
        ...page2Ids,
        ...page3Ids,
        ...page4Ids
    ];

   

    const uniqueIds = new Set(allIds);

    console.log("Page 1 IDs:", page1Ids);
    console.log("Page 2 IDs:", page2Ids);
    console.log("Page 3 IDs:", page3Ids);
    console.log("Page 4 IDs:", page4Ids);

    console.log("All IDs:", allIds);
    console.log("Unique IDs:", [...uniqueIds]);

   

    expect(uniqueIds.size).toBe(allIds.length);

    console.log("All IDs are unique");


    await pages.nth(1).click();

    await pages.nth(0).click();

    // await expect(pages).toContainText('Laptop');
    await expect(table).toContainText('Laptop');

});
