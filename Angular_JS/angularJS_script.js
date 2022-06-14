(function (){
    //This will protect us from making simple mistakes.
    'use strict';

    //module takes the name of the application, then a list of dependencies
    //in the form of an array.
angular.module("myFirstApp", [])

//How to define the view model of our view being HTML
//Takes the name of the controller and a function that defines
//the finctionality of the controller.
//$scope helps us share data b/t our viewmodel and view.
.controller("myFirstController", function($scope) {
$scope.name="Ian";
$scope.sayHello = function(){
    return "Hello Coursera!"
}

//For the Name Calculator
$scope.calcName = "";
$scope.totalValue = 0;
$scope.displayNumeric = function(){
     //get the total value
    var totalNameValue = calculateNumericForString($scope.calcName);
    $scope.totalValue = totalNameValue;
};
function calculateNumericForString(string){

    var totalStringValue = 0;
    for(var i = 0; i<string.length; i++){
        totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;

}

    // $scope.name2 = "Ian";
    // $scope.upper = function(){
    //     var upCase = $filter('uppercase');
    //     $scope.name2 = upCase($scope.name2);
    // }



});


})();
