//Import All Models
const User = require('./User');
const Drink = require('./Drink');
const Recipe = require('./Recipe');
const List = require('./List');
const Group = require('./Group');
const Category = require('./Category');


//Creating Associations

//Users belong to many groups
User.belongsToMany(Group,{
    foreignKey: 'group_id'
});

//Groups belong to many Users
Group.belongToMany(User, {
    foreingKey: 'user_id'
});


//List belong to one user through group

//Drink belong to one user through group

//Recipe belong to one user through group












//Exporting the Models
module.exports = {User, Drink, Recipe, List, Category, Group};