'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],

  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //传递对象作为参数，
  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address
  ) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} 
      and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

const values = Object.values(openingHours);
// console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

//  !const [day, { open, close }]来分解entries，就可以直接使用了
for (const [day, { open, close }] of entries) {
  // console.log(entry[0], entry[1]);
  console.log(`We will work on ${day} day, open at ${open}, close at ${close}`);
}

// console.log(restaurant.openingHours.thu?.open);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const element of menu) console.log(element);
// console.log('--------------------');
// menu.forEach((element) => {
//   console.log(element);
// });

/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

/*
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish: null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*
// ||中第一个数是truthy value，直接返回
console.log(3 || 'Jonas');

// restaurant.numGuests = 15;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('----------------AND-------------------');

console.log(0 && 'Jonas');
console.log(7 && undefined && 'Jonas');

if (restaurant.orderPizza) {
  // restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/*
//SPREAD
const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b);
console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(pizza);
console.log(risotto);
console.log(otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

// 实现一个任意arguments相加的Funtion
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
};
const x = [23, 5, 7];
console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));
console.log(add(...x));

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
/*
// const arr = [7, 8, 9];
// const newArr = [1, 2, 3, ...arr];
// console.log(newArr);

// const mainMenuCopy = [...restaurant.mainMenu];
// const starterMenuCopy = [...restaurant.starterMenu];
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays,strings,maps,sets,Not objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole 21',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [1, 2, 23], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);

console.log(a, b);

// Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(open, close);
// console.log(o, c);

/*
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Challenge #2
//1.
for (const [i, player] of game.scored.entries()) {
  // console.log();
  console.log(`Goal ${i + 1}: ${player}`);
}

//2.计算game.odds中的三个数的平均数
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

console.log('-----------------');
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
//  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

/*
// 1.
const [players1, players2] = game.players;
// 2.
const [gk, ...filedPlayers] = players1;
// 3.
const allPlayers = [...players1, ...players2];
// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoal = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoal('Davies', 'Muller');
printGoal(...game.scored);

// 7.
team1<team2
*/
