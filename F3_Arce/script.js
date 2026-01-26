
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

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Login successful (placeholder)");
        window.location.href = "profile.html";
    });
}

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Account created successfully (placeholder)");
        window.location.href = "login.html";
    });
}


//payment
const paymentForm = document.getElementById("paymentForm");
 
paymentForm?.addEventListener("submit", function (e) {
    e.preventDefault();
 
    const paymentMethod = document.getElementById("paymentMethod")?.value;
    const deliveryOption = document.getElementById("deliveryOption")?.value;
    const address = document.getElementById("address")?.value;
 
    if (!paymentMethod || !deliveryOption || !address) {
        alert("Please complete all required fields.");
        return;
    }
 
    const transaction = {
        paymentMethod,
        deliveryOption,
        address,
        date: new Date().toLocaleString()
    };
 
    // Placeholder cart data (frontend-only)
    const cart = [
        { name: "Performance Sports Car", price: 3200000 },
        { name: "Luxury Sedan", price: 2800000 }
    ];
 
    localStorage.setItem("transaction", JSON.stringify(transaction));
    localStorage.setItem("cart", JSON.stringify(cart));
 
    window.location.href = "confirmation.html";
});
 
 
// CONFIRMATION PAGE
const receipt = document.getElementById("receipt");
 
const transaction = JSON.parse(localStorage.getItem("transaction") || "{}");
const cart = JSON.parse(localStorage.getItem("cart") || "[]");
 
if (receipt) {
    let total = 0;
    let itemsHTML = "";
 
    cart?.forEach(item => {
        total += item?.price || 0;
        itemsHTML += `
            <p>${item?.name ?? "Unknown Item"} — ₱${item?.price?.toLocaleString() ?? "0"}</p>
        `;
    });
 
    receipt.innerHTML = `
        <h3>Purchased Vehicles</h3>
        ${itemsHTML}
        <hr>
        <p><strong>Payment Method:</strong> ${transaction?.paymentMethod ?? "N/A"}</p>
        <p><strong>Delivery Option:</strong> ${transaction?.deliveryOption ?? "N/A"}</p>
        <p><strong>Delivery Address:</strong> ${transaction?.address ?? "N/A"}</p>
        <p><strong>Date:</strong> ${transaction?.date ?? "N/A"}</p>
        <h3>Total: ₱${total.toLocaleString()}</h3>
    `;
}