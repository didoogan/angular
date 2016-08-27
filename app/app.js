
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider

      .when('/', {
        templateUrl: 'templates/first.html',
        controller: 'mainController'
      })

      .when('/second', {
        templateUrl: 'templates/second.html',
        controller: 'secondController'
      })
});
myApp.controller('mainController', ['$scope', '$timeout', '$filter', '$log', '$location',
  function($scope, $timeout, $filter, $log, $location) {

  $scope.name = 'Dima';
  $timeout(function () {
    $scope.name = 'Doogan'
  }, 3000);

  $scope.to_lower_case = function () {
    console.log('in to_lower func');
    return $filter('lowercase')($scope.your_name);
  };
  $scope.characters = 5;
  $scope.rules = [
    {name: "Must be less than 5 characters"},
    {name: "Must be super staff"},
    {name: "Must be coll"}
  ];
  $scope.clickMe = function() {
    alert('Click me');
  };
  $log.info($location.path());

}]);


myApp.controller('secondController', ['$scope', '$timeout', '$filter', '$log', '$location',
  function($scope, $timeout, $filter, $log, $location) {

  $scope.name = 'Dima';
  $timeout(function () {
    $scope.name = 'Doogan'
  }, 3000);

  $scope.to_lower_case = function () {
    console.log('in to_lower func');
    return $filter('lowercase')($scope.your_name);
  };
  $scope.characters = 5;
  $scope.rules = [
    {name: "Must be less than 5 characters"},
    {name: "Must be super staff"},
    {name: "Must be coll"}
  ];
  $scope.clickMe = function() {
    alert('Click me');
  };
  $log.info($location.path());

}]);



window.addEventListener('hashchange', function() {
    if(window.location.hash == '#/bookmark/1') {
      console.log('Page 1 is cool!');
    }

    if(window.location.hash == '#/bookmark/2') {
      console.log('Page 2 is awesome!');
    }

    if(window.location.hash == '#/bookmark/3') {
      console.log('I like Angular!');
    }
  });















