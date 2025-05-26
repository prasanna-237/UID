document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting

    // Clear previous error messages
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('ageError').textContent = '';

    // Fetch input values
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let age = document.getElementById('age').value.trim();

    let isValid = true;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate phone (must be 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
        isValid = false;
    }

    // Validate age (must be a positive number)
    if (age === '' || isNaN(age) || age <= 0) {
        document.getElementById('ageError').textContent = 'Please enter a valid age.';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});
