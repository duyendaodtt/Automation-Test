const { request, settings } = require('pactum');
const { Before } = require('@cucumber/cucumber');

Before(() => {
  request.setBaseUrl('https://fakerestapi.azurewebsites.net/');
  settings.setReporterAutoRun(false);
});

