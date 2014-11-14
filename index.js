window.name = "NG_DEFER_BOOTSTRAP!";

window._ = require('underscore');
window.$ = require('jquery');
window.lang = require('./app/lang/lang');

require('angular');
require('angular-ui-router');
require('angular-bootstrap');
var App = require('./app/modules/application/app.module');

angular.element().ready(function() {
    angular.resumeBootstrap([App['name']]);
});
