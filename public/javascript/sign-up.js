async function signUpHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();


    if(username && email && password) {
        const response = await fetch ('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/dashboard');
        }
        else{
            alert(response.statusText);
        }
    }

    console.log('Successful Sign-up')
}

document.querySelector('.signup-form').addEventListener('submit', signUpHandler);