myApp.controller('favorite', ['$scope', '$http', function($scope, $http){
  $scope.favCount = 0;
  $scope.pets = [];

   $scope.updateFavCount = function() {
    $http.get('/favorites/')
        .then(function(response) {
      console.log(response);
      $scope.favCount = response.data.length;
      $scope.pets = response.data;
    });
  }

    $scope.updateFavCount();
}]);
