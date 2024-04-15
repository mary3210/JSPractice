'use strict';

// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 1000);


// const flight = 'LH2334';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 123432342
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH99';
//     passenger.name = 'Mr. ' + passenger.name;
//     if (passenger.passport === 123432342) {
//         alert('Check In')
//     } else {
//         alert('Wrong passport!')
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing...

// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000)
//     console.log('persons new passport')
//     console.log(person.passport)
// }


// newPassport(jonas)
// checkIn(flight, jonas)


// function count() {
//     let counter = 0;
//     return function () {
//         counter++;
//     };
// }

// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// }


// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// //Higher-order function
// const transformer = function(str, fn){
//     console.log(` Original string: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }


// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = function(){
//     console.log('👋')
// }

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha','Adam'].forEach(high5);


// const greet = function(greeting) {
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');


// const greetArr = (greeting) => 
//     (name) => 
//         console.log(`${greeting} ${name}`);


// greetArr('Hi')('Jonas');


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa)

const eurowings = {
    airline: 'Eurowing',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;
console.log(book)
console.log(this)


//Does Not Work
// book(23, 'Sarah Williams');

//call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa)

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'Lx',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper')
console.log(swiss);

//apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)

book.call(swiss, ...flightData)
// book.call(eurowings, 23, 'Sarah Williams');

//Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))


//partial application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const shopwizard = (rarity, price) => console.log(` this is at ${rarity} rarity and is ${price} neopoints`);

const declareprice = shopwizard.bind(null, 99);
declareprice(100);

const poll = {
    question: "What is your favorite programming language?",
    options: ['0: Javascript', '1: Python', '2: Rust', '3:C++'],
    answers: new Array(4).fill(0),
}

// const registerNewAnswer = () => prompt(this.question)


function registerNewAnswer() {
    console.log(this.question)
    let input = prompt(`${this.question} \n ${this.options.join('\n')} \n (Write option number)`)
    // console.log(++this.answers[input])
    // console.log(this.answers)
    if (typeof Number(input) == "number" && 0 > input < 4) {
        console.log('s')
        ++this.answers[input]
    }
    displayResults.call({ answers: [1, 2, 3, 4] }, 'string')
}

let thingy = registerNewAnswer.bind(poll)
// console.log(thingy)

document.querySelector('.poll').addEventListener('click', registerNewAnswer.bind(poll))

function displayResults(type) {
    console.log(this)
    if (type === "string") {
        console.log(`poll results are ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`)
    }
    else if (type === "array") {
        console.log(this.answers)
    }
}

// displayResults.call({ answers: [1, 2, 3, 4] }, 'string')


const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))()


const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();


booker();
booker();
booker();

console.dir(booker);


let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();


//Re-assigning f function
h();
f();


//Example 2 
const boardPassengers = function (n, wait) {
    const perGRoup = n / 3;
    setTimeout(function () {
        console.log(`WE nare now boarding all ${n} passengers`);
        console.log(` There are 3 groups, each with ${perGRoup} passengers`)
    }, 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

setTimeout(function () {
    console.log('Timer');
}, 1000)

boardPassengers(180, 3);