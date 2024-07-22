// Importing Module
// import  {addToCart, totalPrice as price, totalQuantity}  from "./shoppingCart.js";
// console.log(price, totalQuantity);
// import 'core-js/actual';
console.log('Importing module');
// console.log(shippingCost);
// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.addToCart('bread','5')
// console.log(shoppingCart.totalPrice)

import add, { cart } from './shoppingCart.js';
add('pizza', 2)
add('bread', 2)
add('apples', 2)

console.log(cart)

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data)
// console.log('somthing')

// const getLastPost = async function(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     console.log(data)

//     return {title: data.at(-1).title, text: data.at(-1).body };
// }

// const lastPost2 = await getLastPost();
// console.log(lastPost2)

// const ShoppingCart2 = (function() {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function(product, quantity){
//         cart.push({product, quantity});
//         console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`)
//     };

//     const orderStock = function(product, quantity){
//         console.log(`${quantity} ${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2)


import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
// node_modules\lodash-es\cloneDeep.js
const state = {
    cart: [
        { product: 'bread', quantity: 5},
        { product: 'pizza', quantity: 5},
    ],
    user: { loggedIn: true},
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);


console.log(stateDeepClone);

// if(module.hot){
//     module.hot.accept()
// }

class Person{
    #greeting ='Hey'
    constructor(name){
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}
const jonas = new Person('Jonas');


console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(function(x){
    return console.log(x);
})


// import 'core-js/stable';
// //instead of importing everything
// import 'core-js/stable/array/find';
// import 'regenerator-runtime/runtime'