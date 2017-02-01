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
    vm.isLoggedIn = false
    vm.loginData = null
    vm.postLogin = () => $http.post('/lobab/login')
        .then(function(request) {
          vm.isLoggedIn = true
          vm.loginData = request.data
        });
    }])

})()
