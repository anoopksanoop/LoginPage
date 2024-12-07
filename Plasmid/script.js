document.getElementById('validationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    validateForm();
  });
  
  function validateForm() {
    let isValid = true;
  
    // Get input values
    const name = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
    // Name Validation
    if (name.length < 5) {
      showError('nameError', 'Name must be at least 5 characters.');
      isValid = false;
    } else {
      hideError('nameError');
    }
  
    // Email Validation
    if (!email.includes('@') || !email.includes('.')) {
      showError('emailError', 'Enter a valid email address.');
      isValid = false;
    } else {
      hideError('emailError');
    }
  
    // Phone Validation
    if (phone.length !== 10 || phone === '123456789' || isNaN(phone)) {
      showError('phoneError', 'Enter a valid 10-digit phone number.');
      isValid = false;
    } else {
      hideError('phoneError');
    }
  
    // Password Validation
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === name.toLowerCase()) {
      showError('passwordError', 'Password must be at least 8 characters and not "password" or your name.');
      isValid = false;
    } else {
      hideError('passwordError');
    }
  
    // Confirm Password Validation
    if (password !== confirmPassword) {
      showError('confirmPasswordError', 'Passwords do not match.');
      isValid = false;
    } else {
      hideError('confirmPasswordError');
    }
  
    // Final Check
    if (isValid) {
      alert('Form Submitted Successfully!');
      document.getElementById('validationForm').reset();
    }
  }
  
  function showError(id, message) {
    const element = document.getElementById(id);
    element.textContent = message;
    element.style.display = 'block';
  }
  
  function hideError(id) {
    const element = document.getElementById(id);
    element.style.display = 'none';
  }
  