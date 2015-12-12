# nemo-cucumberjs

sample project demonstrating use of [cucumber.js][1] with [nemo][2]

# Optional Steps

- Install cucumber globally. Please make sure to install cucumber>=0.8.0

```shell
npm install -g cucumber
```

- This example runs on chrome and already configured to run on OSX. If you are on windows, make sure to add `chromedriver.exe` in your path.

# Overview

Features are written with the [Gherkin][3] syntax. For example in this project you will find, 

``` gherkin
# functional/test/features/paypalreg.feature
Feature: In order to use PayPal as payment method
  As a user
  I need a feature to register a PayPal account
  Scenario:
    Given I launch PayPal registration page
    When I enter the details
    Then I am able to create an account
```
World is a constructor function with utility properties, destined to be used in step definitions. It can be found under `test/functional/support/world.js`. `Nemo`  is initialized [hooks](test/functional/step_definitions/hooks.js#L13-L19) in such a way that the plugin configuration, views etc are available in tests. All helper methods, variables that you want to expose to your tests should be here in world.js

Step definitions is test implementation behind the english feature defined above. It can be found in [step_definitions](test/functional/step_definitions/paypalRegStepDefs.js)

# How to run tests
Before running the tests, make sure to run,

``` shell
npm install
```

Cucumber.js includes a binary file to execute the features. To just run a feature file

``` shell
DEBUG=nemo* cucumber.js test/functional/features/paypalreg.feature
```

If you haven't installed cucumber globally, then you could use local cucumber installed under `node_modules/.bin/cucumber.js`

``` shell
DEBUG=nemo* node_modules/.bin/cucumber.js cucumber.js test/functional/features/paypalreg.feature
```
All nemo modules use awesome [debug](https://github.com/visionmedia/debug) library for logging, if you use `DEBUG=nemo*`
flag with your cucumber command, it will nicely output things happening behind scenes.

Running `paypalreg.feature` like above  will output something like,

``` javascript
1 scenario (1 undefined)
3 steps (3 undefined)
You can implement step definitions for undefined steps with these snippets:
this.Given(/^I launch PayPal registration page$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});
this.When(/^I enter the details$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});
this.Then(/^I am able to create an account$/, function (callback) {
  // Write code here that turns the phrase above into concrete actions
  callback.pending();
});
```
To run features with corresponding step definitions, run this

``` shell
DEBUG=nemo* cucumber.js test/functional/features/paypalreg.feature --require test/functional/step_definitions/ --format=pretty
```
or

``` shell
DEBUG=nemo* node_modules/.bin/cucumber.js test/functional/features/paypalreg.feature --require test/functional/step_definitions/ --format=pretty
```

You could also wrap this as a grunt task using task runners like [grunt-cucumberjs][5]



[1]: https://github.com/cucumber/cucumber-js "cucumber.js"
[2]: https://github.com/paypal/nemo "nemo"
[3]: https://github.com/cucumber/cucumber/wiki/Gherkin "Gherkin"
[4]: http://selenium-release.storage.googleapis.com/index.html "here"
[5]: https://github.com/mavdi/grunt-cucumberjs "grunt-cucumberjs"
