const { response } = require("express");

async function recipeFormHandler(event){
    event.preventDefault();

    const recipeName = document.querySelector().value;
    const recipeIngredients = document.querySelector().value;
    const recipeInstructions = document.quereySelector().value;

    const response = await fetch('/api/recipe', {
        method: 'POST',
        body: JSON.stringify({
            recipeName,
            recipeIngredients,
            recipeInstructions
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

document.querySelector().addEventListener('submit', recipeFormHandler);