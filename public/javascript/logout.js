function logout() {
    console.log("logout front end")
    fetch('api/users/logout', {
        method: 'post',
        headers: {'Content-Type': 'application/json'}
    })
    .then(function() {
        console.log('clicked ========')
        // document.location.replace('/');
    })
    .catch(err => console.log(err));
}

document.querySelector('#logout').addEventListener('click', logout);