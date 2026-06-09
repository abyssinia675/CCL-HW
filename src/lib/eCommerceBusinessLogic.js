const users = [
  { name: "Alex", membershipTier: "gold", totalSpend: 1200, isVerified: true },
  {
    name: "Jordan",
    membershipTier: "silver",
    totalSpend: 450,
    isVerified: true,
  },
  { name: "Sam", membershipTier: "none", totalSpend: 80, isVerified: false },
  {
    name: "Taylor",
    membershipTier: "gold",
    totalSpend: 3200,
    isVerified: true,
  },
  {
    name: "Morgan",
    membershipTier: "silver",
    totalSpend: 290,
    isVerified: false,
  },
];

const cart = [
  { name: "Laptop", price: 999, quantity: 1, inStock: true },
  { name: "Mouse", price: 29, quantity: 2, inStock: true },
  { name: "Monitor", price: 349, quantity: 1, inStock: false },
  { name: "Keyboard", price: 79, quantity: 1, inStock: true },
];

export function getCheckoutCart(cart) {
  return cart.filter((item) => item.inStock);
}

function calculateTotal(user, eligibleCart) {
  const subtotal = eligibleCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (user.membershipTier === "gold") {
    return subtotal * 0.8; // 20% off
  } else if (user.membershipTier === "silver") {
    return subtotal * 0.9; // 10% off
  }

  return subtotal;
}

function getVerifiedUsers(users) {
  return users
    .filter((user) => user.isVerified)
    .map((user) => ({
      name: user.name,
      membershipTier: user.membershipTier,
    }));
}

const eligibleCart = getCheckoutCart(cart);

console.log("Eligible Cart:" + eligibleCart);

console.log("Alex's Total:" + calculateTotal(users[0], eligibleCart));

console.log("Verified Users:" + getVerifiedUsers(users));
