const addContainer = document.getElementById("add-container");
const editContainer = document.getElementById('edit-container');
    let = editNameContainer = document.getElementById('edit-name');
    let = editItemContainer = document.getElementById('edit-item');
    let = editInstContainer = document.getElementById('edit-inst');


let addEvent = document.querySelector('#newDrink');
let editEvent = document.querySelector('#editDrink');



insertAddInput = function () {
    let addInput = `<div class="inputContainer">
            <label for="newRecipeName">Drink Name</label>
            <input type="text" placeholder="Grasshopper" name="newDrinkName" id="newDrinkName" class="form-input" />
            <label for="newDrinkIngr">List Ingredients Here:</label>
            <input type="text" placeholder="Creme De Menthe" name="newDrinkIngr" id="newDrinkIngr" class="form-input"/>
            <label for="newRecipeInstructions">Write Instructions Here:</label>
            <input type="text" placeholder="Blend Ice Cream" name="newRecipeInstructions" id="newDrinkIns" class="form-input"/>
            <button class="add-list-item" id="newDrink">Add Item to Your List</button>
            </div>`
    addContainer.innerHTML = addInput;
};

insertNameEditInput = function() {


    let editNameInput =  `<label for="editDrinkName"> Edit Recipe Name</label>
                        <input type="text" placeholder="Ex: Spiked Hot Chocolate" name="editDrinkName" id="editDrinkName" class="form-input" />
                        <button class="edit-drink-name" id="editDrink">Edit Recipe Name</button>`;
 

    editNameContainer.innerHTML = editNameInput;
   

}

insertInstEditInput = function() {
    let editInstInput = `<label for="editDrinkIns">Edit Instructions Here</label>
                         <input type="text" placeholder="Heat Water" name="editDrinkIns" id="editDrinkIns" class="form-input" />
                         <button class="edit-drink-ins" id="editDrink">Edit Drink Instructions</button>`;
    
    editInstContainer.innerHTML = editInstInput;
}

insertIngrEditInput = function() {
    let editIngrInput = `<label for="editDrinkIngr">Edit Ingredients Here</label>
                         <input type="text" placeholder="1oz Baileys" name="editDrinkIngr" id="editDrinkIngr" class="form-input" />
                         <button class="edit-recipe-ingr" id="editDrink">Edit List Item</button>`;
    
    editItemContainer.innerHTML = editIngrInput;
    insertInstEditInput();
};


addEvent.onclick = function () {
    return insertAddInput();
};

editEvent.onclick = function () {
    document.getElementById("editDrink").style.display = "none";
    insertNameEditInput();
    insertIngrEditInput();
    
    
};

document.querySelector('#newDrink').addEventListener('submit', insertAddInput);
document.querySelector('#editDrink').addEventListener('submit', insertNameEditInput);