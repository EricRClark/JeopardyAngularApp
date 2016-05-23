var angular = require('angular');
var angularRoute = require('angular-route');

angular
        .module('trebangular', ['ngRoute'])
        .config(function($routeProvider){

          $routeProvider
          .when('/',{
            templateUrl:'./templates/index.html',
            controller:"HomeController"
          })
          .when('/404',{
            template: '<h1>Nope</h1>',
            controller: ''
          })
          .otherwise({
            redirectTo: '/404'
          });
});

require('./controllers/app.controller');
require('./services/apiQuests.service');
require('./directive');
// require('./app.module')
