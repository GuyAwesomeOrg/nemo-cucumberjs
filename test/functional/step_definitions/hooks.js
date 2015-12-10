/*global describe:false, it:false, beforeEach:false, afterEach:false*/
'use strict';

var myHooks = function () {

  this.World = require('../support/world.js').World;
  this.Before(function (scenario, callback) {
    process.env["PATH"] += ":" + process.cwd() + "/test/functional/resources/chromedriver"
    callback();
  });

  this.After(function (scenario, callback) {
    if (scenario.isFailed()) {
      console.log('Scenario failed');
    }
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