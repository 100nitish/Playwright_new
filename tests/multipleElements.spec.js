import { firefox } from '@playwright/test';

(async ()=>{
    //launch browser
    const browser = await firefox.launch({headless:false});
    //create multiple context or tab
    const context = await browser.newContext();
    //create the multiple new pages
    const page = await context.newPage();
    
    await page.goto("https://www.demoblaze.com")
    //count number of slide images
    const slidecount = await page.locator('.carousel-item').count();
    console.log(slidecount)
})();


