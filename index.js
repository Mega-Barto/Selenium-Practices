const { Builder, By, Key, util } = require("selenium-webdriver")
async function testing() {
    const driver = await new Builder().forBrowser("MicrosoftEdge").build();
    try {
        await driver.get("https://www.saucedemo.com");
        await driver.findElement(By.name("user-name")).sendKeys("standard_user");
        await driver.findElement(By.name("password")).sendKeys("secret_sauce");
        await driver.findElement(By.name("login-button")).submit();
        await driver.sleep(5000);
    } finally {
        await driver.quit();
    }
}
testing();