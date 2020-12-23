async function deleteListHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/list/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace();
    } else {
      alert(response.statusText);
    }

    console.log('delete')
  }
  
  document.querySelector('#deleteList').addEventListener('click', deleteListHandler);