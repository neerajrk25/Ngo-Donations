angular.module("main",['main.controller','ngRoute', 'ui.bootstrap'])
.config(function($routeProvider){
    $routeProvider
    .when('/form',{
        controller: 'userController',
        templateUrl: 'views/form.html'
    })
    .otherwise({
        redirectTo: '/form'
    })
});