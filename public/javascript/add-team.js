const { response } = require("express");

async function newTeamFormHandler(event){
    event.preventDefault();

    const team = document.querySelector().value;
    

    const response = await fetch('/api/team/new-code', {
        method: 'POST',
        body: JSON.stringify({
            team
        }),
        
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    if(response.ok){
        document.location.replace()
    }
    else{
        alert(response.statusText);
    }
}

document.querySelector().addEventListener('submit', newTeamFormHandler);