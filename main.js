// Mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});
// Prefill phone code based on country
const countryCodes = {
  US: "+1",
  UK: "+44",
  IN: "+91",
};
document.getElementById("country-select").addEventListener("change", (e) => {
  const codeInput = document.getElementById("phone-code");
  const country = e.target.value;
  codeInput.value = countryCodes[country] || "";
});

// Form validation
document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const error = document.getElementById("form-error");
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email)) {
      error.textContent = "Please enter a valid email address.";
      error.classList.remove("hidden");
      return;
    }

    error.classList.add("hidden");
  });

function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector(".dropdown");

  // Close all others
  document.querySelectorAll(".faq-btn").forEach((btn) => {
    const otherAnswer = btn.nextElementSibling;
    const otherIcon = btn.querySelector(".dropdown");

    if (btn !== button) {
      btn.classList.remove("border-gray-400");
      btn.classList.remove("border-b-4");
      btn.classList.add("border-gray-300");
      otherAnswer.classList.add("hidden");
      otherIcon.classList.remove("rotate-180");
    }
  });

  // Toggle current
  answer.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
  button.classList.toggle("border-gray-400");
  button.classList.toggle("border-b-4");
}
