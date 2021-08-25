Package.describe({
  name: 'janmp:sdui-rolechecks',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'quality of life wrappers for role checks, adding pseudo roles any and logged-in',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.3.2');
  api.use('coffeescript');
  api.use('ecmascript');
  api.use('alanning:roles');
  api.mainModule('sdui-rolechecks.js');
});

Package.onTest(function(api) {
  api.use('coffeescript');
  api.use('ecmascript');
  api.use('tinytest');
  api.use('alanning:roles');
  api.use('sdui-rolechecks');
  api.mainModule('sdui-rolechecks-tests.js');
});
