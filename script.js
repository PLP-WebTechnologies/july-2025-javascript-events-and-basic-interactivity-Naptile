// ===============================
// PART 1: Event Handling Examples
// ===============================
const clickMeBtn = document.getElementById("clickMeBtn");
const message = document.getElementById("message");

clickMeBtn.addEventListener("click", () => {
  message.textContent = "🎉 Button was clicked!";
});

// ===============================
// PART 2: Interactive Elements
// ===============================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// Collapsible FAQ
const faqToggles = document.querySelectorAll(".faq-toggle");
faqToggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// ===============================
// PART 3: Form Validation
// ===============================
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form submission for validation

  // Clear old errors
  document.querySelectorAll(".error").forEach((err) => (err.textContent = ""));
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters.";
    valid = false;
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email.";
    valid = false;
  }

  // Password validation (min 6 chars, 1 number)
  const password = document.getElementById("password").value.trim();
  const passRegex = /^(?=.*[0-9]).{6,}$/;
  if (!passRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be 6+ characters and include a number.";
    valid = false;
  }

  // If all valid
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "✅ Form submitted successfully!";
    signupForm.reset();
  }
});
