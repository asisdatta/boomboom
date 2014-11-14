'use strict';
var fs = require('fs');

module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
    window.console.log('Starting app');
    $stateProvider
        .state('app', {
            template: fs.readFileSync(__dirname + '/../templates/menu.html'),
            controller: 'playlistCtrl'
        });

    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get('$state');
        $state.go('app.home');
    });

};
