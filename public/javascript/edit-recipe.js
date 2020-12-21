async function editRecipeHandler(event) {
    event.preventDefault();

        const recipeName = document.querySelector().value.trim()
        const recipeIns = document.querySelector().value.trim()
        const recipeIngr = document.querySelector().value.trim()

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

document.querySelector().addEventListener('submit', editRecipeHandler)