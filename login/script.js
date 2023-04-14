const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const user_name = document.getElementById('username');
    const password = document.getElementById('password');
    if ( user_name.value === "" || password.value === ""  ) {
        if ( user_name.value === "" ) {
            user_name.style.borderColor = "red"
        }
        if ( password.value === "" ) {
            password.style.borderColor = "red"
        }
    } else {
        const user = localStorage.getItem('username', user_name.value);
        const pass = localStorage.getItem('password', password.value);
        if ( user === user_name.value && password.value === pass ) {
            location.pathname = "/home/home.html"
        } else {
            console.log('ran')
            const error = document.getElementsByClassName('error');
            error.innerHTML = "Invalid Credentials"
        }
    }
})