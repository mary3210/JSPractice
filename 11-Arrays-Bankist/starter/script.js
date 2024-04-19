'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a-b ) : movements;

        movs.forEach(function (mov, i) {
            const type = mov > 0 ? 'deposit' : 'withdrawal'

            const html = ` 
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div></div>
        </div> 
    `
            containerMovements.insertAdjacentHTML('afterbegin', html);
        });
};

let sorted = false;
btnSort.addEventListener('click', function(e){
    e.preventDefault();

    displayMovements(currentAccount.movements, !sorted)
    sorted = !sorted;
})
displayMovements(account1.movements)

// console.log(containerMovements.innerHTML)
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //Slice - Makes a shallow COPY of the original array
// console.log(arr.slice(2));

// console.log(arr.slice(2, 4));

// console.log(arr.slice(-2));

// console.log(arr.slice(-1));

// console.log(arr.slice(1, -2));

// console.log(arr.slice());

// //splice - Changes the original array

// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// arr.splice(1,2);
// console.log(arr)

// //Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];

// const arr2 = ['j', 'i', 'h', 'g', 'f']

// console.log(arr2.reverse())

// //Concat 
// const letters = arr.concat(arr2)
// console.log(letters);
// console.log([...arr, ...arr2])

// //Join
// console.log(letters.join(' - '))

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));


// //getting last array element
// console.log(arr[arr.length - 1])
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1));

// console.log('jonas'.at(0))
// console.log('jonas'.at(-1))
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// //continue and break statements dont work in a foreach, will always loop the entire array
// console.log('------ FOREACH ------')
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

//foreach on map is same as calling it on an array
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`)
})

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)

//sets do not have keys or indexes. thats why first and second arguement are the same.
currenciesUnique.forEach(function (value, _value, map) {
    console.log(`${_value}: ${value}`);
});

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const julia = [3, 5, 2, 12, 7]
// const kate = [4, 1, 15, 8, 3]
// const juliacopy = julia.slice(1,3)
// console.log(juliacopy)
// const array = juliacopy.concat(kate)
// console.log(array)


// function grownornot(arr){
//   arr.forEach((el){
//     if (el > 3){
//       console.log(` Dog number `)
//     }
//   })
// }

// function grownornot(el, index){
//   if (el >= 3 ){
//     console.log(`Dog number ${index + 1} is an adult, and is ${el} years old`);
//   }
//   else {
//     console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//   }
// }

// array.forEach(grownornot)

const eurToUsd = 1.1

const movementsUSD = movements.map(mov =>
    mov * eurToUsd
)

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

console.log(movementsUSDfor);


const movementsDescriptions = movements.map((mov, i) =>

    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`


)

console.log(movementsDescriptions);

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(word => word[0])
            .join('')
    })
};

createUsernames(accounts)

