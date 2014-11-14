var fs = require('fs');

module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.player', {
            views: {
                'body': {
                    template: fs.readFileSync(__dirname + '/../templates/player.html'),
                    controller: 'playerCtrl'
                }
            }
        });
}
