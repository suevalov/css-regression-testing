'use strict';

angular.module('webdrivercssAdminpanelApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'hljs'
])
.constant('API_HOST','localhost')
.constant('API_PORT',9000)
.config(function($routeProvider, $locationProvider, hljsServiceProvider) {

    $routeProvider.when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl',
        resolve: { repositories: 'ImageRepository' }
    }).when('/regression-tests/:id', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl',
        resolve: { repositories: 'ImageRepository' }
    }).otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

    hljsServiceProvider.setOptions({
        // replace tab with 4 spaces
        tabReplace: '    '
    });
});
