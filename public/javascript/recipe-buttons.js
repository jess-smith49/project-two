const addContainer = document.getElementById("add-container");
const editContainer = document.getElementById('edit-container');
    let = editNameContainer = document.getElementById('edit-name');
    let = editItemContainer = document.getElementById('edit-item');
    let = editInstContainer = document.getElementById('edit-inst');


let addEvent = document.querySelector('#newRecipe');
let editEvent = document.querySelector('#editRecipe');



insertAddInput = function () {
    let addInput = `<div class="inputContainer">
            <label for="newRecipeName">List Name</label>
            <input type="text" placeholder="Corned Beef and Hash" name="newRecipeName" id="newRecipeName" class="form-input" />
            <label for="newRecipeIngredients">List Ingredients Here:</label>
            <input type="text" placeholder="Potatoes" name="newRecipeIngr" id="newRecipeIngr" class="form-input"/>
            <label for="newRecipeInst">Write Instructions Here:</label>
            <input type="text" placeholder="Potatoes" name="newRecipeIns" id="newRecipeIns" class="form-input"/>
            <button class="add-list-item" id="newRecipe">Add Item to Your List</button>
            </div>`
    addContainer.innerHTML = addInput;
};
insertNameEditInput = function() {


    let editNameInput =  `<label for="editRecipeName"> Edit Recipe Name</label>
                        <input type="text" placeholder="Ex: Escargotes" name="editRecipeName" id="editRecipeName" class="form-input" />
                        <button class="edit-recipe-name" id="editRecipeName">Edit Recipe Name</button>`;
 

    editNameContainer.innerHTML = editNameInput;
   

}

insertInstEditInput = function() {
    let editInstInput = `<label for="editRecipeIns">Edit Instructions Here</label>
                         <input type="text" placeholder="Dice Onion" name="editRecipeIns" id="editRecipeIns" class="form-input" />
                         <button class="edit-recipe-ins" id="editRecipeIns">Edit Recipe Instructions</button>`;
    
    editInstContainer.innerHTML = editInstInput;
}

insertIngrEditInput = function() {
    let editIngrInput = `<label for="editRecipeIngr">Edit Ingredients Here</label>
                         <input type="text" placeholder="Yellow Onion" name="editRecipeIngr" id="editRecipeIngr" class="form-input" />
                         <button class="edit-recipe-ingr" id="editRecipeIngr">Edit List Item</button>`;
    
    editItemContainer.innerHTML = editIngrInput;
    insertInstEditInput();
};


addEvent.onclick = function () {
    return insertAddInput();
};

editEvent.onclick = function () {
    document.getElementById("editRecipe").style.display = "none";
    insertNameEditInput();
    insertIngrEditInput();
    
    
};

document.querySelector('#newRecipe').addEventListener('submit', insertAddInput);
document.querySelector('#editRecipe').addEventListener('submit', insertNameEditInput);
