import {test,expect} from "@playwright/test"

test.skip("show poupu", async ({page})=>{
    page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dailog',async dailog=>{
        expect(dailog.type()).toContain("alert")
        expect(dailog.message()).toContain("I am a JS Alert")
        await dailog.accept()
    })

    await page.getByRole("button",{name:"Click for JS Alert"}).click();
    await expect(page.locator('#result')).toContainText('You sucessfully clicked an alert');
    await page.waitForTimeout(4000);
})

test.skip("confirm", async ({page})=>{
    page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dailog',async dailog=>{
        expect(dailog.type()).toBe("alert")
        expect(dailog.message()).toBe("I am a JS Confirm")
        await dailog.accept()
    })
await page.getByRole("button",{name:"Click for JS Confirm"}).click();
    await expect(page.locator('#result')).toContainText('You clicked: Cancel')
    await page.waitForTimeout(4000);



})



test.skip("Prompt", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    // Handle JavaScript Dialog
    page.on('dialog', async dialog => {

        // Validate dialog type
        expect(dialog.type()).toBe("prompt");

        // Validate dialog message
        expect(dialog.message()).toBe("I am a JS prompt");

        // Enter text and accept prompt
        await dialog.accept("Hello");
    });

    // Click on JS Prompt button
    await page.getByRole("button", { name: "Click for JS Prompt" }).click();

    // Validate result
    await expect(page.locator('#result'))
        .toContainText('You entered: Hello');

});

test("beforeunload", async ({page})=>{
    page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.evaluate(()=>{
        window.onbeforeunload = () =>'You have unsaved changes!'
    });
    await page.waitForTimeout(5000);

    page.on("dialog", async dialog =>{
        console.log("pop-up message",dialog.type());
        await dialog.accept();
    });

    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(3000);

    await expect(page.locator('#user-name')).toBeEmpty();
})
