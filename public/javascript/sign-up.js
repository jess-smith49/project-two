const codeContainer = document.querySelector('.code-container');

let createGroupEvent = document.getElementById('create-group');
let joinGroupEvent = document.getElementById("join-group");

async function signUpHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();


    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }

    console.log('Successful Sign-up')
}

createGroupInput = function() {
    let insertCreateInput = `<label for="group-code"></label>
    <input type="text" class="form-input" name="group-code" id="group-input" placeholder="Create Group">`

    codeContainer.innerHTML = insertCreateInput;
}

joinGroupInput = function () {
    let insertJoinInput = `<label for="group-code">Enter your Group's 6 Digit Code</label>
    <input type="text" class="form-input" name="group-code" id="group-input" placeholder="Join Group">`

    codeContainer.innerHTML = insertJoinInput;

}

// createGroupEvent.onclick = function() {
//     createGroupInput();
// };


// async function groupCodeInsert(event) {
//     event.preventDefault();


//     if (username && password) {
//         const response = await fetch('/api/users/login', {
//             method: 'post',
//             body: JSON.stringify({
//                 username: username,
//                 password: password
//             }),
//             headers: { 'Content-Type': 'application/json' }
//         })
//             .then(function () {
//                 const response = fetch('/api/teams', {
//                     method: 'post',
//                     body: JSON.stringify({
//                         team_code: teamCode,
//                         user_id: req.session.user_id
//                     }),
//                     headers: { 'Content-Type': 'application/json' }
//                 });
//             })
//             if (response.ok) {
//                 console.log('Please')
//                 document.location.replace('/dashboard')
                
//             }
//             else {
//                 alert(response.statusText);
//             }

//         }
// };


joinGroupEvent.onclick = function () {
    joinGroupInput();
};
// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signUpHandler);