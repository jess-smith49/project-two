const editContainer = document.getElementById('edit-container');


let addEvent = document.querySelector('#newList');

insertAddInput = function () {
    const addContainer = document.getElementById("add-container");
    let addInput = `<div class="inputContainer">
            <label for="newListName">Item Name</label>
            <input type="text" placeholder="Ex: Jim Bob's List" name="newListName" id="newListName" class="form-input" />
            <label for="newListItems">Item Name</label>
            <input type="text" placeholder="Ex: Hot Cheetos" name="newListItems" id="newListItems" class="form-input" />
            <button class="add-list-item" id="newList">Add Item to Your List</button>
            </div>`
    addContainer.innerHTML = addInput;
    console.log(addInput)
};

addEvent.onclick = function () {
    return insertAddInput();
}


document.querySelector('#newList').addEventListener('submit', insertAddInput);
