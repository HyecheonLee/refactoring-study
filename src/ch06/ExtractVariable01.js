export function price(order) {
  return order.quantity * order.itemPrice - Math.max(0, order.quality - 500)
      * order.itemPrice * 0.05 + Math.min(order.quality * order.itemPrice * 0.1,
          100);
}