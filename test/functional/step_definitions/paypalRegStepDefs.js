/**
 * Created by nikulkarni on 8/20/14.
 */
var paypalRegistrationStepDef = function () {

    this.World = require("../support/world.js").World,
        paypalreg = require('../lib/paypalreg');
    this.Given(/^I launch PayPal registration page$/, function (callback) {
        this.nemo.driver.get(this.nemo.data.targetBaseUrl);
        callback();
    });

    this.When(/^I enter the details$/, function (callback) {
        paypalreg(this.nemo).enterDetailsToCreatePayPalAccount();
        this.nemo.driver.sleep(4000);
        callback();
    });

    this.Then(/^I am able to create an account$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });
}
module.exports = paypalRegistrationStepDef;