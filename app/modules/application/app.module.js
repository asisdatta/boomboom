'use strict';

require('../home/home.module');
require('../search/search.module');
require('../player/player.module');

var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'app.home', 'app.search', 'app.player'])
    .controller('playlistCtrl', require('./controllers/playlistCtrl'))
    .config(require('./router/router'));

module.exports = App;
