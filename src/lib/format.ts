export function currency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

export function discount(mrp: number, price: number) {
  return Math.round(((mrp - price) / mrp) * 100);
}
