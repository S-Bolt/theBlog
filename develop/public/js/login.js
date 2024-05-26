document.addEventListener('DOMContentLoaded', () => {
//Login function
const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
    console.log('Login attempt:', { email, password }); // Debugging line
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            //sending user  to dashboard page
            document.location.replace('/dashboard');
        }else {
            console.error('Login failed:', response.statusText); // Debugging line
            alert('Login failed: Try again!');
        }
    }
};

//Signup functon
const signupHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ name, email, password}),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Signup Failed: Try again!');
        }
    }
};

//Event listeners for each function
document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('.signup-formm').addEventListener('submit', signupHandler);
});