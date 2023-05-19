function createProduct(name, price, countryofOrigin) {
    const product = {}

    product.name = name;
    product.price = price;
    product.countryofOrigin = countryofOrigin;

    return product;
}

function getProductList() {

    const p1 = createProduct("T-shirt", 75, "France");
    const p2 = createProduct("Jeans", 100, "Nepal");
    const p3 = createProduct("US-polo", 99, "America");

    const productList = [p1, p2, p3];
    return productList;

    
}

module.exports = getProductList;
