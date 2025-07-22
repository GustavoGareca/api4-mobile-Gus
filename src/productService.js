import productsData from '../data/products.json' assert { type: "json" };

export function getProductList() {
  if (!productsData.products || productsData.products.length === 0) {
    return 'No hay productos disponibles';
  }

  return productsData.products.map(product => {
    return `${product.name} - ${product.description} - ${product.price} ${product.currency}`;
  });
}
