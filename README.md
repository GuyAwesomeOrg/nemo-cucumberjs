# nemo-cucumberjs

sample project demonstrating use of [cucumber.js][1] with [nemo][2]

# Pre-requisite

Install cucumber globally

```shell
npm install -g cucumber
```
# setup
Make sure the SELENIUM_JAR is setup correctly. Download selenium stand alone server from [here][4]. 
As of this edit 2.42.2 version did not work for firefox, so I would suggest 2.42.1 unless anything higher than 2.42.2 is
available.

Create a symbolic lunk

``` shell
ln -s /Users/yourname/path/to/selenium-server-standalone-2.42.1.jar /usr/local/bin/selenium-server-standalone.jar
```
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
World is a constructor function with utility properties, destined to be used in step definitions. It can be found under 
`test/functional/support/world.js`. `Nemo` object is initialized here in such a way that the plugin configuration, views
etc are available in tests. All helper methods, variables that you want to expose to your tests should be here in 
world.js

Step definitions is test implementation behind the english feature defined above. It can be found in `test/functional/stepdefs/`

# How to run tests
Before running the tests, make sure to run,

``` shell
npm install
```

Cucumber.js includes a binary file to execute the features. To just run a feature file

``` shell
cucumber.js test/functional/features/paypalreg.feature
```
This will output something like,

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
cucumber.js test/functional/features/paypalreg.feature --require test/functional/step_definitions/ --format=pretty
```
You could also wrap this as a grunt task using task runners like [grunt-cucumberjs][5]

[1]: https://github.com/cucumber/cucumber-js "cucumber.js"
[2]: https://github.com/paypal/nemo "nemo"
[3]: https://github.com/cucumber/cucumber/wiki/Gherkin "Gherkin"
[4]: http://selenium-release.storage.googleapis.com/index.html "here"
[5]: https://github.com/mavdi/grunt-cucumberjs "grunt-cucumberjs"