const User = require('./User');
const Drink = require('./Drink');
const Recipe = require('./Recipe');
const List = require('./List');
const Group = require('./Group');
const Category = require('./Category');
const GroupUser = require('./GroupUser');


//Creating Associations

//Users belong to many groups
User.belongsToMany(Group, {
    through: GroupUser,
    as: 'group_user',
    foreignKey: 'user_id'
});

//Groups belong to many Users
Group.belongsToMany(User, {
    through: GroupUser,
    as: 'group_user',
    foreignKey: 'group_id'
});

/*=================================================*/
//Drink can belong belong to one user
Drink.belongsTo(User, {
    foreignKey: 'user_id'
});

//user can have many drinks------FK
User.hasMany(Drink);

//Drink can belong to one group
Drink.belongsTo(Group, {
    foreignKey: 'group_id'
});

//Group has many drinks
Group.hasMany(Drink);

/*===============================================*/
Recipe.belongsTo(Group, {
    foreignKey:'group_id'
});

User.hasMany(Recipe);
=======

//user can have many drinks------FK
User.hasMany(Drink);

//Drink can belong to one group
Drink.belongsTo(Group, {
    foreignKey: 'group_id'
});

//Group has many drinks
Group.hasMany(Drink);

/*===============================================*/
Recipe.belongsTo(Group, {
    foreignKey:'group_id'
});

User.hasMany(Recipe);

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

Group.hasMany(Recipe);

/*===============================================*/

List.belongsTo(Group,{
    foreignKey: 'group_id'
});

User.hasMany(Recipe);

List.belongsTo(User, {
    foreignKey: 'user_id'
});

Group.hasMany(List);

/*===============================================*/

List.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(List);

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

Group.hasMany(Recipe);

/*===============================================*/

List.belongsTo(Group,{
    foreignKey: 'group_id'
});
User.hasMany(List);

User.hasMany(Recipe);

List.belongsTo(User, {
    foreignKey: 'user_id'
});

Group.hasMany(List);

/*===============================================*/

List.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(List);


//Exporting the Models
module.exports = {User, Drink, Recipe, List, Category, Group};