
import { test, expect } from '@playwright/test';

test('Static Web Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const title = await page.title();
    console.log('Page Title:', title);

    const table = page.locator('table[name="BookTable"]');

    const tableName = await table.getAttribute('name');
    console.log('Table Name:', tableName);

    const columns = table.locator('tr th');
    const columnCount = await columns.count();

    console.log('Total Columns:', columnCount);

    const rows = table.locator('tbody tr');
    const rowCount = await rows.count() - 1;

    console.log('Total Data Rows:', rowCount);



    const bookNames = table.locator('tbody tr td:nth-child(1)');
    const books = await bookNames.allTextContents();

    for (let i = 0; i < books.length; i++) {
        console.log(books[i]);
    }


    const authorNames = table.locator('tbody tr td:nth-child(2)');
    const authors = await authorNames.allTextContents();

    for (let i = 0; i < authors.length; i++) {
        console.log(authors[i]);
    }

});
