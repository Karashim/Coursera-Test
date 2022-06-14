(function () {

    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope']; //protects from minification
    function LunchCheckController ($scope){

        $scope.lunchItems = "";
        $scope.message = "Please enter data";
        $scope.checkIfTooMuch = function(){

            var items = $scope.lunchItems.split(",");
            if(items[0] == false ){
                $scope.message = "Please enter data first"
            }
            else if(items.length <= 3){
                $scope.message = "Enjoy!"
            }
            else if(items.length >= 4){
                $scope.message = "Too much!"
            }

        }//end checkIfTooMuch
        $scope.sayMessage = function(){
            return $scope.message;
        }//end sayMessage

    }

})();