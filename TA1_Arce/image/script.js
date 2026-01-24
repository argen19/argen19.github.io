document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("response").textContent =
    "Thank you for your message. This is a placeholder response.";
});