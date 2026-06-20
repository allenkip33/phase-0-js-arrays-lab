// Write your code here
const products = ["laptop", "phone", "headphone", "monitor"];
function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(products) {
  products.push(product);
}
addProduct("tablet");

function updateProductName(index, newName) {
  products[index] = newName;
}
updateProductName(1, "smartphone");
console.log(products);

function removeLastProduct() {
  products.pop();
}
removeLastProduct();
console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
