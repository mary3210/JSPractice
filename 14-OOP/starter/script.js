'use strict';


const Person = function (firstName, birthYear) {

    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never do this
    // this.calcAge = function (){
    //     console.log(2037 - this.borthYear);

    // };
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

//Prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear)
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__)
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas))

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species);

console.log(jonas.__proto__)
console.log(jonas.__proto__.__proto__)


//////////////////// coding challenge #1 ///////////////////////////////

const Car = function (make, speed) {
    this.make = make
    this.speed = speed

}

Car.prototype.accelerate = function () {
    console.log(10 + this.speed)
    return this.speed = this.speed + 10
}

Car.prototype.brake = function () {
    console.log(this.speed - 5)
    return this.speed = this.speed + 10
}

const BMW = new Car('BMW', 80)

const Mercedes = new Car('Mercedes', 80)
BMW.accelerate()
BMW.accelerate()
BMW.accelerate()
BMW.accelerate()

Mercedes.accelerate()
Mercedes.accelerate()
Mercedes.brake()


///////////////////////////////////////////////////////////////////////////////////

//class expression
// const PersonCl = class{}

//class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };
    //Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(` Hey ${this.firstName}`);
    }

    get age() {
        return 2037 - this.birthYear
    }
    //set a property that already exists
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) {
            this._fullName = name;
        }
        else { alert(`${name} is not a full name!`); }
    }

    get fullName() {
        return this._fullName;
    }

    //Static method
    static hey() {
        console.log('Hey there 👋')
    }
};

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
console.log(jessica.age)

PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// 1. Classes are Not hoisted
// 2. Class are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965)

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

/////////////////////////////////////////////////////////////////

Person.hey = function () {
    console.log('Hey there 👋');
    console.log(this)
};

Person.hey();

PersonCl.hey();

// const PersonProto = {
//     calcAge(){
//         console.log(2037 - this.birthYear)
//     },
//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }


// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

//ES6 version of classes

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; 
    }
}

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.dir(Student.prototype.constructor);


const EV = function(make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge
}

//Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
   return this.charge = chargeTo;
}

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`)
}

const tesla = new EV('Tesla', 120, 23);
console.log(tesla.chargeBattery(90))
console.log(tesla)
tesla.brake();
tesla.accelerate();

class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course){
        //Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

martha.introduce();
martha.calcAge();


// Inheritance Between "Classes": Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

// const StudentProto = object.create(PersonProto);
// StudentProto.init = function(firstName, birthYear, course){
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }

// StudentProto.introduce = function(){
//     console.log(` My name is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');

// jay.introduce();
// jay.calcAge();

//////////////////////////

class Account {
    //Public fields(instances)
    locale = navigator.language;
    //2) Private fields
    #movements = [];
    #pin;

    constructor( owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        //Protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }
    // Public Interface
    getMovements(){
        return this.#movements
    }

    deposit(val){
        this.#movements.push(val)
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }

    _approveLoan(val){
        return true
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    static helper(){
        console.log('Helper')
    }
    // 4) Private methods
    #approveLoan(val){
        return true
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
// account.#movements
// acc1.#movements

console.log(acc1);


Account.helper()

//chaining

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getMovements());

class EVCl extends CarCl{
    #charge;
    constructor(make, speed, charge){
        super(make, speed);
        this.make = make;
        this.speed = speed;
        this.#charge = charge;
    }
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this
    }
    chargeBattery(chargeTo){
        this.#charge = chargeTo;
        return this;
    }
}

const car1 = new EVCl('Rivian', 120, 23);

car1.accelerate().accelerate().accelerate().brake().chargeBattery(50);