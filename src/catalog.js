const catalog = [];

/**
 * Appends an item to the shared in-memory catalog without validation or deduplication.
 * @returns The supplied item, retaining the same reference for objects.
 */
export function addItem(item) {
  catalog.push(item);
  return item;
}

/**
 * Finds an item by SKU in insertion order. Errors from reading an item's `sku`
 * propagate to the caller.
 * @returns The first stored item whose `sku` strictly equals the supplied SKU,
 * or `undefined` if none matches.
 * @throws {TypeError} If the lookup reaches a null or undefined catalog entry.
 */
export function findBySku(sku) {
  return catalog.find((item) => item.sku === sku);
}
