(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

        toBuyList.buyItem = function(index) {
            console.log('index', index);
            try {
                ShoppingListCheckOffService.buyItem(index);
            } catch (error) {
                toBuyList.errorMessage = error.message;
            }
        };

        toBuyList.isEmpty = function() {
            if (toBuyList.itemsToBuy.length > 0) {
                return false;
            }
            return true;
        }

    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.itemsBought = ShoppingListCheckOffService.getItemsAlreadyBought();

        boughtList.isEmpty = function() {
            if (boughtList.itemsBought.length > 0) {
                return false;
            }
            return true;
        }

    }

    function ShoppingListCheckOffService() {
        var service = this;

        // Lists of items to buy
        var itemsToBuy = [{ name: "cookies", quantity: 10 },
            { name: "flat bread", quantity: 5 },
            { name: "chocolate", quantity: 2 },
            { name: "chocolate cookies", quantity: 20 },
            { name: "candies", quantity: 30 }
        ];
        var itemsAlreadyBought = [];

        service.buyItem = function(index) {
            itemsAlreadyBought.push(itemsToBuy[index]);
            itemsToBuy.splice(index, 1);
        };

        service.getItemsToBuy = function() {
            return itemsToBuy;
        };

        service.getItemsAlreadyBought = function() {
            return itemsAlreadyBought;
        };
    }
})();