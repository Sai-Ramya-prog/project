function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('websiteError').textContent = '';
  document.getElementById('messageError').textContent = '';

  // Get form values
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let website = document.getElementById('website').value.trim();
  let message = document.getElementById('message').value.trim();

  // Validate Name
  if (name === '') {
    document.getElementById('nameError').textContent = 'This field is required';
    isValid = false;
  }

  // Validate Email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'This field is required';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'A valid email address is required';
    isValid = false;
  }

  // Validate Website
  let urlRegex = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w\-.]*)*\/?$/;
  if (website === '') {
    document.getElementById('websiteError').textContent = 'This field is required';
    isValid = false;
  } else if (!urlRegex.test(website)) {
    document.getElementById('websiteError').textContent = 'A valid url is required';
    isValid = false;
  }

  // Validate Message
  if (message === '') {
    document.getElementById('messageError').textContent = 'This field is required';
    isValid = false;
  }

  return isValid;
}
