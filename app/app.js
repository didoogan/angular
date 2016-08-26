// 'use strict';
//
// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {

  $scope.name = 'Dima';
  $timeout(function () {
    $scope.name = 'Doogan'
  }, 3000)

  $scope.to_lower_case = function () {
    console.log('in to_lower func');
    return $filter('lowercase')($scope.your_name);
  }


}]);
