(function () {
'use strict';

angular.module('Mod1App', [])
.controller('Mod1AppController', Mod1AppController);

Mod1AppController.$inject = ['$scope', '$filter'];
function Mod1AppController($scope, $filter) {
//  $scope.name = "Yaakov";
//  $scope.stateOfBeing = "hungry";

  $scope.checkIfTooMuch = function () {
    //return "Yaakov likes to eat healthy snacks at night!";
    console.log("Too much!!!");
    $scope.list = "was clicked";
  };
/*
  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
*/
}

})();
