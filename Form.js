const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirmation");
confirmPassword.addEventListener("blur", () => {
  if (password.value === confirmPassword.value) {
    confirmPassword.style.borderColor = "green";
    console.log("ok inside");
  } else {
    confirmPassword.style.borderColor = "red";
    console.log("not ok outside");
  }
});
