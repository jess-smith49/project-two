async function drinkFormHandler(event){
    event.preventDefault();

    const drinkName = document.querySelector('input[name="newDrinkName"]').value;
    const drinkIngredients = document.querySelector('input[name="newDrinkIngr"]').value;
    const drinkInstructions = document.querySelector('input[name="newDrinkIns"]').value;

    const response = await fetch('/api/drinks', {
        method: 'POST',
        body: JSON.stringify({
            drinkName,
            drinkIngredients,
            drinkInstructions
        }),
        
        headers: {
            'Content-Type' : 'application/json'
        }
    });

    if(response.ok){
        document.location.replace('/api/drinks')
    }
    else{
        alert(response.statusText);
    }
}

document.querySelector('#addDrink').addEventListener('click', drinkFormHandler);