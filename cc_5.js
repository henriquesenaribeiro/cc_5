// Task 1: Customer Profile

let customer = {
    name: "Horacio Ribeiro",
    age: 36,
    email: "paudeoculos@usf.edu"
};
// Declared a customer 

console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

// Logged using template literals

// Task 2: Order Details

let order = {
    orderId: 003,
    totalAmount: 82,
    status: "Shipment in Process",
    displayOrder: function () {
        console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};
// Declared order details with this function


order.displayOrder();

// Display details provided

// Task 3: Shopping Cart

let cartItems = ["Doorbell Camera", "Smart Locks", "Sensors"];

cartItems.push("Glass break detector");
cartItems.pop();
cartItems.unshift("Outdoor Camera");
cartItems.shift();

console.log("Items in Cart:", cartItems);

// We set up a list of items in a shopping cart, then demonstrated adding and removing items using `push` and `pop` for the end of the list, as well as `unshift` and `shift` for the beginning.
