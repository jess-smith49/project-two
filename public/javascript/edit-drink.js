async function editDrinkHandler(event) {
    event.preventDefault();

    const drinkName = document.querySelector().value.trim();
    const drinkIns = document.querySelector().value.trim();
    const drinkIngr = document.querySelector().value.trim();

    const response = await fetch('/api/drink', {
        method: 'PUT',
        body: JSON.stringify({
            drinkName,
            drinkIns,
            drinkIngr
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

document.querySelector().addEventListener('submit', editDrinkHandler)