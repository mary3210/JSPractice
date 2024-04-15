'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

      
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       //Reassigning outer scope's variable
//       output = 'NEW OUTPUT';
//     }
//     console.log(millenial);
//     console.log(add(2, 3));
//     console.log(output)
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

//-----------------------------------------------------------------------------------------------------

// console.log(me);
// console.log(job);
// console.log(year);

// var me ='Jonas';
// let job = 'teacher';
// const year = 1991;


//Functions
// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow);
// console.log(addArrow(2,3));

// function addDecl(a,b) {
//     return a + b;
// }

// const addExpr = function(a,b) {
//     return a + b
// }

// const addArrow = (a,b) => a +b;

// //example

// if(!numProducts) deleteShoppingCart()
//  var numProducts = 10;

// function deleteShoppingCart() {
//  console.log('All Products deleted!');
// }


// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x)
// console.log(x === window.y)
// console.log(x === window.z)

//variables made with var will add to the window property

//-----------------------------------------------------------------------------------------------------------

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     // console.log(this)
// };

// calcAge(1980);
// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     // console.log(this)
// };

// calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }

// jonas.calcAge()

// const matilda = {
//     year: 2017,
// }


// matilda.calcAge = jonas.calcAge;

// matilda.calcAge();

// const f = jonas.calcAge;

//--------------------------------------------------------------------------------------------------------------

// var firstName = 'Matilda'

// const jonas = {
//     year: 1991,
//     calcAge: function() {
        // console.log(this);
        // console.log(2037 - this.year);

        //solution 1
    //     const self = this //self or that 
    //     const isMillenial = function() {
    //         console.log(self.year >= 1981 && self.year <= 1996);
    //     };
    //     isMillenial()
    // },
    
    //solution 2: 
//         const isMillenial = () => {
//             console.log(this)
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial();
//     },

//     greet: () => {
//         console.log(this)
//         console.log(`Hey ${this.firstName}`);
//     },
// }
// ;

// jonas.greet();

// jonas.calcAge();

//arguments keyword
//  const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
//  }
// addExpr(2,5);
// addExpr(2,5,8,12);

//  var addArrow = (a, b) => {
//     console.log(arguments)
//     a + b;
//  };

//  addArrow(2,5,8);

//----------------------------------------------------------------------------------------

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = { 
//     name: 'Jonas',
//     age: 30,
// };

// const friend = me
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

//---------------------------------------------------------------------------------------------


//primitive types 
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName)

//refernence types
const jessica = {
    firstName: 'jessica',
    lastName: 'Williams',
    age: 27,
};


const marriedJessica = jessica;
marriedJessica.lastName = 'Dav'
console.log('Before marriage:', jessica);
console.log('After marriage', marriedJessica)

//Copying objects

const jessica2 = {
    firstName: 'jessica',
    lastName: 'Williams',
    age: 27,
};

const jessicaCopy = Object.assign({}, jessica2); 
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage', jessicaCopy)




 