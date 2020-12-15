//Import All Models
const User = require('./User');
const Drink = require('./Drink');
const Recipe = require('./Recipe');
const List = require('./List');
const Group = require('./Group');
const Category = require('./Category');


//Creating Associations

//Users belong to many groups

//Categories have many Lists












//Exporting the Models
module.exports = {User, Drink, Recipe, List, Category, Group};