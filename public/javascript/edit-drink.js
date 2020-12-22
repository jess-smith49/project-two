async function editDrinkHandler(event) {
    event.preventDefault();

    const drinkName = document.querySelector('#editDrinkName').value.trim();
    const drinkIns = document.querySelector('#editDrinkIns').value.trim();
    const drinkIngr = document.querySelector('#editDrinkIngr').value.trim();

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

document.querySelector('#edit-drink').addEventListener('submit', editDrinkHandler)