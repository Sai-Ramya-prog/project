function validateMobile() {
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message");

  const regex = /^[6-9]\d{9}$/;

  if (mobile === "") {
    message.textContent = "Mobile number is required!";
    message.style.color = "red";
  } else if (!regex.test(mobile)) {
    message.textContent = "Invalid mobile number. Please enter a 10-digit valid number starting with 6-9.";
    message.style.color = "red";
  } else {
    message.textContent = "Valid mobile number!";
    message.style.color = "green";
  }
}
