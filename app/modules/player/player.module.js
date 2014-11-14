'use strict';


var serviceModule = require('../services/index'),

    Player = angular.module('app.player', ['ui.router', 'ui.bootstrap', 'app.service'])
    .controller('playerCtrl', ['$scope', '$rootScope', '$http', 'generateVideoId', require('./controllers/playerCtrl')])
    .config(require('./router/router'));

module.exports = Player;
