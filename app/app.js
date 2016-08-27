
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider

      .when('/first', {
        templateUrl: '../templates/first.html',
        controller: 'mainController'
      })

      .when('/second', {
        templateUrl: '../templates/second.html',
        controller: 'secondController'
      })
});
myApp.controller('mainController', ['$scope',
  function($scope) {


}]);


myApp.controller('secondController', ['$scope',
  function($scope) {


}]);














