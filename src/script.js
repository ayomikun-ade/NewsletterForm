const container = document.getElementById("main");
const left = document.getElementById("left");
const right = document.getElementById("right");

const userEmail = document.getElementById("user-email");
const invalidEmail = document.getElementById("invalid-email");
const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit-btn");

const confirmedMessage = document.getElementById("confirmed-message");
const dismissBtn = document.getElementById("dismiss-btn");

function formSuccess() {
  confirmedMessage.classList.remove("hidden");
  //   container.classList.remove("flex");
  //   container.classList.add("hidden");
  container.style.display = "none";
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    formSuccess();
    userEmail.innerText = email;
    emailInput.value = "";

    invalidEmail.classList.add("hidden");
  } else {
    invalidEmail.classList.remove("hidden");
    emailInput.classList.add("border-red-600");
  }
});

dismissBtn.addEventListener("click", () => {
  //   container.classList.add("flex");
  //   container.classList.remove("hidden");
  container.style.display = "flex";
  confirmedMessage.classList.addEventListener("hidden");
});
