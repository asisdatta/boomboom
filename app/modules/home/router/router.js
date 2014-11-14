'use strict';
var fs = require('fs');

module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.home', {
            url: '/home',
            views: {
                'body': {
                    template: fs.readFileSync(__dirname + '/../templates/home.html'),
                    controller: 'homeCtrl'
                }
            }
        });
}
