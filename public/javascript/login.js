async function loginFormHandler(event){
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(email && password) {
        const response = await fetch(  {
            method: 'post',
            body: JSON.stringify({
                email,
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
}

document.querySelector().addEventListener('submit', loginFormHandler);
document.querySelector().addEventListener('submit', signUpHandler);