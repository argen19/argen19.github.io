
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
