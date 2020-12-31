async function loginFormHandler(event){
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers:{'Content-Type': 'application/json'}
        });

        if(response.ok){
            console.log('Successful login')
            document.location.replace('/dashboard')
            document.getElementById("logout-btn").classList.toggle('hide')

         
        }
        else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
