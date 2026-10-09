export function findBySku(items, sku) {
  return items.find((item) => item.sku === sku);
}
