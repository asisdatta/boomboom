'use strict';
require('../services');
var Home = angular.module('app.home', ['ui.router', 'ui.bootstrap', 'app.service'])
    .controller('homeCtrl', require('./controllers/homeCtrl'))
    .filter('duration', require('./filters').duration)
    .config(require('./router/router'));

module.exports = Home;
