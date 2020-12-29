
const { Recipe } = require('../models');

const recipeData = [
    {
        recipe_name: 'Sugar Cookies',
        ingredients: '3 cups all- purpose flour, 2/4 teasponn baking powder, 1/4 teaspoon salt, 1 cup unsalted butter, 1 cup sugar, 1 egg (beaten), 1 tablespoon milk, powdered sugar',
        instructions: 'Mix',
        // instructions: 'Stir flour, baking powder and salt. Set aside, Place butter and sugar in large bowl of electri stand mixer and beat until light in color. Add egg and milk and beat. Put mixer on low speed, gradually add flower and beat until mixture pulls away from side of bowl. Divide dough in half, wrap in waxed paper and refrigerate 2 hours. Preheat oven to 375 degrees F. Spring surface will you will roll out dough with powered sugar. Sprinkle rolling pin with powdered sugar and roll out dough to 1/4 inch thick. Cut into desired shape and place on baking sheet, for 7-9 minutes'
        user_id: 1,
        team_id: 1
    },
    {
        recipe_name: 'Peanut Butter Balls',
        ingredients: '1 cup peanut butter, 1 cup room temp butter, 4 cups powdered sugar, 1 1/4 cup crushed graham crackers, 15 oz semi-sweet chocolate chips',
        instructions: 'Mix',
        // instructions: 'In mixer, combine peanut butter and butter until smooth, turn on low and add powdered sugar and graham racker crumbs. Scoop and roll into balls. Place on backing sheet and refrigerate for 30 minutes. In medium bowl melt chocoalte and stir until smooth. Dip peanut butter balls into chocoalte and place back on parchment. Allow chocoalte to set before eating'
        user_id: 2,
        team_id: 2
    },
    {
        recipe_name: 'Chocolate coverd pretzels with M&Ms',
        ingredients: 'Pretzel snaps, chocolate almond bark or meltable chocolate, Christmas M&Ms',
        instructions: 'Line cookie sheet with wax papaer. Lay pretzels flat on cookie sheet. Melt chocolate in small batches in the microwave. Put a small spoonful of chocolated on the center of the pretzel and press M&M down on the chocolate.',
        user_id: 3,
        team_id: 3
    },
    {
        recipe_name: 'Mint craker cookie',
        ingredients: 'Ritz crackers, white chocolate or white almond bark, crushed peppermint candy canes',
        instructions: 'Line a cookie sheet with wax paper. Mlet chocolate or almond bark in microwave. Dip Ritz cracker in melted chocolate with a fork and cover with chocolate, tapping off excess. Lay cracker on cookie sheet and top with crushed peppermint.',
        user_id: 4,
        team_id: 1
    },
    {
        recipe_name: 'Caramel pretzel nut bites',
        ingredients: 'Rolos, pretzel snaps, pecans',
        instructions: 'Preheat oven to 350*. Line cookie sheet with parchment paper. Lay pretzels flat in single layer. Place unwrapped rolo on center of each pretzel, and plave in oven for 3 minutes. Pull cookie sheet out of the oven and immediately press pecan on top of Rolo.',
        user_id: 1,
        team_id: 1
    },
    {
        recipe_name: 'Chocolate bark',
        ingredients: 'Almond bark or meltable chocolate, optional-nuts, dried fruit, coconut flakes',
        instructions: 'Line cookie sheet with wax paper. Melt chocolate in the microwave. Spread chocolate on cookie sheet. Top with any combination you would like-nuts, dried fruit, coconut, etc. Press down slightly on toppings and let cool.',
        user_id: 2,
        team_id: 2
    }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;