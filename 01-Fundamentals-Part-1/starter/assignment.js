
//lecture: Values and Variables
const country = "USA";
let continent = "North America";
let population = 331900000.00;
console.log(country, continent, population)

//Lecture: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

///Lecture: let, const and var
language = "english";
// country = "Canada"
//Uncaught TypeError: Assignment to constant variable.

//lecture: Basic Operators
console.log(population/2)
let result = population/2;
result ++
console.log(result)
let finland = 6000000;
console.log(population > finland)
let avgPop = 33000000;
console.log(avgPop < population)
let description = country + " is in " + continent+ ", and its " + population + " people speak " + language
description = `${country} is in ${continent} and its ${population} people speak ${language}`
console.log(description)
