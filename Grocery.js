var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, isAvailable) {
        this.name = name;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
    }
    Grocery.prototype.getGrocery = function () {
    };
    return Grocery;
}());
// create Employee class object
var grocery_milk = new Grocery("Milk", 1, true);
var grocery_eggs = new Grocery("Eggs", 5, true);
var grocery_strawberry = new Grocery("Strawberry", 1, true);
var grocery_oranges = new Grocery("Oranges", 12, true);
var grocery_bread = new Grocery("Oranges", 2, false);
var groceries = [];
groceries.push(grocery_milk);
groceries.push(grocery_eggs);
groceries.push(grocery_strawberry);
groceries.push(grocery_oranges);
var tableid = document.getElementById('grocery-items').getElementsByTagName('tbody')[0];
var newRow;
groceries.forEach(function (item) {
    newRow = tableid.insertRow();
    // newRow = "<td>New row text</td><td>New row 2nd cell</td>"; <-- won't work
    newRow.innerHTML = "<td>" + item.name + "</td><td>" + item.quantity + "</td><td>" + (item.isAvailable ? "Yes" : "No") + "</td>";
});
