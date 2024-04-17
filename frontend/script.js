// Add an event listener to execute JavaScript code after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
    // Log a message to the console when the page is loaded
    console.log('Page loaded.');
    // Add event listeners for "Add to Cart" buttons
    var addToCartButtons = document.querySelectorAll('.product1 button, .product2 button');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Handle adding the product to the cart
            console.log('Product added to cart.');
        });
    });
});
