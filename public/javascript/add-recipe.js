async function recipeFormHandler(event){
    event.preventDefault();

    const recipeName = document.querySelector('input[name="newRecipeName"]').value;
    const recipeIngredients = document.querySelector('input[name="newRecipeIngr"]').value;
    const recipeInstructions = document.querySelector('input[name="newRecipeIns"]').value;
    
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
        document.location.replace('/api/recipes')
    }
    else{
        alert(response.statusText);
    }
}

document.querySelector('#addRecipe').addEventListener('click', recipeFormHandler);