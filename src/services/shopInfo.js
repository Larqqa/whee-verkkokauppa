import shopInfo from '../assets/mockProducts.json';

export const priceFormatter = new Intl.NumberFormat(
  shopInfo.language,
  {
    style: 'currency',
    currency: shopInfo.currency,
    minimumFractionDigits: 0
  });

export function formatPrice(price) {
  return priceFormatter.format(price)
}

export function getProducts() {
  return shopInfo.products;
}

export function getProductById(id) {
  return shopInfo.products.find(product => product.id === id);
}
