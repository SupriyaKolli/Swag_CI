import { Given, Then, When } from '@cucumber/cucumber';
import {loginPage} from '../page_objects/loginPage';



let loginpage = new loginPage();

        Given('User opens URL {string}', function (url:string)
         {
            loginpage = new loginPage();
            loginpage.open(url);
         });

         Given('User enters email as {string} and password as {string}', async function (string, string2)
         {
            await loginpage.username(string);
            await loginpage.password(string2);
         });

         Given('Click on Login button', async function ()
         {
            await loginpage.loginbutton();
         });

         Then('Click on Add to cart button', async function ()
         {
            await loginpage.addCart();
            await loginpage.shirtCart();
         });

         Then('Click on Cart logo', async function ()
         {
            await loginpage.cart();
         });

         Then('Click on Checkout button', async function ()
         {
           await loginpage.checkout();
         });

         Then('User enters Firstname as {string} and Lastname as {string} and zip as {string}', async function (value:string, value1:string, value2:string)
         {
            await loginpage.firstname(value);
            await loginpage.lastname(value1);
            await loginpage.pincode(value2);
         });

         Then('Click on Continue button', async function ()
         {
            await loginpage.continue();
         });

         Then('click on Finish button', async function ()
         {
            await loginpage.finish();
         });

         Then('Click on Back Home button', async function ()
         {
           await loginpage.backHome();
         });

         Then('Click on Menu', async function ()
         {
            await loginpage.menu();
         });

         Then('Click on LogOut Button', async function ()
         {
            await loginpage.logOut();
         });
         Then('Click on Remove button', async function ()
         {
            await loginpage.removeButton();
         });

         Then('Click on Continue shopping button', async function ()
         {
            await loginpage.continushop();
         });
         Then('check title of the page', async function ()
         {
            await loginpage.title();
         }
         );
         Then('User closes the browser', async function()
         {
            loginpage.close();
         });
         Then ('print Item total amount', async function()
         {
           await loginpage.Totalamount();
         }
         );
         Then ('print the amount of each item', async function()
         {
            await loginpage.item1();
            await loginpage.item2();
         });
