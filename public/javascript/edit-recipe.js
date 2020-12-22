async function editRecipeHandler(event) {
    event.preventDefault();

        const recipeName = document.querySelector('#editRecipeName').value.trim()
        const recipeIns = document.querySelector('#editRecipeIns').value.trim()
        const recipeIngr = document.querySelector('#editRecipeIngr').value.trim()

    const response = await fetch('/api/recipe', {
        method: 'PUT',
        body: JSON.stringify({
            recipeName,
            recipeIns,
            recipeIngr
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

document.querySelector('#edit-recipe').addEventListener('submit', editRecipeHandler)