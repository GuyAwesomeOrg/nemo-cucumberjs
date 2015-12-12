/**
 * Created by nikulkarni on 8/18/14.
 */

var debug = require('debug');
var log = debug('nemo-cucumberjs:log')

var WorldConstructor = function WorldConstructor() {
    //do other synchronous stuff here; Since cucumber 0.8.0 World constructor is synchronous
    this.appurl = 'https://www.paypal.com/signup/account#personalAccountSignUp';
    process.env["PATH"] += ":" + process.cwd() + "/test/functional/resources/chromedriver"
    log(this.appurl);
};
exports.World = WorldConstructor;