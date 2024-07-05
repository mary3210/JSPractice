'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
    // const language = Object.values(data.languages)[0]
    console.log(data)
    const language = Object.values(data.languages);
    console.log(language)
    const currency = Object.values(data.currencies);
    // const currency = Object.values(data.currencies)[0];

    const html = `
    <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name['common']}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency[0].name}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;

}

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);

}

// const getCountryData = function (country) {

//AJAX call country 1
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //render country 1
//     renderCountry(data)

//     // Get neighbour country(2)
//     const [neighbor] = data.borders;

//     if (!neighbor) return;

//     //AJAX call country 1
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function(){
//         const [data2] = JSON.parse(this.responseText);
//         console.log(data2)
//         renderCountry(data2, 'neighbor')
//     })
// })

//}
////////////////////////////////////////////////////////////////////////////////////
// const request = fetch('https://restcountries.com/v3.1/name/portugal')
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`Country not found (${response.status})`);
        console.log(response)
        return response.json()
    })
}

const getCountryData = function (country) {
    //country 1
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
        .then(data => {
            console.log(data[0]);
            renderCountry(data[0]);

            if (!data[0]?.borders) { throw new Error('No neighbor found!') };
            const neighbor = data[0].borders[0];
            console.log(neighbor)
            // const neighbor = 'dfas'

            // if (!neighbor) {throw new Error('No neighbor found!')};
            // const neighbor = data[0].borders[0]
            console.log(neighbor)

            // Country 2
            return getJSON(
                `https://restcountries.com/v3.1/alpha/${neighbor}`, 'Country not found');
        })
        .then(data => renderCountry(data[0], 'neighbor'))
        .catch(err => {
            console.error(`${err} 🥰`);
            renderError(`Something went wrong 🥰🥰 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        })
};


btn.addEventListener('click', function () {
    getCountryData('portugal')
})

// getCountryData('australia')

// getCountryData('usa')
// getCountryData('germany')

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
// function whereAmI(lat, lng) {
//     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`).then(response => {
//         return response.json()
//     }).then(data => {
//         console.log(data)
//         if (!data.city || !data.countryName) {
//             throw new Error('this country does not contain a city or countryName. Is this even a country??')
//         }
//         console.log(`You are in ${data.city}, ${data.countryName}`)
//         console.log(data.countryName)
//         getCountryData(data.countryName)
//     }).catch(err => {
//         console.error(`${err} 🥰`);
//         renderError(`Something went wrong 🥰🥰 ${err.message}. Try again!`);
//     })

// }


// whereAmI(44, 88)



console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res =>
    console.log(res));
console.log('Test End');


const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lottery draw is happening 🔮');
    // setTimeout(function(){
    //     if (Math.random() >= 0.5) {
    //         resolve('you WIN 💰')
    //     } else {
    //         reject(new Error('You lost your money 💸'));
    //     }
    // }, 2000);
    resolve('you WIN 💰')
});

console.log('mpp')
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//promisifying setTimeout
const wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(() => console.log('I waited for 1 second'));