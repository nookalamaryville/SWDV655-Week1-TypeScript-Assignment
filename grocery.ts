class Grocery {  
    name: string;
    quantity: number;
    isAvailable: boolean;

    constructor(name: string, quantity: number, isAvailable: boolean) {
        this.name = name;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
    }
    getGrocery()
    {

    }
}

// create Employee class object
const grocery_milk = new Grocery("Milk", 1, true);
const grocery_eggs = new Grocery("Eggs", 5, true);
const grocery_strawberry = new Grocery("Strawberry", 1, true);
const grocery_oranges = new Grocery("Oranges", 12, true);
const grocery_bread = new Grocery("Oranges", 2, false);
let groceries:Grocery[] = [];
groceries.push(grocery_milk);
groceries.push(grocery_eggs);
groceries.push(grocery_strawberry);
groceries.push(grocery_oranges);
const tableid=  document.getElementById('grocery-items').getElementsByTagName('tbody')[0];
let newRow;
groceries.forEach(item=>{ 
    newRow=tableid.insertRow();
  // newRow = "<td>New row text</td><td>New row 2nd cell</td>"; <-- won't work
  newRow.innerHTML = `<td>${item.name}</td><td>${item.quantity}</td><td>${item.isAvailable?"Yes":"No"}</td>`;
})


