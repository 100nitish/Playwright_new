
import { test, expect } from '@playwright/test';


//Download Link
test.skip('File Download', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');

    console.log('Page Opened Successfully');

    
    const downloadLink = page.locator('#content .example a').first();

    
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        downloadLink.click()
    ]);

    
    const fileName = download.suggestedFilename();

    
    await download.saveAs('./' + fileName);

    console.log('File Downloaded Successfully!');
    console.log('File Name: ' + fileName);
    console.log('Saved In: Current Project Folder');

});
//Upload Link



// import { test, expect } from '@playwright/test';

test('Single File Upload', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.waitForSelector('#filesToUpload');

    
    await page.locator('#filesToUpload').setInputFiles(
        String.raw`C:\Users\Student\Downloads\Tabnine AI Code Assistant.pdf`
    );

    await page.waitForTimeout(2000);

    
    await expect(page.locator('#fileList'))
        .toContainText('Tabnine AI Code Assistant.pdf');

    console.log('File Uploaded Successfully!');

});
