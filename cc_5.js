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

// Task 4: Price Adjustments

let prices = [499, 799, 899];
let discountedPrices = prices.map(price => price * 0.9);

console.log("Discounted Prices:", discountedPrices);

// Getting a discount of 10% of a given price

// Task 5: Product Availability

let inventory = [10, 0, 20, 10, 0];
let availableInventory = inventory.filter(quantity => quantity > 0);

console.log("Available Inventory:", availableInventory);

// Filtering out quantities that are 0 or less to display only in-stock items.

// Task 6: Revenue Calculation

let sales = [130, 110, 100, 125];
let totalRevenue = sales.reduce( (acc, sale) => acc + sale );

console.log("Total Revenue:", totalRevenue);

// Summing up sales to determine total revenue using the reduce and accumulate functions.

// Task 7: Customer Search

let customers = ["Henry", "James", "Fabi", "Jamal"];
let foundCustomer = customers.find(customer => customer === "Fabi");

console.log("Found Customer:", foundCustomer);

// Using the find function, I searched the array for a specific customer and returned the result.

// Task 8: Tax Calculation

function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

console.log(`Tax: $${calculateTax(777, 0.09)}`);

// Used a function to calculate tax and logged the result using a template literal.

// Task 9: Discount Application

function applyDiscount(price, discountRate) {
    return price - (price * discountRate);
};

console.log(`Discounted Price: $${applyDiscount(777, 0.18)}`);

// Created a function to apply a discount to reduce an item's price and logged the result using a template literal.
