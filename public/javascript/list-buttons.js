const addContainer = document.getElementById("add-container");
const editContainer = document.getElementById('edit-container');
    let = editNameContainer = document.getElementById('edit-name');
    let = editItemContainer = document.getElementById('edit-item');


let addEvent = document.querySelector('#newList');
let editEvent = document.querySelector('#editList');



insertAddInput = function () {
    let addInput = `<div class="inputContainer">
            <label for="newListName">List Name</label>
            <input type="text" placeholder="Ex: Jim Bob's List" name="newListName" id="newListName" class="form-input" />
            <label for="newListItems">Item Name</label>
            <input type="text" placeholder="Ex: Hot Cheetos" name="newListItems" id="newListItems" class="form-input" />
            <button class="add-list-item" id="editList">Add Item to Your List</button>
            </div>`
    addContainer.innerHTML = addInput;
    console.log(addInput)
};

insertNameEditInput = function() {


    let editNameInput =  `<label for="editListName"> Edit List Name</label>
                        <input type="text" placeholder="Ex: Jim Bob's New List" name="editListName" id="editListName" class="form-input" />
                        <button class="edit-list-name" id="editListName">Edit List Name</button>`;
 

    editNameContainer.innerHTML = editNameInput;
   

}

insertItemEditInput = function() {
    let editItemInput = `<label for="editListItems">New List Item</label>
                         <input type="text" placeholder="Ex: Lime Hot Cheetos" name="newListItems" id="newListItems" class="form-input" />
                         <button class="edit-list-item" id="editListItem">Edit List Item</button>`;
    
    editItemContainer.innerHTML = editItemInput;
}

addEvent.onclick = function () {
    return insertAddInput();
};

editEvent.onclick = function () {
    document.getElementById("editList").style.display = "none";
    insertNameEditInput();
    insertItemEditInput();
    
};

document.querySelector('#newList').addEventListener('submit', insertAddInput);
document.querySelector('#editList').addEventListener('submit', insertNameEditInput);
