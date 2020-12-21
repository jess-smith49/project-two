const {response} = require("express");

async function listItemFormHandler(event){
    event.preventDefault();

    const listItems = document.querySelector().value;
    
    const response = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify({
            listItems
        }),

        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        document.location.replace()
    }
    else{
        alert(response.statusText);
    }
}

document.querySelector().addEventListener('submit', listItemFormHandler);