let cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
    updateCartContent();
}

function updateCartContent() {
    const cartSection = document.getElementById('cart');
    const cartList = cartSection.querySelector('.cart-list');

    if (cartItems.length === 0) {
        cartList.innerHTML = '<p>Your cart is currently empty.</p>';
    } else {
        const itemsHTML = cartItems.map(item => `<li>${item}</li>`).join('');
        cartList.innerHTML = `<ul>${itemsHTML}</ul>`;
    }
}

function signInWithGoogle() {
    // Your Google sign-in implementation here
}

