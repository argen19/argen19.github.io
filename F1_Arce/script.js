document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let response = document.getElementById("response");

    if (name === "" || message === "") {
        response.textContent = "Please complete all required fields before submitting.";
        response.style.color = "red";
    } else {
        response.textContent = "Thank you for your inquiry, " + name + ". Our sales team will contact you shortly.";
        response.style.color = "green";
        this.reset();
    }
});
