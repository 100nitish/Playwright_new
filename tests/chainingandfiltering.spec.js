import { firefox, expect } from '@playwright/test';

(async ()=>{
    //launch browser
    const browser = await firefox.launch({headless:false});
    //create multiple context or tab
    const context = await browser.newContext();
    //create the multiple new pages
    const page = await context.newPage();
    
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //Chaining Method
    await page.locator('#form').locator('#username').fill('student');
    await page.locator('#form').locator('#password').fill('Password123');
    await page.locator('#form').locator('#submit').click();
    const title = await page.locator('.post-title').textContent();
    console.log(title);

    const expectedtext = "Logged In Successfully"
    await expect(page.locator('.post-title')).toHaveText(expectedtext);


    // await page.expect(page).toHaveTitle("Logged In Successfully")

    //Filter Method

    await page.locator('#menu-primary-items').filter({hasText:'Home'}).click();
     await expect(page).toHaveTitle('Practice Test Automation | Learn Selenium WebDriver');
    console.log("Title verified successfully")



    
})();


