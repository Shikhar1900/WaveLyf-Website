let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    
    // Simple alert to simulate functionality
    alert("Item added to cart! (Demo: Payment processing is disabled)");
}