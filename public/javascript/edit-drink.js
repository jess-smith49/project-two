async function editDrinkHandler(event) {
    event.preventDefault();

    const drinkName = document.querySelector('input[name="drink-name"]').value.trim();
    const drinkIngr = document.querySelector('input[name="drink-instructions"]').value.trim();
    const drinkIns = document.querySelector('input[name="drink-ingredients"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const response = await fetch(`/api/drinks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            drinkName,
            drinkIngr,
            drinkIns
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        document.location.replace('/api/drinks');
    }
    else {
        alert(response.statusText);
    }
}
async function deleteDrinkHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/drinks/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/api/drinks');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('#delete-drink').addEventListener('click', deleteDrinkHandler);
document.querySelector('#save-drink').addEventListener('click', editDrinkHandler)