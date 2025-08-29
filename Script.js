const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest smartphone with advanced features.",
    price: 699.0,
  },
  {
    id: 2,
    name: "Laptop",
    description: "High-performance laptop for work and gaming.",
    price: 999.0,
  },
  {
    id: 3,
    name: "AC",
    description: "Energy-efficient air conditioner for your home.",
    price: 1200.0,
  },
  {
    id: 4,
     name: "Television",
    description: "4K Ultra HD Smart TV with stunning picture quality.",
    price: 699.0,
  },
  {
    id: 5,
    name: "Ipad",
    description: "Powerful tablet for creativity and productivity.",
    price: 1000.0,
  },
  {
    id: 6,
    name: "Piano",
    description: "Digital piano with authentic sound and feel.",
    price: 1200.0,
  },
];

let cart = [];
let total = 0;

window.addEventListener("DOMContentLoaded", () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCart();
  }
});

// Save cart to localStorage whenever it changes
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


function addToCart(productId) {
  const product = products.find((p) => p.id === parseInt(productId));
  if (!product) return;

  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }
  saveCartToLocalStorage();
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "";
let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.textContent = `${item.name} - ${item.price.toFixed(2)} * ${
      item.quantity
    } = ${itemTotal.toFixed(2)}`;
    cartItemsContainer.appendChild(cartItem);
  });

  document.querySelector(".cart-total").textContent = `Total: $${total.toFixed(2)}`;
}

document.querySelectorAll(".add").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productCart = event.target.closest(".product-cart");
    const productId = productCart.id;
    addToCart(productId);
  });
});

document.querySelector(".discard").addEventListener("click", () => {
  cart = [];
  total = 0;
  updateCart();
});
