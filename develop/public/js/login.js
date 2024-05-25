//login function
const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (email && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password}),
            headers: {'Content-Type': 'application/json'},
        });

        if (response.ok) {
            //sending user  to dashboard page
            document.location.replace('/dashboard');
        }else {
            alert('Login failed: Try again!');
        }
    }
};

//signup functon
const signupHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#signup-name')
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#singup-password').value.trim();


}