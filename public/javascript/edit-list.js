async function editListHandler(event) {
    event.preventDefault();

    const response = await fetch(, {
        method: 'PUT',
        body: JSON.stringify({
            
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