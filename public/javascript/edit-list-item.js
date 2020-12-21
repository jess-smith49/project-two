async function editItemHandler(event) {
    event.preventDefault();

    const listItems = document.querySelector().value.trim();
    

    const response = await fetch('/api/list/items', {
        method: 'PUT',
        body: JSON.stringify({
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

document.querySelector().addEventListener('submit', editItemHandler)