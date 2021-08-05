// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by sdui-rolechecks.js.
import { name as packageName } from "meteor/sdui-rolechecks";

// Write your tests here!
// Here is an example.
Tinytest.add('sdui-rolechecks - example', function (test) {
  test.equal(packageName, "sdui-rolechecks");
});
