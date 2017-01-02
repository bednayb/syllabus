'use strict';

var express = require('express');

var exampleApp = express();

exampleApp.get('/', function getApp(request, response) {
  response.send('hellobello');
});

exampleApp.post('/', function getApp(request, response) {
  response.send('postoltal');
});

exampleApp.listen(3000);
