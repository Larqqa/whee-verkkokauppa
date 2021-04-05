import shopInfo from '../assets/mockProducts.json';

/**
 * Handlers for interacting with the shop data.
 *
 * These can be replaced with some backend API interactions
 * instead of the mock store
 */

export function getProducts() {
  return shopInfo.products;
}

export function getProductById(id) {
  return shopInfo.products.find(product => product.id === id);
}

export const priceFormatter = new Intl.NumberFormat(
  shopInfo.language,
  {
    style: 'currency',
    currency: shopInfo.currency,
    minimumFractionDigits: 0
  }
);

export function formatPrice(price) {
  return priceFormatter.format(price)
}
