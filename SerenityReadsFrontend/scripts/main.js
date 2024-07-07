// scripts/main.js

document.addEventListener("DOMContentLoaded", () => {
    // Example: Form validation for login and register forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            
            if (validateEmail(email) && validatePassword(password)) {
                alert('Login successful');
                window.location.href = 'home.html';
            } else {
                alert('Please enter valid email and password');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = registerForm.name.value;
            const email = registerForm.email.value;
            const password = registerForm.password.value;
            
            if (name && validateEmail(email) && validatePassword(password)) {
                alert('Registration successful');
                window.location.href = 'login.html';
            } else {
                alert('Please fill in all fields correctly');
            }
        });
    }

    // Example: Quantity update in the cart page
    const cartItems = document.querySelectorAll('.cart-item');

    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.quantity button:first-of-type');
        const plusBtn = item.querySelector('.quantity button:last-of-type');
        const quantityInput = item.querySelector('.quantity input');

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantityInput.value = quantity - 1;
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityInput.value);
            quantityInput.value = quantity + 1;
        });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }
});
document.getElementById('add-to-cart')?.addEventListener('click', function() {
    alert('Book added to cart!');
    // Here you can add the logic to add the book to the cart
});

// Cart Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('cart.html')) {
        console.log('Cart page loaded');
        // Add cart functionality here
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('bookId');
    const title = params.get('title');
    const author = params.get('author');
    const price = params.get('price');
    const image = params.get('image');

    if (bookId && title && author && price && image) {
        document.getElementById('book-cover').src = `C:\\Users\\USER\\Desktop\\SerenityReadsFrontend\\Images\\${image}`;
        document.getElementById('book-title').textContent = title;
        document.getElementById('book-author').textContent = `by ${author}`;
        document.getElementById('book-price').textContent = `LKR ${price}`;
    }
});

// Store cart items in local storage
function addToCart(book) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Book added to cart!');
}

// Extract query parameters from URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        bookId: params.get('bookId'),
        title: params.get('title'),
        author: params.get('author'),
        price: params.get('price'),
        image: params.get('image')
    };
}

// Add event listener to "Add to Cart" button on book details page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('book.html')) {
        const book = getQueryParams();
        document.getElementById('book-title').textContent = book.title;
        document.getElementById('book-author').textContent = book.author;
        document.getElementById('book-price').textContent = `LKR ${book.price}`;
        document.getElementById('book-image').src = `C:/Users/USER/Desktop/SerenityReadsFrontend/Images/${book.image}`;
        
        document.getElementById('add-to-cart').addEventListener('click', () => {
            addToCart(book);
        });
    }

    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
});

// Display cart items on the cart page
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-container');
    
    cartContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="C:/Users/USER/Desktop/SerenityReadsFrontend/Images/${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>by ${item.author}</p>
                    <p>LKR ${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <input type="number" value="1" min="1">
                </div>
                <div class="cart-item-remove">
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    });
}

// Remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}
// Store cart items in local storage
function addToCart(book) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Book added to cart!');
}

// Extract query parameters from URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        bookId: params.get('bookId'),
        title: params.get('title'),
        author: params.get('author'),
        price: params.get('price'),
        image: params.get('image')
    };
}

// Add event listener to "Add to Cart" button on book details page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('book.html')) {
        const book = getQueryParams();
        document.getElementById('book-title').textContent = book.title;
        document.getElementById('book-author').textContent = book.author;
        document.getElementById('book-price').textContent = `LKR ${book.price}`;
        document.getElementById('book-image').src = `C:/Users/USER/Desktop/SerenityReadsFrontend/Images/${book.image}`;
        
        document.getElementById('add-to-cart').addEventListener('click', () => {
            addToCart(book);
        });
    }

    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
});

// Display cart items on the cart page
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-container');
    
    cartContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="C:/Users/USER/Desktop/SerenityReadsFrontend/Images/${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>by ${item.author}</p>
                    <p>LKR ${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <input type="number" value="1" min="1" onchange="updateQuantity(${index}, this.value)">
                </div>
                <div class="cart-item-remove">
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
    cartContainer.innerHTML += `
        <div class="cart-total">
            <h3>Total: LKR ${totalAmount.toFixed(2)}</h3>
            <a href="checkout.html" class="checkout-button">Checkout</a>
        </div>
    `;
}

