var myApp = angular.module('myApp', ['ngRoute', 'angularMoment']);

//routes
myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
    .when('/home', {
        templateUrl: '/views/templates/home.html',
        controller: 'CalendarController as cc'
    })
})