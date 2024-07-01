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


const getCountryData = function (country) {
    //country 1
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbor = data[0].borders[0]

            if (!neighbor) return;

            // Country 2
            return fetch(`https://restcountries.com/v2/alpha/${neighbor}`)
        })
        .then(function (response) { return (response.json()) })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err} 🥰`);
            renderError(`Something went wrong 🥰🥰 ${err.message}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1; 
        })
};


btn.addEventListener('click', function () {
    getCountryData('usa')
})

getCountryData('asdfddfsafasf')

// getCountryData('usa')
// getCountryData('germany')

