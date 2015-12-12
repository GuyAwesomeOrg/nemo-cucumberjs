/*global describe:false, it:false, beforeEach:false, afterEach:false*/
'use strict';

var Nemo = require('nemo');
var debug = require('debug');
var log = debug('nemo-cucumberjs:log');

var myHooks = function () {

  this.World = require('../support/world.js').World
  this.Before(function (scenario,callback) {
    var __dirname = process.cwd()+ "/test/functional";
    this.nemo = new Nemo(__dirname,function(err){
      if(err) {
        log("Error is", err);
        callback(err);
      }
      log("There is no error");
      callback();
    });
  });

  this.After(function (scenario,callback) {
    if (scenario.isFailed()) {
      console.log('Scenario failed');
    }
    this.nemo.driver.quit().then(callback);
  });

  this.registerHandler('AfterFeatures', function (event, callback) { //runs after ALL features are executed
    callback();
  });

  this.registerHandler('BeforeFeatures', function (event, callback) { //runs before any scenario is executed
    callback();
  });
};
module.exports = myHooks;