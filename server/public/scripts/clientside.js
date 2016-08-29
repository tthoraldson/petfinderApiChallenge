var myApp = angular.module('myApp', ["ngRoute"]);
angular.module('myApp.controllers', []);

console.log('Am I working?');

myApp.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/barnyard", {
      templateUrl: "/views/partials/barnyard.html",
      controller: "barnyard"
    }).
    when("/bird", {
      templateUrl: "/views/partials/bird.html",
      controller: "bird"
    }).
    when("/smallfurry", {
      templateUrl: "/views/partials/smallfurry.html",
      controller: "smallfurry"
    }).
    otherwise({
      redirectTo: "/barnyard"
    });
}]);
