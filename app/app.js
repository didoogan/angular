 // python -m SimpleHTTPServer  -   for running through http://localhost:8000
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider

      .when('/first', {
        templateUrl: 'templ/1.html',
        controller: 'mainController'
      })

      .when('/second', {
        templateUrl: 'templ/2.html',
        controller: 'secondController'
      })
});

myApp.service('myService', function() {
    var self = this;
    this.name = 'diDoogan';
    this.namelength = function() {
        return self.name.length;
    };
});

myApp.controller('mainController', ['$scope', '$routeParams', 'myService', '$log',
  function($scope, $routeParams, myService, $log) {
    $scope.name = myService.name;
    $scope.$watch('name', function() {
        myService.name = $scope.name;
    });
    $scope.data = {
        link: "http//:supersite.com",
        number: 1,
        string: "Just about ..."
    };
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };

}]);


myApp.controller('secondController', ['$scope', '$routeParams', 'myService',
  function($scope, $routeParams, myService) {
    $scope.name = myService.name;
    $scope.$watch('name', function() {
        myService.name = $scope.name;
    });
    $scope.name = myService.name;
    // $scope. var = $routeParams.var || 1;

}]);


myApp.directive('superTag', function() {
    return {
        restrict: "ECM",
        scope: {
            link: "@",
            number: "@",
            string: "@"
        },
        // , replace: true
        // scope: {
        //     doogan: "="
        // },
        templateUrl: "directives/supertag.html"
    }
}) ;














