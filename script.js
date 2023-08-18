
// script.js
let cartItems = [];
let signedInUser = null;

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

function onSignIn(googleUser) {
    signedInUser = googleUser.getBasicProfile();
    console.log('ID: ' + signedInUser.getId());
    console.log('Name: ' + signedInUser.getName());
    console.log('Image URL: ' + signedInUser.getImageUrl());
    console.log('Email: ' + signedInUser.getEmail());
}

function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        console.log('User signed out.');
        signedInUser = null;
    });
}

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Automatically update cart content on page load
updateCartContent();
