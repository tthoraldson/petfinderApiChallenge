myApp.controller('barnyard', ['$scope', '$http', function($scope, $http){
  $scope.header = 'Adoptable Barnyard Animals';

  var key = '8cfcf88ec4728c783f3e5497ea6c7afe';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomPet = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=barnyard';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
        $scope.getBreeds();
      }
    )
  }
}]);
