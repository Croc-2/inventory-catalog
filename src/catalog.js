const catalog = [];

export function addItem(item) {
  catalog.push(item);
  return item;
}

export function findBySku(sku) {
  return catalog.find((item) => item.sku === sku);
}
