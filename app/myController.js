angular.module('myApp')
.controller('myController',['$scope', function($scope){
  $scope.name= "My First Angular App";
  $scope.version = "v1.0.1";
  $scope.author = "Created by <Johan Rodin>";
  $scope.release ="Released on <May 2nd 2017>";
  $scope.message ="This app is <a demo of angular on Bluemix>";
}]);
