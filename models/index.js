const User = require('./User');
const Drink = require('./Drink');
const Recipe = require('./Recipe');
const List = require('./List');
const Team = require('./Team');
const Category = require('./Category');
const TeamUser = require('./TeamUser');
const ListCategory = require('./ListCategory');


//Creating Associations

//Users belong to many groups
User.belongsToMany(Team, {
    through: TeamUser,
    // as: 'team_user',
    foreignKey: 'user_id'
});

//Groups belong to many Users
Team.belongsToMany(User, {
    through: TeamUser,
    // as: 'team_user',
    foreignKey: 'team_id'
});
TeamUser.belongsTo(User, {
    foreignKey: 'user_id'
});
TeamUser.belongsTo(Team, {
    foreignKey: 'team_id'
});

List.belongsToMany(Category, {
    through: ListCategory,
    // as: 'list_category',
    foreignKey: 'list_id'
});

Category.belongsToMany(List, {
    through: ListCategory,
    // as: 'list_category',
    foreignKey: 'category_id'
})
//Drink can belong belong to one user
Drink.belongsTo(User, {
    foreignKey: 'user_id'
});

//user can have many drinks------FK
User.hasMany(Drink, {
    foreignKey: 'user_id'
});
//Drink can belong to one group
Drink.belongsTo(Team, {
    foreignKey: 'team_id'
});

//Group has many drinks
Team.hasMany(Drink);

Recipe.belongsTo(Team, {
    foreignKey:'team_id',
    constraints: false
});

User.hasMany(Recipe);

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

Team.hasMany(Recipe);

List.belongsTo(Team,{
    foreignKey: 'team_id'
});
User.hasMany(List);

List.belongsTo(User, {
    foreignKey: 'user_id'
});

Team.hasMany(List);

List.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(List);



//Exporting the Models
module.exports = {User, Drink, Recipe, List, Category, Team, TeamUser};