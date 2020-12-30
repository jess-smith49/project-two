async function editFormHandler(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="recipe-name"]').value;
    const ingredients = document.querySelector('input[name="recipe-ingredients"]').value;
    const instructions = document.querySelector('input[name="recipe-instructions"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/recipes/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            name,
            ingredients,
            instructions,
          }),
          
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.replace('/api/recipes')
        } else {
          alert(response.statusText);
        }
        console.log("save clicked")
}
  
async function deleteRecipeHandler(event) {
  event.preventDefault();
    
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
      ];
      const response = await fetch(`/api/recipes/${id}`, {
      method: 'DELETE'
      });
          
      if (response.ok) {
        document.location.replace('/api/recipes');
      } else {
        alert(response.statusText);
    }
      console.log('button clicked');
}
   
document.querySelector('#save-recipe').addEventListener('click', editFormHandler);
document.querySelector("#delete-recipe").addEventListener('click', deleteRecipeHandler);