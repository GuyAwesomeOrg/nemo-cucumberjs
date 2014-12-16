
/*global describe:false, it:false, beforeEach:false, afterEach:false*/
'use strict';

var myHooks = function () {

    this.World = require('../support/world.js').World;
    this.Before(function (scenario, callback) {
        this.scenario = scenario;
        callback();
    });

    this.After(function (scenario, callback) {
        this.nemo.driver.quit().then(function () {
            callback();
        });
    });

    this.registerHandler('AfterFeatures', function (event, callback) { //runs after ALL features are executed
        callback();
    });

    this.registerHandler('BeforeFeatures', function (event, callback) { //runs before any scenario is executed
        callback();
    });
};
module.exports = myHooks;