(function(){
  'use strict';

  const exampleModule = angular.module('lasersExample', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'pages/login.html',
          controller: 'LoginController as login'
        })
    }])

  exampleModule.controller('LoginController', function() {
    this.message = 'hi from angular'
  })

})()
