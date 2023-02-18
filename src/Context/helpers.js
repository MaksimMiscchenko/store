export const USERS_API = "http://localhost:8000/users";

export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export function calcSubPrice(product) {
  return +product.count * product.item.price;
}

export function calcTotalPrice(products) {
  return products.reduce((acc, cur) => {
    return (acc += cur.subPrice);
  }, 0);
}
