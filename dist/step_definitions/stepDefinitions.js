"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const loginPage_1 = require("../page_objects/loginPage");
let loginpage = new loginPage_1.loginPage();
(0, cucumber_1.Given)('User opens URL {string}', function (url) {
    loginpage = new loginPage_1.loginPage();
    loginpage.open(url);
});
(0, cucumber_1.Given)('User enters email as {string} and password as {string}', async function (string, string2) {
    await loginpage.username(string);
    await loginpage.password(string2);
});
(0, cucumber_1.Given)('Click on Login button', async function () {
    await loginpage.loginbutton();
});
(0, cucumber_1.Then)('Click on Add to cart button', async function () {
    await loginpage.addCart();
    await loginpage.shirtCart();
});
(0, cucumber_1.Then)('Click on Cart logo', async function () {
    await loginpage.cart();
});
(0, cucumber_1.Then)('Click on Checkout button', async function () {
    await loginpage.checkout();
});
(0, cucumber_1.Then)('User enters Firstname as {string} and Lastname as {string} and zip as {string}', async function (value, value1, value2) {
    await loginpage.firstname(value);
    await loginpage.lastname(value1);
    await loginpage.pincode(value2);
});
(0, cucumber_1.Then)('Click on Continue button', async function () {
    await loginpage.continue();
});
(0, cucumber_1.Then)('click on Finish button', async function () {
    await loginpage.finish();
});
(0, cucumber_1.Then)('Click on Back Home button', async function () {
    await loginpage.backHome();
});
(0, cucumber_1.Then)('Click on Menu', async function () {
    await loginpage.menu();
});
(0, cucumber_1.Then)('Click on LogOut Button', async function () {
    await loginpage.logOut();
});
(0, cucumber_1.Then)('Click on Remove button', async function () {
    await loginpage.removeButton();
});
(0, cucumber_1.Then)('Click on Continue shopping button', async function () {
    await loginpage.continushop();
});
(0, cucumber_1.Then)('check title of the page', async function () {
    await loginpage.title();
});
(0, cucumber_1.Then)('User closes the browser', async function () {
    loginpage.close();
});
(0, cucumber_1.Then)('print Item total amount', async function () {
    await loginpage.Totalamount();
});
(0, cucumber_1.Then)('print the amount of each item', async function () {
    await loginpage.item1();
    await loginpage.item2();
});
