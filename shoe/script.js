document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target;
        const item = {
            name: product.dataset.name,
            price: product.dataset.price,
            img: product.dataset.img
        };

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        alert(`${item.name} added to cart.`);
    });
});

// Handle buy button click (open login page)
document.querySelectorAll('.buy').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target;
        const item = {
            name: product.dataset.name,
            price: product.dataset.price,
            img: product.dataset.img
        };

        // Store product details in localStorage for use in the checkout process
        localStorage.setItem('productToBuy', JSON.stringify(item));
        window.location.href = "sign-up.html"; // Redirect to login page
    });
});
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const cartContainer = document.getElementById("cart-items");

// Display cart items
function displayCart() {
    cartContainer.innerHTML = "";
    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cartItems.forEach(item => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}" width="50px" />
                <p>${item.name}</p>
                <p>$${item.price}</p>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
}


