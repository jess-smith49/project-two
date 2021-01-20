async function loginFormHandler(event){
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const teamCode = document.querySelector('#code').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username: username,
                password: password,
                // team_code: teamCode
            }),
            headers:{'Content-Type': 'application/json'}
        });

        if(response.ok){
            if (teamCode) {
                console.log(teamCode)
            //     // function () {
                    const response = fetch('/api/teams/addMember/:team_code', {
                        method: 'post',
                        body: JSON.stringify({
                            team_code: teamCode,
                            // user_id: req.session.user_id
                        }),
                        headers: { 'Content-Type': 'application/json' }
                    });
                   console.log('Team member added')
            // document.location.replace('/dashboard')
        }
        else {
            alert(response.statusText);
        }
    }
    }
};
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
