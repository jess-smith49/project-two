const addContainer = document.getElementById("add-container");
const editContainer = document.getElementById('edit-container');


let addEvent = document.querySelector('#newList');

insertAddInput = function()  {
let addInput = 
`
    <label for="newListName">Item Name</label>
    <input type="text" placeholder="Ex: Jim Bob's List" name="newListName" id="newListName" class="form-input" />
    <label for="newListItems">Item Name</label>
    <input type="text" placeholder="Ex: Hot Cheetos" name="newListItems" id="newListItems" class="form-input" />
`
    addContainer.append(addInput)
    console.log(addInput)
};

addEvent.onclick = function() {
        return insertAddInput();
}


document.querySelector('#newList').addEventListener('submit', insertAddInput);
