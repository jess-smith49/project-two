async function editListHandler(event) {
    event.preventDefault();
    const listName = document.querySelector('input[name="list-name"]').value;
    const listItems = document.querySelector('input[name="list-items"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const response = await fetch(`/api/lists/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            listName,
            listItems
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        document.location.replace('/api/lists');
    }
    else {
        alert(response.statusText);
    }
}
async function deleteListHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/lists/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/api/lists');
    } else {
      alert(response.statusText);
    }

    console.log('deleted')
  }
  
document.querySelector('#delete-list').addEventListener('click', deleteListHandler);
document.querySelector('#save-list').addEventListener('click', editListHandler)