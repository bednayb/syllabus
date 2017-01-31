(function(){
  'use strict';

  const exampleModule = angular.module('lasersExample', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'pages/login.html',
          controller: 'mainController'
        })
    }])

  exampleModule.controller('mainController', ['$scope', function($scope) {
    $scope.message = 'hi from angular'
  }])

})()
