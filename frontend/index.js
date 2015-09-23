'use strict';

let petPalace = angular.module('petPalace', ['ui.router'])

petPalace.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

    $stateProvider
    .state("home", {
      url: '/',
      templateUrl : "pages/home.html",
      controller: "userController"
    })
    .state('viewPets', {
      url: '/viewPets',
      templateUrl : 'pages/view.html',
      controller  : 'petViewController'
    })
    .state('abandonPet', {
      url: '/abandonPet',
      templateUrl : 'pages/abandon.html',
      controller  : 'abandonController'
    })
});

petPalace.controller('petViewController', function($scope, addPet) {
	let parent = $scope.parent
  addPet.read()
	.then(function(res) {
		$scope.animals = res.data
	}).catch(function(e){
		console.log(e)
	});
	$scope.showProfile = animal => {
		$scope.info = animal;
		$scope.list = true;
    $scope.parent = true;
	}
  $scope.toggle = () => {
  $scope.list = false;
  $scope.parent = false;
  }
})

petPalace.controller('abandonController', function($scope, $http, addPet){
	$scope.abandon = addPet.abandon;
})

petPalace.controller('userController', function($scope, $http){
  $scope.login = user => {
    $http.post('http://localhost:3000/users', user)
  }
  localStorage
})

petPalace.factory('addPet', function($http) {
	let addPet = function() {};
	addPet.read = function() {
		return $http.get('http://localhost:3000/pets')
	};
  addPet.abandon = (pet) => {
    $http.post('http://localhost:3000/pets', pet)
  }
	return addPet;
})