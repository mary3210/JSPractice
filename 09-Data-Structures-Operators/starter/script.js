'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]:{
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
}

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with  ${ing1}, ${ing2}, and ${ing3}.`);
  },

  OrderPizza(mainIngredient, ... otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};


// console.log(restaurant.openingHours.mon.open);

if ( restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open)

//With optional chainging
// console.log(restaurant.openingHours.mon?.open)

// console.log(restaurant.openingHours?.mon?.open)

// Example 
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {
  console.log(day)
  restaurant.openingHours.day
};

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2, ...arr];
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings. maps, sets. Not objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// console.log('j','o','n','a','s');

// Real-world example
// const ingredients = [
//   prompt('Let\'s make pasta! Ingredients 1?'), prompt("Ingredient 2?"),
// prompt('Ingredient 3')
// ]; 
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'} 
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Restorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//-----------------------------------------------------------------------------------------------
//SPREAD, because on Right side of =
// const arr = [1,2, ...[3,4]];
// console.log(arr)
// const [a, b, ...others] = [1,2,3,4,5];
// console.log(a,b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]

// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays);

// // 2) Functions
// const add = function(...numbers){
// let sum = 0;
// for (let i = 0; i < numbers.length; i ++){
//   sum += numbers[i];
//   console.log(sum);
// }
// }

// add(2, 3)
// add(5, 3, 7, 2)

// const x = [23, 5, 7]
// add(...x);

// restaurant.OrderPizza('mushroom', 'onion', 'olives', 'spinach')

// restaurant.OrderPizza('mushroom')
//-----------------------------------------------------------------------------------------------
//Destructuring Objects

// restaurant.orderDelivery({
//   time: '22:30',  
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// ///Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);
// //Nested Objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//------------------------------------------------------------------------------------------
//Destructuring arrays
// const arr = [2,3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary)

//----------------------------------------------------------------------------------------------

// Use Any data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jones');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10
// console.log(guests2);
// //The or operator will return the first truthy value of the operands or the last value if they are all falsy
// console.log(`---- AND ----`);
// // The And operator will return the first falsy value or the last value if all of them are truthy
// console.log(0 & 'Jonas ');
// console.log(7);

// console.log('Hello' && 23 && null && 'jonas');

// //practice example
// if (restaurant.OrderPizza){
//   restaurant.OrderPizza('mushroom', 'spinach');
// }

// restaurant.OrderPizza && restaurant.OrderPizza('mushroom', 'spinach')

//-----------------------------------------------------------------------------------------------

// const guests = restaurant.numGuests || 10;
// console.log(guests);
//Nullish: null and undefined (Not 0 or "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//-------------------------------------------------------------------------------------------------

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi'
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ||=10;
// rest2.numGuests ||=10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??=10;
rest2.numGuests ??=10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1);
console.log(rest2);
//-------------------------------------------------------------------------------------------------------------------


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for ( const item of menu) console.log( item);

for (const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}


// console.log(...menu.entries());

//------------------------------------------------------------------------------------------------------------------------

//property Names 

//iterating each day of the object names in the object openingHours
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const properties = Object.keys(openingHours);
console.log(properties); 

console.log(`We are open on ${properties.length} days`)

for (const day of properties) {
  console.log(day)
}

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties){
  openStr += `${day}, `;
}

console.log(openStr)

//property Values
 const values = Object.values(openingHours)
 console.log(values)


 //Entire Object
 Object.entries(openingHours);

 //Entire Object
 const entries = Object.entries(openingHours);
 console.log(entries);

//[key, value]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}

//------------------------------------------------------------------------------------------------------------------
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */

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

const scoreValues = Object.values(game.scored)
 console.log(scoreValues)
let count = 0
 for (const player of scoreValues) {
  console.log(player);
}

for (let i = 0; i < scoreValues.length; i++){
  console.log(`Goal ${i + 1}: ${scoreValues[i]}`)
}

console.log(game.scored.entries())
// 4/3

// for (const [goal of {scored}] of gameEntries){
//   console.log(`Goal: ${goal}: {scored}`)
// }

//-----------------------------------------------------------------------------------------------------
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order) ;

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy')
console.log(rest.set(2, 'Lizbon, portugal'));

rest.set('categories', ['Italian', 'Pizzaria', 'Vegetarian', 'Organic']).set('open',11).set('close',23);

rest.get('name')
console.log(rest.get('name'));

const question = new Map([
  ['question', 'What is the best programming languages in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
]);

console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);
//quiz app
console.log(question.get('question'));
for(const [key, value] of question){
  if(typeof key === 'number')console.log(`Answer ${key}: ${value}`);

}

const answer = Number(prompt('Your answer'));
console.log(answer);

// if (answer == 3){
//   console.log(question.get(true))
// } else {
//   console.log(question.get(false));
// }

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
console.log([question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

// let mapo = new Map(openingHours)
// console.log(mapo);
console.log('------------------------------------------')

const airline = 'TAP Air Portugal'
const plane = 'A320'

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737' [0]);

console.log(airline.length); 
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'))

console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7))

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect)


//comparing emails
const email = 'hello@jonas.io'
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceUS = "$288.97"
const priceGB = priceUS.replace('$', "€").replace('.',',')
console.log(priceGB);
const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'))

console.log(announcement.replace(/door/g, 'gate'));
//case sensitive

//booleans
const planeq = 'Airbus A320neo';
console.log(planeq.includes('A320'));
console.log(planeq.includes('Boeing'));
console.log(planeq.startsWith('Air'));


if(planeq.startsWith('Airbus')  && planeq.endsWith('neo'))
{
  console.log('Part of the NEW ARirbus family');
}
//Practice exercise 
const checkBaggage = function(items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){ 
      console.log('You are Not allowed on board');
    } else {
      console.log('Welcome aboard!');
    }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')

console.log('a+very+new+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(" ");
  const namesUpper = [];

  for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis')
capitalizeName('jonas schmedtmann')

//padding
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log();

const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(43343214124123))
console.log(maskCreditCard('4382424324423472347932743'));

//Repeat
const message2 = 'Bad weather... All Departures Delayed...'
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'plane'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);


