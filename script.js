document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            alert(`Thank you for purchasing ${productName}!`);
        });
    });
});
