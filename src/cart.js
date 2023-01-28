let label = document.getElementById("label");
let shoppingCart = document.getElementById("shoping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  let sumOfItems = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  cartIcon.innerHTML = sumOfItems;
};
calculation();

let generateCartItems = () => {};
