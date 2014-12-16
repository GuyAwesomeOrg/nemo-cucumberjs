/**
 * Created by nikulkarni on 8/18/14.
 */

var Nemo = require('nemo'),
    plugins = require('../config/nemo-plugins'),
    config = {
        "view": ['paypalRegistration']
    };
process.env["PATH"] += ":"+process.cwd()+"/test/functional/resources/chrome_binary"
process.env.nemoData = JSON.stringify({
    targetBrowser: "firefox",
    targetServer: "localhost",
    serverProps: {"port": 4444},
    seleniumJar: "/usr/local/bin/selenium-server-standalone.jar",
    targetBaseUrl: "https://www.paypal.com",
    autoBaseDir:process.cwd() + "/" + "test/functional"
});

var WorldConstructor = function WorldConstructor(callback) {
    this.url = 'https://www.paypal.com/signup/account#personalAccountSignUp';
    var that = this;
    (new Nemo(plugins)).setup(config).then(function (cb_nemo) {
        that.nemo = cb_nemo;
        callback();
    })
};
exports.World = WorldConstructor;