const updateUI = function (acc) {
    //Display movements
    displayMovements(acc.movements);

    //Display balance
    calcDisplayBalance(acc);

    //Display summary
    calcDisplaySummary(acc);
}

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance} EUR`
};
//   calcDisplayBalance(account1.movements);
// console.log(createUsernames('Steven Thomas Williams')); //ssw

const deposits = movements.filter(function (mov) {
    return mov > 0;
})
console.log(movements);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor)

const withdrawals = movements.filter(function (mov) {
    return mov < 0
})
console.log(withdrawals)
const withdrawalsFor = []
for (const mov of movements) if (mov < 0) withdrawals.push(mov);
console.log(withdrawals)


//accumulator -> SNOWBALL
const balance = movements.reduce((acc, curr) =>
    acc + curr, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2)

//Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov)
        return acc;
    else {
        return mov
    }
}, movements[0])

console.log(max)

const dogarr = [5, 2, 4, 1, 15, 8, 3]

// const humanyears = dogarr.reduce(function(acc, curr){
//   if (curr <= 2 ){

//   }
// })
//   const humanage = dogarr.map((curr, i) => {
//     if (curr <= 2){
//       // console.log(2 * curr)
//       return 2 * curr
//     } 
//     else {
//       // console.log(16 + curr * 4)
//       return 16 + curr * 4
//     }
//   })

// console.log(humanage)

//   const adultDogs = humanage.filter(function(curr){
// return curr > 18
//   })

// console.log(adultDogs)

// const avgDogs = adultDogs.reduce(function(acc, curr){
//   return acc + curr
// }, 0)

// console.log(avgDogs / adultDogs.length)


function dogs(arr) {
    const humanage = arr.map((curr, i) => {
        if (curr <= 2) {
            return 2 * curr
        }
        else {
            return 16 + curr * 4
        }
    })
    const adultDogs = humanage.filter(function (curr) {
        return curr > 18
    })
    console.log(humanage)
    console.log(adultDogs)
    const avgDogs = adultDogs.reduce(function (acc, curr) {
        return acc + curr
    }, 0) / adultDogs.length;


    return avgDogs
}

function calcAverageHumanAge(age) {
    const ages = age.map((cur, i) => cur <= 2 ? 2 * cur : 16 + cur * 4)
        .filter(cur => cur > 18)
        .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

}
console.log(calcAverageHumanAge(dogarr))
console.log(dogs(dogarr))

const eurToUsd2 = 1.1;

//pipeline
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd2)
    .reduce((acc, mov) => acc + mov, 0)

console.log(totalDepositsUSD)




const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}💲`

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}💲`

    const interest = acc.movements
        .filter((mov, i, arr) => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}💲`;
}


calcDisplaySummary(account1);

const firstWithdrawal = movements.find(mov => mov < 0)

console.log(movements)
console.log(firstWithdrawal);
console.log(accounts);


const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account)

function foraccount(accounts) {
    for (const acc of accounts) {
        if (acc.owner == 'Jessica Davis') {
            console.log(acc)
            return acc
        }
    }
}

foraccount(accounts)

//event handler

let currentAccount;
btnLogin.addEventListener('click', function (e) {
    //Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username ===
        inputLoginUsername.value);



    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;
        //clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur()

        //Update UI
        updateUI(currentAccount)

    };
});



btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(inputTransferAmount)
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username) {
        // Doing the Transfer
        console.log(currentAccount)
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //update UI
        updateUI(currentAccount)
    }
});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some((mov) => mov >= amount * 0.1)) {
        //ADD movement
        currentAccount.movements.push(amount);
        //update ui
        updateUI(currentAccount)
    }
    inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    console.log('Delete');
    console.log(currentAccount)
    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username)
        console.log(index)
        //Delete Account
        accounts.splice(index, 1);

        //Hide UI
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
});

console.log(movements);



//EQUALITY
console.log(movements.includes(-130));

//CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

//Every 
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback 
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2,], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);

// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov)=> acc + mov, 0)
// console.log(overalBalance)

//flat
const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance)

//flatmap - only goes one level deep
const overalBalance2 = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2)


//Strings
const owners = [`Jonas`, `Zach`, `Adam`, `Martha`];
console.log(owners.sort());
console.log(owners)

// Numbers
console.log(movements);


//return < 0, A, B (keep order)
// return > 0, B, A (switch order)

//Ascending
// movements.sort((a, b) => {
//     if( a > b){
//         return 1
//     }
//     if (a > b ){
//         return -1;
//     }
// })
// console.log(movements);

// //Descending
// movements.sort((a, b) => {
//     if( a > b){
//         return -1
//     }
//     if (a > b ){
//         return 1;
//     }
// })
// console.log(movements);

//Ascending
movements.sort((a, b) => a - b);
console.log(movements);

//Descending
movements.sort((a, b) => b - a);
console.log(movements)

const arri = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Empty arrays + fill method
const x = new Array(7);
console.log(x);

// x.fill(1);
x.fill(1, 3, 5)
console.log(x)

arri.fill(23, 4, 6)
console.log(arr)

//array.from
const y = Array.from({length: 7}, () => 1);
console.log(y)

const z = Array.from({length: 7}, ( _, i) => i + 1);
console.log(z)



labelBalance.addEventListener('click', function(){
    console.log(document.querySelectorAll('.movements__value'))
    const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('💲', ''))
    );
    console.log(movementsUI);

});

