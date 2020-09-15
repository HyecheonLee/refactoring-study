export function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quality - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quality * order.itemPrice * 0.1, 100);
  return basePrice - quantityDiscount + shipping;
}