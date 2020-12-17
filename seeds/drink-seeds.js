const {Drink} = require('../models');

const drinkData = [
    {
        drink_name: 'Cranberry Spritzer',
        ingredients: '7up, cranberry juice, fresh limes',
        instructions: 'Add 2 oz cranberry juice, sqeeze one quarter lime, and fill the rest with 7up'
    }, 
    {
        drink_name: 'Christmas Punch',
        ingredients: 'Cranberry Juice, Sparkling wine, Ginger Ale, Oranges, Cranberries, Rum or Brandy',
        instructions: 'Add all ingredients into large bowl'
    }
];

seedDrinks = () => Drink.bulkCreate(drinkData);
module.exports = seedDrinks;