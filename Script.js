
  document.addEventListener('DOMContentLoaded', function() {
    const products = [
      { id: 1, name: 'Smartphone', description: 'Latest smartphone with advanced features.', price: 699.00 },
      { id: 2, name: 'Television', description: '4K Ultra HD Smart TV with stunning picture quality.', price: 699.00 },
      { id: 3, name: 'Laptop', description: 'High-performance laptop for work and gaming.', price: 999.00 },
      { id: 4, name: 'AC', description: 'Energy-efficient air conditioner for your home.', price: 1200.00 },
      { id: 5, name: 'Ipad', description: 'Powerful tablet for creativity and productivity.', price: 1000.00 },
      { id: 6, name: 'Piano', description: 'Digital piano with authentic sound and feel.', price: 1200.00 }
    ];

    // Initialize an empty cart
    let cart = [];
    let total = 0;

    // Function to add product to cart
    function addToCart(productId) {
      const product = products.find(p => p.id === parseInt(productId));
      if (!product) return;

      // Check if the product is already in the cart
      const existingProduct = cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
      } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
      }
      updateCart();
    }

    // Function to update the cart display and total price
    function updateCart() {
      const cartItemsContainer = document.querySelector('.cart-items');
      cartItemsContainer.innerHTML = ''; // Clear existing items
      total = 0; // Reset total

      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Create cart item element
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
        cartItemsContainer.appendChild(cartItem);
      });

      // Update total price display
      document.querySelector('.cart-total span').textContent = `Total: $${total.toFixed(2)}`;
    }

    // Add event listeners to buttons
    document.querySelectorAll('.add button').forEach(button => {
      button.addEventListener('click', (event) => {
        const productCart = event.target.closest('.product-cart');
        const productId = productCart.id; // Get the product ID from the product-cart element
        addToCart(productId); // Call addToCart with the product ID
      });
    });

    // Discard cart items
    document.querySelector('.discard button').addEventListener('click', () => {
      cart = []; // Clear the cart
      total = 0; // Reset total
      updateCart(); // Update the cart display
    });
  });

