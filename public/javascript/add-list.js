async function listFormHandler(event){
    event.preventDefault();

    const listName = document.querySelector('input[name="newListName"]').value;
    const listItems = document.querySelector('input[name="newListItems"]').value;

    const response = await fetch('/api/lists', {
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
        document.location.replace('/api/lists')
    }
    else{
        alert(response.statusText);
    }
}

document.querySelector('#addList').addEventListener('click', listFormHandler);

