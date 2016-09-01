myApp.controller('cat', ['$scope', '$http', function($scope, $http){
  $scope.header = 'Adoptable Cats';
  $scope.pet = {};

  var key = '8cfcf88ec4728c783f3e5497ea6c7afe';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomPet = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=cat';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

  $scope.addFavorite = function() {
    var animal = {
      name: $scope.animal.name.$t,
      photoURL: $scope.animal.media.photos.photo[2].$t,
      type: 'cat',
      description: $scope.animal.description.$t.substring(0,100)
    };

    console.log(animal);
    $http.post('/favorites', animal).then(function(response) {
      if(response.status == 201) {
        console.log('saved favorite');
        // updateFavCount();
      } else {
        console.log('error saving favorite');
      }
    });
  }
  $scope.getRandomPet();
}]);
