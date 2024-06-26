import { After, AfterAll, BeforeAll, Before, Status } from '@cucumber/cucumber';
import { Builder, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

export let driver: WebDriver;

BeforeAll(function() {
   // @ts-ignore
   this.setDefaultTimeout(10000);
});

Before(async () => {
    const chromeOptions = new Options();
    chromeOptions.setChromeBinaryPath('C:\Program Files\Google\Chrome');
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new Options()
                          // .headless()
                          .windowSize({ width: 640, height: 480 }))
        .build();
    return driver.manage().window().maximize();
});

AfterAll(async () => driver.quit());

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        const attach = this.attach;
        const png = await driver.takeScreenshot();
        const decodedImage = Buffer.from(png, "base64");
        return attach(decodedImage, "image/png");
    }
});
