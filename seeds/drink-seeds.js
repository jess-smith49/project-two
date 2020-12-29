const {Drink} = require('../models');

const drinkData = [
    {
        drink_name: 'Cranberry Spritzer',
        ingredients: '7up, cranberry juice, fresh limes',
        instructions: 'Add 2 oz cranberry juice, sqeeze one quarter lime, and fill the rest with 7up',
        user_id: 1,
        team_id: 1
    }, 
    {
        drink_name: 'Christmas Punch',
        ingredients: 'Cranberry Juice, Sparkling wine, Ginger Ale, Oranges, Cranberries, Rum or Brandy',
        instructions: 'Add all ingredients into large bowl',
        user_id: 2,
        team_id: 2
    },
    {
        drink_name: 'Hot chocolate',
        ingredients: '4 cups milk, 1/4 cup cocoa powder, 1/4 cup sugar, 1/2 cup chocolate chips, 1/4 teaspoon vanilla extract',
        instructions: 'Heat milk, cocoa powder, and sugar in saucepan. Whisk frequently until warm. Add chocolate chips and whisk until chocolate melts and evenly distributes. Add in vanilla extract.',
        user_id: 3,
        team_id: 3
    },
    {
        drink_name: 'Mimosa',
        ingredients: '1 bottle sparkling wine, orange juice, optional-Grand Marnier',
        instructions: 'Fill champagne flutes 1/2 way with champagne and top with orange juice. Top with 1tbsp Grand Marnier if using.',
        user_id: 4,
        team_id: 1
    },
    {
        drink_name: 'Mulled wine',
        ingredients: '1 bottle dry red wine, sliced orange, whole cloves, cinnamon sticks, 2-4 tablespoons sugar or honey, optional-Brandy',
        instructions: 'Add wine, orange slices, cloves, cinnamon, and 2 tblsp sugar or honey to saucepan. Cook the mulled wine until just barely a simmer. Strain using a fine mesh strainer and disgard orange slices, cloves, cinnamon. Serve.',
        user_id: 1,
        team_id: 1
    },
    {
        drink_name: 'Beermosa',
        ingredients: 'Spotted Cow beer or beer of choice, orange juice',
        instructions: 'Add beer to glass until 1/2 full, fill up the rest of the glass with orange juice.',
        user_id: 2,
        team_id: 2
    },
    {
        drink_name: 'Festive coffee',
        ingredients: 'Brewed coffee, Baileys',
        instructions: 'Pour coffee into mug, add Baileys to taste',
        user_id: 3,
        team_id: 3
    },
    {
        drink_name: 'Cranberry Mimosa',
        ingredients: 'Cranberry Juice, Sparkling wine, orange juice',
        instructions: 'Fill sparkling wine to wine glass 1/2 way. Fill glass almost to the top with orange juice. Top off with cranberry juice.',
        user_id: 4,
        team_id: 1
    },
    {
        drink_name: 'Egg nog',
        ingredients: '2 eggs beaten, 3 tablespoons sugar, 2 1/3 cups milk, 1 teaspoon vanilla extract, dash of ground nutmeg',
        instructions: 'Blend together eggs, sugar, milk, vanilla, and nutmeg',
        user_id: 2,
        team_id: 2
    }

];

const seedDrinks = () => Drink.bulkCreate(drinkData);

module.exports = seedDrinks;