// Update quantity of items in the cart
function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Store cart items in local storage
function addToCart(book) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Book added to cart!');
}

// Extract query parameters from URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        bookId: params.get('bookId'),
        title: params.get('title'),
        author: params.get('author'),
        price: params.get('price'),
        image: params.get('image')
    };
}

// Add event listener to "Add to Cart" button on book details page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('book.html')) {
        const book = getQueryParams();
        document.getElementById('book-title').textContent = book.title;
        document.getElementById('book-author').textContent = book.author;
        document.getElementById('book-price').textContent = `LKR ${book.price}`;
        document.getElementById('book-image').src = `C:/Users/USER/Desktop/SerenityReadsFrontend/Images/${book.image}`;
        
        document.getElementById('add-to-cart').addEventListener('click', () => {
            addToCart(book);
        });
    }

    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }

    if (window.location.pathname.includes('checkout.html')) {
        displayCheckoutSummary();
    }
});

// Display cart items on the cart page
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-container');
    
    cartContainer.innerHTML = '';
    
    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="C:/Users/USER/Desktop/SerenityReadsFrontend/Images/${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>by ${item.author}</p>
                    <p>LKR ${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <input type="number" value="1" min="1" onchange="updateQuantity(${index}, this.value)">
                </div>
                <div class="cart-item-remove">
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
    cartContainer.innerHTML += `
        <div class="cart-total">
            <h3>Total: LKR ${totalAmount.toFixed(2)}</h3>
            <a href="checkout.html" class="checkout-button">Checkout</a>
        </div>
    `;
}

// Update quantity of items in the cart
function updateQuantity(index, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Display checkout summary on the checkout page
function displayCheckoutSummary() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsContainer = document.getElementById('order-items');
    
    orderItemsContainer.innerHTML = '';
    
    let totalAmount = 0;
    
    cart.forEach((item) => {
        const itemTotal = parseFloat(item.price) * (item.quantity || 1);
        totalAmount += itemTotal;
        orderItemsContainer.innerHTML += `
            <div>
                <span>${item.title} (x${item.quantity || 1})</span>
                <span>LKR ${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });
    
    document.getElementById('total-amount').textContent = `LKR ${totalAmount.toFixed(2)}`;
}

// Submit checkout form
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'order-confirmation.html';
});

// Function to fetch all books and display them on the home page
async function fetchBooks() {
    const response = await fetch('/api/books');
    const books = await response.json();
    const bookList = document.querySelector('.book-list');
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <img src="images/${book.image}" alt="Book Cover">
            <p>${book.title}</p>
            <p>Rs. ${book.price}</p>
            <a href="book.html?bookId=${book.id}" class="view-details">View Details</a>
        `;
        bookList.appendChild(bookDiv);
    });
}

// Function to fetch a single book's details and display them on the book details page
async function fetchBookDetails(bookId) {
    const response = await fetch(`/api/books/${bookId}`);
    const book = await response.json();
    document.getElementById('book-image').src = `images/${book.image}`;
    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-author').innerText = book.author;
    document.getElementById('book-price').innerText = `Rs. ${book.price}`;
}

// Function to add a book to the cart
async function addToCart(book) {
    await fetch('/api/books/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    });
}

// Function to handle adding to cart from the book details page
document.getElementById('add-to-cart').addEventListener('click', async () => {
    const bookId = new URLSearchParams(window.location.search).get('bookId');
    const response = await fetch(`/api/books/${bookId}`);
    const book = await response.json();
    await addToCart(book);
});

// Fetch books on home page load
if (document.querySelector('.book-list')) {
    fetchBooks();
}

// Fetch book details on book details page load
if (document.getElementById('book-image')) {
    const bookId = new URLSearchParams(window.location.search).get('bookId');
    fetchBookDetails(bookId);
}
