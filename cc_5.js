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
