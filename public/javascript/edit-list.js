async function editListHandler(event) {
    event.preventDefault();

    const listName = document.querySelector().value.trim()
    const listItems = document.querySelector().value.trim()

    const response = await fetch('/api/list', {
        method: 'PUT',
        body: JSON.stringify({
            listName,
            listItems
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        document.location.replace();
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector().addEventListener('submit', editListHandler)