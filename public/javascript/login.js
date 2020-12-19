async function loginFormHandler(event){
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(username && password) {
        const response = await fetch(  {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers:{'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/dashboard');
        }
        else{
            alert(response.statusText);
        }
    }

    console.log('Successful Login')
};

async function signUpHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#sign-username').value.trim();
    const email = document.querySelector('#sign-email').value.trim();
    const password = document.querySelector('#sign-password').value.trim();


    if(username && email && password) {
        const response = await fetch ('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.location.replace('/dashboard/');
        }
        else{
            alert(response.statusText);
        }
    }

    console.log('Successful Sign-up')
}

document.querySelector('#login-btn').addEventListener('submit', loginFormHandler);
// document.querySelector('#signup-btn').addEventListener('submit', signUpHandler);