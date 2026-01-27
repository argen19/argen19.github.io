/*CONTACT*/
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let message = document.getElementById("message").value;
        let response = document.getElementById("response");

        if (name === "" || message === "") {
            response.textContent = "Please complete all required fields before submitting.";
            response.style.color = "red";
        } else {
            response.textContent =
                "Thank you for your inquiry, " + name + ". Our sales team will contact you shortly.";
            response.style.color = "green";
            this.reset();
        }
    });
}

/*LOGIN*/
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login successful (placeholder)");
        window.location.href = "profile.html";
    });
}

/*SIGNUP*/
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Account created successfully (placeholder)");
        window.location.href = "login.html";
    });
}


/*CART*/
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

const cartItemsDiv = document.getElementById("cartItems");
const totalPriceEl = document.getElementById("totalPrice");

if (cartItemsDiv && totalPriceEl) {
    let total = 0;

    cartItemsDiv.innerHTML = cart.map(item => {
        total += item?.price || 0;   // OPTIONAL CHAINING ✅
        return `<p>${item.name} - ₱${item.price.toLocaleString()}</p>`;
    }).join("");

    totalPriceEl.textContent = "Total: ₱" + total.toLocaleString();
}

/*PAYMENT*/
const paymentForm = document.getElementById("paymentForm");

if (paymentForm) {
    paymentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = "confirmation.html";
    });
}

/*TRANSACTION*/
const receiptDiv = document.getElementById("receipt");

if (receiptDiv) {
    let receiptHTML = "<h3>E-Receipt</h3>";
    cart.forEach(item => {
        receiptHTML += `<p>${item.name} - ₱${item.price.toLocaleString()}</p>`;
    });
    receiptDiv.innerHTML = receiptHTML;
    localStorage.clear();
}