import { WebDriver, By,until } from 'selenium-webdriver';
import { AbstractPageObject } from './AbstractPageObject';
import { driver } from '../support/hook';

export class loginPage extends AbstractPageObject
{
private userName = By.id("user-name");
private passWord=By.id("password");
private loginButton = By.id("login-button");
private addToCart = By.name("add-to-cart-sauce-labs-backpack");
private addshirttoCart = By.name("add-to-cart-sauce-labs-bolt-t-shirt");
private cartLogo = By.xpath("//*[@id='shopping_cart_container']/a");
private checkoutButton = By.id("checkout");
private fName = By.id("first-name");
private lName = By.id("last-name");
private pCode = By.id("postal-code");
private continueButton = By.id("continue");
private finishButton = By.id("finish");
private backHomeButton = By.id("back-to-products");
private menuOption = By.id("react-burger-menu-btn");
private logOutButton = By.id("logout_sidebar_link");
private removebtn = By.xpath("//button[@class='btn btn_secondary btn_small cart_button' and @id='remove-sauce-labs-backpack']");
private continueShopping = By.id("continue-shopping");
private total = By.xpath("//div[@class='summary_subtotal_label']");
private itemcost1 = By.xpath("//*[@id='inventory_container']/div/div[1]/div[2]/div[2]/div");
private itemcost2 = By.xpath("//*[@id='inventory_container']/div/div[3]/div[2]/div[2]/div");
private itemname1 = By.id("item_4_title_link");
private itemname2 = By.id("item_1_title_link");

constructor() {
         super(driver);
     }

open = (url:string) =>
{
    this.driver.get(url);
}
username = async(name:string)=>
{
    await this.driver.findElement(this.userName).sendKeys(name);
    return this;
}
password = async(pwd:string) =>
{
    await this.driver.findElement(this.passWord).sendKeys(pwd);
    return this;
}
loginbutton = async() =>
{
    await this.driver.findElement(this.loginButton).click();
    return this;
}
addCart = async() =>
{
     await this.driver.findElement(this.addToCart).click();
     return this;
}
shirtCart = async()=>
{
    await this.driver.findElement(this.addshirttoCart).click();
    return this;
}
cart = async()=>
{
     await this.driver.findElement(this.cartLogo).click();
     return this;
}
checkout = async() =>
{
     await this.driver.findElement(this.checkoutButton).click();
     return this;
}
firstname = async(fname1:string) =>
{
     await this.driver.findElement(this.fName).sendKeys(fname1);
     return this;
}
lastname = async(lname1:string) =>
{
     await this.driver.findElement(this.lName).sendKeys(lname1);
     return this;
}
pincode = async(pin:string) =>
{
     await this.driver.findElement(this.pCode).sendKeys(pin);
     return this;
}
continue = async() =>
{
     await this.driver.findElement(this.continueButton).click();
     return this;
}
finish = async()=>
{
      await this.driver.findElement(this.finishButton).click();
     return this;
}
backHome = async() =>
{
      await this.driver.findElement(this.backHomeButton).click();
     return this;
}
menu = async() =>
{
      await this.driver.findElement(this.menuOption).click();
     return this;
}
logOut = async() =>
{
      const element = await this.driver.findElement(this.logOutButton);
     await this.driver.wait(until.elementIsVisible(element), 1000);
     return element.click();
}
removeButton = async () =>
 {
    const element1 = await this.driver.findElement(this.removebtn);
    await this.driver.wait(until.elementIsVisible(element1), 3000);
    return element1.click();
 }

 continushop = async () =>
 {
    await this.driver.findElement(this.continueShopping).click();
    return this;
 }
 Totalamount = async () =>
 {
        const element = await this.driver.findElement(this.total);
        const text = await element.getText();
        console.log(text);
 }
 item1 = async () =>
 {
    const element = await this.driver.findElement(this.itemcost1);
    const text = await element.getText();
    const element1 = await this.driver.findElement(this.itemname1);
    const text1 = await element1.getText();
     console.log(text1, ":", text);
 }
  item2 = async () =>
  {
     const element = await this.driver.findElement(this.itemcost2);
     const text = await element.getText();
     const element1 = await this.driver.findElement(this.itemname2);
          const text1 = await element1.getText();
           console.log(text1, ":", text);
  }
 title = async () =>
 {
    const title = await driver.getTitle();
    console.log(title);
 }
 close = async () =>
 {
    await this.driver.close();
    return this;
 }
}