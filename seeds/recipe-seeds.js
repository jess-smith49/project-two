
const { Recipe } = require('../models');

const recipeData = [
    {
        recipe_name: 'Sugar Cookies',
        ingredients: '3 cups all- purpose flour, 2/4 teasponn baking powder, 1/4 teaspoon salt, 1 cup unsalted butter, 1 cup sugar, 1 egg (beaten), 1 tablespoon milk, powdered sugar',
        instructions: 'Mix',
        // instructions: 'Stir flour, baking powder and salt. Set aside, Place butter and sugar in large bowl of electri stand mixer and beat until light in color. Add egg and milk and beat. Put mixer on low speed, gradually add flower and beat until mixture pulls away from side of bowl. Divide dough in half, wrap in waxed paper and refrigerate 2 hours. Preheat oven to 375 degrees F. Spring surface will you will roll out dough with powered sugar. Sprinkle rolling pin with powdered sugar and roll out dough to 1/4 inch thick. Cut into desired shape and place on baking sheet, for 7-9 minutes'
        // user_id: 1,
        // groups_id: 1
    },
    {
        recipe_name: 'Peanut Butter Balls',
        ingredients: '1 cup peanut butter, 1 cup room temp butter, 4 cups powdered sugar, 1 1/4 cup crushed graham crackers, 15 oz semi-sweet chocolate chips',
        instructions: 'Mix',
        // instructions: 'In mixer, combine peanut butter and butter until smooth, turn on low and add powdered sugar and graham racker crumbs. Scoop and roll into balls. Place on backing sheet and refrigerate for 30 minutes. In medium bowl melt chocoalte and stir until smooth. Dip peanut butter balls into chocoalte and place back on parchment. Allow chocoalte to set before eating'
        // user_id: 2,
        // groups_id: 1
    },
    {
        recipe_name: 'Dirt cake',
        ingredients: 'Pudding, whipped cream, crushed oreos, gummy worms',
        instructions: 'Pour half of pudding in bowl, top with oreos. Put second half in bowl and add crushed oreios. Garnish with gummy worms',
        // user_id: 3,
        // groups_id: 1
    }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;