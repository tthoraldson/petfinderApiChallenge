myApp.controller('home', ['$scope', '$http', function($scope, $http){
  $scope.favCount = 0;

   $scope.updateFavCount = function() {
    $http.get('/favorites/')
        .then(function(response) {
      console.log(response);
      $scope.favCount = response.data.length;
    });
  }

    $scope.updateFavCount();

}]);
