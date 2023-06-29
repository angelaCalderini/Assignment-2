(function () {
'use strict';

var shoppingList = [
  {
    name: "Cookie",
    quantity: "2"
  },
  {
    name: "Cake",
    quantity: "200"
  },
  {
    name: "Candies",
    quantity: "300"
  },
  {
    name: "Vegetable",
    quantity: "5"
  },
  {
    name: "Water",
    quantity: "5"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ToBuy = this;
  ToBuy.items=ShoppingListCheckOffService.getItems();
  ToBuy.bought = function (itemIndex) {
      ShoppingListCheckOffService.bought(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var AlreadyBough = this;
  AlreadyBough.items2 = ShoppingListCheckOffService.getItems2();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = shoppingList;
  var items2 = [];
  service.bought = function (itemIndex) {
    items2.push(items[itemIndex]);
    items.splice(itemIndex,1);

  };

  service.getItems = function () {
    return items;
  };

  service.getItems2 = function () {
      return items2;
  };

}

})();
