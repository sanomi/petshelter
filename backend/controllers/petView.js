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