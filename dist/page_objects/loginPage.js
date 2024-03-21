"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const AbstractPageObject_1 = require("./AbstractPageObject");
const hook_1 = require("../support/hook");
class loginPage extends AbstractPageObject_1.AbstractPageObject {
    userName = selenium_webdriver_1.By.id("user-name");
    passWord = selenium_webdriver_1.By.id("password");
    loginButton = selenium_webdriver_1.By.id("login-button");
    addToCart = selenium_webdriver_1.By.name("add-to-cart-sauce-labs-backpack");
    addshirttoCart = selenium_webdriver_1.By.name("add-to-cart-sauce-labs-bolt-t-shirt");
    cartLogo = selenium_webdriver_1.By.xpath("//*[@id='shopping_cart_container']/a");
    checkoutButton = selenium_webdriver_1.By.id("checkout");
    fName = selenium_webdriver_1.By.id("first-name");
    lName = selenium_webdriver_1.By.id("last-name");
    pCode = selenium_webdriver_1.By.id("postal-code");
    continueButton = selenium_webdriver_1.By.id("continue");
    finishButton = selenium_webdriver_1.By.id("finish");
    backHomeButton = selenium_webdriver_1.By.id("back-to-products");
    menuOption = selenium_webdriver_1.By.id("react-burger-menu-btn");
    logOutButton = selenium_webdriver_1.By.id("logout_sidebar_link");
    removebtn = selenium_webdriver_1.By.xpath("//button[@class='btn btn_secondary btn_small cart_button' and @id='remove-sauce-labs-backpack']");
    continueShopping = selenium_webdriver_1.By.id("continue-shopping");
    total = selenium_webdriver_1.By.xpath("//div[@class='summary_subtotal_label']");
    itemcost1 = selenium_webdriver_1.By.xpath("//*[@id='inventory_container']/div/div[1]/div[2]/div[2]/div");
    itemcost2 = selenium_webdriver_1.By.xpath("//*[@id='inventory_container']/div/div[3]/div[2]/div[2]/div");
    itemname1 = selenium_webdriver_1.By.id("item_4_title_link");
    itemname2 = selenium_webdriver_1.By.id("item_1_title_link");
    constructor() {
        super(hook_1.driver);
    }
    open = (url) => {
        this.driver.get(url);
    };
    username = async (name) => {
        await this.driver.findElement(this.userName).sendKeys(name);
        return this;
    };
    password = async (pwd) => {
        await this.driver.findElement(this.passWord).sendKeys(pwd);
        return this;
    };
    loginbutton = async () => {
        await this.driver.findElement(this.loginButton).click();
        return this;
    };
    addCart = async () => {
        await this.driver.findElement(this.addToCart).click();
        return this;
    };
    shirtCart = async () => {
        await this.driver.findElement(this.addshirttoCart).click();
        return this;
    };
    cart = async () => {
        await this.driver.findElement(this.cartLogo).click();
        return this;
    };
    checkout = async () => {
        await this.driver.findElement(this.checkoutButton).click();
        return this;
    };
    firstname = async (fname1) => {
        await this.driver.findElement(this.fName).sendKeys(fname1);
        return this;
    };
    lastname = async (lname1) => {
        await this.driver.findElement(this.lName).sendKeys(lname1);
        return this;
    };
    pincode = async (pin) => {
        await this.driver.findElement(this.pCode).sendKeys(pin);
        return this;
    };
    continue = async () => {
        await this.driver.findElement(this.continueButton).click();
        return this;
    };
    finish = async () => {
        await this.driver.findElement(this.finishButton).click();
        return this;
    };
    backHome = async () => {
        await this.driver.findElement(this.backHomeButton).click();
        return this;
    };
    menu = async () => {
        await this.driver.findElement(this.menuOption).click();
        return this;
    };
    logOut = async () => {
        const element = await this.driver.findElement(this.logOutButton);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element), 1000);
        return element.click();
    };
    removeButton = async () => {
        const element1 = await this.driver.findElement(this.removebtn);
        await this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element1), 3000);
        return element1.click();
    };
    continushop = async () => {
        await this.driver.findElement(this.continueShopping).click();
        return this;
    };
    Totalamount = async () => {
        const element = await this.driver.findElement(this.total);
        const text = await element.getText();
        console.log(text);
    };
    item1 = async () => {
        const element = await this.driver.findElement(this.itemcost1);
        const text = await element.getText();
        const element1 = await this.driver.findElement(this.itemname1);
        const text1 = await element1.getText();
        console.log(text1, ":", text);
    };
    item2 = async () => {
        const element = await this.driver.findElement(this.itemcost2);
        const text = await element.getText();
        const element1 = await this.driver.findElement(this.itemname2);
        const text1 = await element1.getText();
        console.log(text1, ":", text);
    };
    title = async () => {
        const title = await hook_1.driver.getTitle();
        console.log(title);
    };
    close = async () => {
        await this.driver.close();
        return this;
    };
}
exports.loginPage = loginPage;
