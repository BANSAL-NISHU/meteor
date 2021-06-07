Package.describe({
  name: 'hot-module-replacement',
  version: '0.3.0-beta230.5',
  summary: 'Update code in development without reloading the page',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function (api) {
  api.use('modules');
  api.use('meteor');
  api.use('dev-error-overlay', { weak: true });
  api.imply('modules-runtime-hot@0.12.0');
  api.addFiles([
    './hot-api.js',
    './client.js'
  ], 'client');
  api.addFiles('./server.js', 'server');
});

Package.onTest(function (api) {
});
