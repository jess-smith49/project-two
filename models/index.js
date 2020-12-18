const User = require('./User');
const Drink = require('./Drink');
const Recipe = require('./Recipe');
const List = require('./List');
const Groups = require('./Group');
const Category = require('./Category');
const GroupsUser = require('./GroupUser');
const ListCategory = require('./ListCategory');


//Creating Associations

//Users belong to many groups
User.belongsToMany(Groups, {
    through: GroupsUser,
    as: 'groups_user',
    foreignKey: 'user_id'
});

//Groups belong to many Users
Groups.belongsToMany(User, {
    through: GroupUser,
    as: 'groups_user',
    foreignKey: 'groups_id'
});
GroupsUser.belongsTo(User, {
    foreignKey: 'user_id'
});
GroupsUser.belongsTo(Groups, {
    foreignKey: 'group_id'
});

List.belongsToMany(Category, {
    through: ListCategory,
    as: 'list_category',
    foreignKey: 'list_id'
});

Category.belongsToMany(List, {
    through: ListCategory,
    as: 'list_category',
    foreignKey: 'category_id'
})
/*=================================================*/
//Drink can belong belong to one user
Drink.belongsTo(User, {
    foreignKey: 'user_id'
});

//user can have many drinks------FK
User.hasMany(Drink);
    foreignKey: 'user_id'

//Drink can belong to one group
Drink.belongsTo(Groups, {
    foreignKey: 'groups_id'
});

//Group has many drinks
Groups.hasMany(Drink);

/*===============================================*/
Recipe.belongsTo(Groups, {
    foreignKey:'groups_id'
});

User.hasMany(Recipe);

//user can have many drinks------FK
User.hasMany(Drink);

//Drink can belong to one group
Drink.belongsTo(Groups, {
    foreignKey: 'groups_id'
});

//Group has many drinks
Groups.hasMany(Drink);

/*===============================================*/
Recipe.belongsTo(Groups, {
    foreignKey:'groups_id'
});

User.hasMany(Recipe);

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

Groups.hasMany(Recipe);

/*===============================================*/

List.belongsTo(Groups,{
    foreignKey: 'groups_id'
});
User.hasMany(List);

User.hasMany(Recipe);

List.belongsTo(User, {
    foreignKey: 'user_id'
});

Groups.hasMany(List);

/*===============================================*/

List.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(List);

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

Groups.hasMany(Recipe);

/*===============================================*/

List.belongsTo(Groups,{
    foreignKey: 'group_id'
});
User.hasMany(List);

User.hasMany(Recipe);

List.belongsTo(User, {
    foreignKey: 'user_id'
});

Groups.hasMany(List);

/*===============================================*/

List.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(List);


//Exporting the Models
module.exports = {User, Drink, Recipe, List, Category, Groups};