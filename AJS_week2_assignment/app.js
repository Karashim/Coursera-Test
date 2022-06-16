(function(){
'use strict'

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

    var showList = this;
    showList.items = ShoppingListCheckOffService.getToBuyItems();
    showList.removeItem = function(itemIndex){

        ShoppingListCheckOffService.removeItem(itemIndex);

    };

};
AlreadyBoughtController.$inject['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

    var showList = this;
    showList.items = ShoppingListCheckOffService.getBoughtItems();

};

function ShoppingListCheckOffService(){

    var service = this; //expose to the global

    var toBuyShoppingList=[

        {name: "Milk",
        quantity: "2"},
    
        {name: "Donuts",
        quantity: "200"},
    
        {name: "Cookies",
        quantity: "300"},
    
        {name: "Chocolate",
        quantity: "2"},
    
        {name: "Apples",
        quantity: "5"}
    
    
    ];

    var boughtShoppingList = [];

        service.removeItem = function(itemIndex){

            boughtShoppingList.push(toBuyShoppingList[itemIndex]);
            toBuyShoppingList.splice(itemIndex, 1);
            console.log(boughtShoppingList);
        };

        service.getToBuyItems = function(){
            return toBuyShoppingList;

        };

        service.getBoughtItems = function(){

            return boughtShoppingList;

        };


};

})();