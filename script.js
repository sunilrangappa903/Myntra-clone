const products = [
    { id: 1, name: "Men's Casual Shirt", price: 1299, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Women's Summer Dress", price: 1999, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Kids T-Shirt", price: 499, image: "https://via.placeholder.com/200" },
    { id: 4, name: "Running Shoes", price: 2499, image: "https://via.placeholder.com/200" }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productList.appendChild(productCard);
    });
}

function addToCart(productId) {
    alert('Product ' + productId + ' added to cart!');
}

document.addEventListener('DOMContentLoaded', displayProducts);
