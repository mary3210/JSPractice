function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

const usa = describeCountry("USA", "333 million", "Washington DC");
console.log(usa);
const southKorea = describeCountry("South Korea", "51 million", "Seoul");
console.log(southKorea);
const japan = describeCountry("Japan", "125 million", "Tokyo");
console.log(japan);

//------------------------------------------------------------------------------------------

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const usa1 = percentageOfWorld1(333);
console.log(usa1);

const southKorea1 = percentageOfWorld1(51);
console.log(southKorea1);

const japan1 = percentageOfWorld1(125);
console.log(japan1);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const usa2 = percentageOfWorld2(333);
const southKorea2 = percentageOfWorld2(51);
const japan2 = percentageOfWorld2(125);

console.log(usa2, southKorea2, japan2);

//------------------------------------------------------------------------------------------------

const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const usa3 = percentageOfWorld3(333);
console.log(usa3);

//--------------------------------------------------------------------------------------------------

function describePopulation(country, population) {
  return `${country} has ${population} million people which is about ${percentageOfWorld1(
    population
  )} population of the world.`;
}

const aus = describePopulation("Australia", 26);
console.log(aus);
const cad = describePopulation("Canada", 39);
console.log(cad);
const uk = describePopulation("United Kingdom", 68);
console.log(uk);

//----------------------------------------------------------------------------------------------------

const populations = [333, 51, 125, 26];
console.log(populations);

if (populations.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

const percentages = [
  percentageOfWorld1(333),
  percentageOfWorld1(51),
  percentageOfWorld1(125),
  percentageOfWorld1(26),
];
console.log(percentages);

//---------------------------------------------------------------------------------------------------------

const neighbors = ["Canada", "Mexico"];
console.log(neighbors);
neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if (neighbors != neighbors.includes("Germany")) {
  console.log("");
}

//----------------------------------------------------------------------------------------------------------------

const myCountry = {
  country: "USA",
  capital: "Washington DC",
  language: "English",
  population: 333,
  neighbors: ["Canada", "Mexico"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language} speaking people, 
${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
    return this.isIsland;
  },
};

//----------------------------------------------------------------------------------------------------------------

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, 
${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
);

console.log((myCountry.population += 2));
const two = 2;
console.log((myCountry["population"] -= 2));

//----------------------------------------------------------------------------------------------------------------

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

//-----------------------------------------------------------------------------------------------------------------

for (let i = 1; i < 51; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

//-----------------------------------------------------------------------------------------------------------------

// const populations = [333, 51, 125, 26];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
console.log(percentages);

//-------------------------------------------------------------------------------------------------------------------

const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    console.log(`neighbor: ${listOfNeighbors[i][j]}`);
  }
}

//--------------------------------------------------------------------------------------------------------------------

const percentages3 = [];
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
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

let i = -1;
console.log('---only strings---')
  while (i < jonas.length ) {
    i++
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);
    
  }
  console.log('---BREAK WITH NUMBER---')
  while(i < jonas.length) {
    i++
    console.log(jonas[i])
    if (typeof jonas[i] !== 'number') break;
        console.log(jonas[i], typeof jonas[i]);
  }

  //this solution would be better with a for loop because we know how many iterations with using the length method on the array. 
//-------------------------------------------------------------------------------------------------------------------------