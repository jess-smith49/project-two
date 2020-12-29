const { response } = require("express");

async function listFormHandler(event){
    event.preventDefault();

    const listName = document.querySelector('#newListName').value;
    const listItems = document.querySelector('#newListItems').value;

    const response = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify({
            listName,
            listItems
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

document.querySelector('#newList').addEventListener('submit', listFormHandler);

