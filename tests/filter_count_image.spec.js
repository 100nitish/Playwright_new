import { firefox } from '@playwright/test';

(async ()=>{
    //launch browser
    const browser = await firefox.launch({headless:false});
    //create multiple context or tab
    const context = await browser.newContext();
    //create the multiple new pages
    const page = await context.newPage();
    
    await page.goto("https://www.automationexercise.com/")
    //count number of slide images
    const product = await page.locator('.features_items').locator('.col-sm-4').filter({has:page.locator('img')}).count();
    console.log(product)

    
})();


