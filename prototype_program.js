/*Create a prototype for a Product object with properties like 
name, price, and quantity. 
Add a method to like product prototype to calculate the total value.
*/
function Product(name,price,quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.calculateTotalValye = function(){
    return this.price*this.quantity;
}

const product1 = new Product("Widget",10,5);
const totalValue1 = product1.
calculateTotalValye();

console.log(`Total Value of ${product1.name}:$${totalValue1}`);
console.log(Product.prototype);
console.log(product1);