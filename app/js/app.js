angular.module('main',['ngRoute', 'ui.bootstrap'])
.config(function($routeProvider){
    $routeProvider
    .when('/form',{
        templateUrl: 'views/form.html',
        controller: 'userController'
    })
    .otherwise({
        redirectTo: '/form'
    })
});