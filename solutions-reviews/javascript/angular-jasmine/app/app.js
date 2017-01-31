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

  exampleModule.controller('LoginController', ['$http', function($http) {
    let vm = this
    vm.message = 'hi from angular'
    vm.getData = () => $http.get('http://localhost/bar')
        .then(function(request) {
          vm.barData = request.data;
        });
    }])

})()
