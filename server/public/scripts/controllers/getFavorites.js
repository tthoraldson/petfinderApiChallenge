myApp.controller('favorites', ['$scope', '$http', function($scope, $http) {
  $scope.favCount = 0;
  $scope.pet = {};
  $scope.animalType = '';
  $scope.favCount = 0;

  $scope.addFavorite = function() {
    var favorite = {
      name: $scope.pet.name.$t,
      photoURL: ''
    };

    var photos = $scope.pet.media.photos;
    if(photos != undefined) {
      favorite.image = photos.photo[1].$t;
    }

    console.log('new favorite: ', favorite);

    // post to server
    $http.post('/favorites', favorite).then(function(response) {
      if(response.status == 201) {
        console.log('saved favorite');
        updateFavCount();
      } else {
        console.log('error saving favorite');
      }
    });
  }

  function updateFavCount() {
    $http.get('/favorites/').then(function(response) {
      console.log(response);
      $scope.favCount = response.data.count;
    });
  }

}]);
