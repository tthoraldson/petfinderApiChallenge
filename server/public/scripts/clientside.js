var myApp = angular.module('myApp', ["ngRoute"]);
angular.module('myApp.controllers', []);

console.log('Am I working?');

myApp.config(["$routeProvider", function($routeProvider) {
  $routeProvider.
    when("/home", {
      templateUrl: "/views/partials/home.html"
    }).
    when("/barnyard", {
      templateUrl: "/views/partials/barnyard.html",
      controller: "barnyard"
    }).
    when("/bird", {
      templateUrl: "/views/partials/bird.html",
      controller: "bird"
    }).
    when("/cat", {
      templateUrl: "/views/partials/cat.html",
      controller: "cat"
    }).
    when("/dog", {
      templateUrl: "/views/partials/dog.html",
      controller: "dog"
    }).
    when("/horse", {
      templateUrl: "/views/partials/horse.html",
      controller: "horse"
    }).
    when("/pig", {
      templateUrl: "/views/partials/pig.html",
      controller: "pig"
    }).
    when("/reptile", {
      templateUrl: "/views/partials/reptile.html",
      controller: "reptile"
    }).
    when("/smallfurry", {
      templateUrl: "/views/partials/smallfurry.html",
      controller: "smallfurry"
    }).
    otherwise({
      redirectTo: "/home"
    });
}]);
