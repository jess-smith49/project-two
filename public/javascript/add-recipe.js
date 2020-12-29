async function recipeFormHandler(event){
    event.preventDefault();

    const recipeName = document.querySelector('#newRecipeName').value;
    const recipeIngredients = document.querySelector('#newRecipeIngr').value;
    const recipeInstructions = document.quereySelector('newRecipeIns').value;

    const response = await fetch('/api/recipes', {
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

document.querySelector('#newRecipe').addEventListener('submit', recipeFormHandler);