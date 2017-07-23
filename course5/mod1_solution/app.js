(function () {
'use strict';

angular.module('Mod1App', [])
.controller('Mod1AppController', Mod1AppController);

Mod1AppController.$inject = ['$scope', '$filter'];
function Mod1AppController($scope, $filter) {


  $scope.checkIfTooMuch = function () {

    var message;

    if($scope.list === undefined || $scope.list === "")
    {
          message = "Please enter data first";
    }
    else
    {
      var message_size = $scope.list.split(',').length;


      if ((message_size < 4) && (message_size > 0))
      {
        message = "Enjoy!";
      }
      else if(message_size == 0)
      {
        message = "Please enter data first";
      }
      else
      {
        message = "Too much!";
      }

    }

    $scope.message = message;
  };

}

})();
