"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'
//------------------------------------------------------------
// function logger(){
//     console.log('My name is Jonas');
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0))

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice)

//--------------------------------------------------------------------


//function declaration
// const age1 = calcAge1(1991); 

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }




// //function expression

//  const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

//------------------------------------------------------------------------

//arrow function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991)
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

//----------------------------------------------------------------------------

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     console.log(apples, oranges)
//     const juice = `Juice with ${applePieces} peices of apple and ${orangePieces} peices of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

//---------------------------------------------------------------------------------

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0 ) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

//-------------------------------------------------------------------------------------

// const friend1 = 'Michael'
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008)

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['bob'. 'alice]

// const firstName = 'Jonas';
// const jonas = [ 'Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// //exercise
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2018];

// const age1 = (calcAge1(years[0]));
// const age2 = (calcAge1(years[1]));
// const age3 = (calcAge1(years[years.length-1]));
// console.log(age1, age2, age3);
// const ages = [calcAge1(years[0]), calcAge1(years[1]),calcAge1(years[years.length-1])];
// console.log(ages)

//-----------------------------------------------------------------------------------------

// const friends = ['Michael', 'Steven', 'Peter'];

// //add elements 
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);
// friends.unshift('John');
// console.log(friends);

// //remove elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(popped)
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// //strict inequality in includes
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if(friends.includes('Steven')){
//     console.log('You have a friend called Steven');
// }

//-------------------------------------------------------------------------------------------------

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

//---------------------------------------------------------------------------------------------------

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // console.log(jonas. 'last' + nameKey)


// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// console.log(jonas[interestedIn]);

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else {
//     console.log(
//         'Wrong Request! Choose between firstName, lastName, age, job, and friends'
//     )
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas)

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his bestfriend is called ${jonas.friends[0]}.`)
// // console.log(jonas.friends)
// console.log(jonas.friends[0])

//-------------------------------------------------------------------------------------------------------

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicence: true, 


//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function(){
//     //     console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function(){
//         return this.hasDriversLicence ? "has a driver's license" : "does not have a driver's license"
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // console.log(jonas['calcAge'](1991));
// // const driver = jonas.hasDriversLicence ? "has a driver's license" : "does not have a driver's license"
// console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he ${jonas.getSummary()}`)

//----------------------------------------------------------------------------------------------------------

// console.log('Lifting weights repetition 1 🏋️‍♀️');


//for loop keeps running while condition is True
// for(let rep = 5; rep <= 10; rep++ ) { 
// console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

//-----------------------------------------------------------------------------------------------------------

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'], 
//     true
// ];

// const types = [];

// for (let i = 0; i < jonas.length ; i++) {
//     // REading from jonas array
//     console.log(jonas[i], typeof jonas[i]);
  
// // Filling types array
// // types[i] = typeof jonas[i]
// types.push(typeof jonas[i])


// }
// console.log(types); 

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i ++){
//     ages.push(2037 - years[i])
// }
// console.log(ages);

// // continue and break
// console.log('---only strings---')
// for (let i = 0; i < jonas.length ; i++) {
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('---BREAK WITH NUMBER---')
// for (let i = 0; i < jonas.length ; i++) {
//     if(typeof jonas[i] !== 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

//-----------------------------------------------------------------------------------------------------------------------

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'], 
//     true
// ];

// for (let i = jonas.length-1;i >=0; i--){
//     console.log(i, jonas[i])
// }

// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`----------starting ${exercise}`);

//     for (let rep = 1; rep < 6; rep ++){
//         console.log('Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️')
//     }
// }

//-------------------------------------------------------------------------------------------------------------------------

// for (let rep = 1; rep < 6; rep ++){
//             console.log('Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️');
//         }


// let rep = 1
// while (rep <= 10) {
// //  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`)

// rep ++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice)

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) +1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

///while loop is good to use if u dont know how many iterations is needed


