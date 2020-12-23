const { response } = require("express");

async function drinkFormHandler(event){
    event.preventDefault();

    const drinkName = document.querySelector('#newDrinkName').value;
    const drinkIngredients = document.querySelector('#newDrinkIngr').value;
    const drinkInstructions = document.quereySelector('#newDrinkIns').value;

    const response = await fetch('/api/drink', {
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
        document.location.replace()
    }
    else{
        alert(response.statusText);
    }
}

document.querySelector('#newDrink').addEventListener('submit', drinkFormHandler);