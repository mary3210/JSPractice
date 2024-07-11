'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

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

// const getCountryData = function (country) {
//     //country 1
//     getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//         .then(data => {
//             console.log(data[0]);
//             renderCountry(data[0]);

//             if (!data[0]?.borders) { throw new Error('No neighbor found!') };
//             const neighbor = data[0].borders[0];
//             console.log(neighbor)
//             // const neighbor = 'dfas'

//             // if (!neighbor) {throw new Error('No neighbor found!')};
//             // const neighbor = data[0].borders[0]
//             console.log(neighbor)

//             // Country 2
//             return getJSON(
//                 `https://restcountries.com/v3.1/alpha/${neighbor}`, 'Country not found');
//         })
//         .then(data => renderCountry(data[0], 'neighbor'))
//         .catch(err => {
//             console.error(`${err} 🥰`);
//             renderError(`Something went wrong 🥰🥰 ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })
// };


// btn.addEventListener('click', function () {
//     getCountryData('portugal')
// })

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



// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res =>
//     console.log(res));
// console.log('Test End');


// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log('Lottery draw is happening 🔮');
//     // setTimeout(function(){
//     //     if (Math.random() >= 0.5) {
//     //         resolve('you WIN 💰')
//     //     } else {
//     //         reject(new Error('You lost your money 💸'));
//     //     }
//     // }, 2000);
//     resolve('you WIN 💰')
// });

// console.log('mpp')
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

// wait(2).then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// }).then(() => console.log('I waited for 1 second'));




// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     position => resolve(position), 
//         //     err => console.err(err)
//         // );
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }

// getPosition().then(pos => console.log(pos));

// function whereAmI(lat, lng) {

//     const whereAmI = function () {
//         getPosition().then(pos => {
//             const { latitude: lat, longitude: lng } = pos.coords;
//         })
//     }

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

// btn.addEventListener('click', whereAmI);


/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/


// function createImage(imgPath) {
//     return new Promise(function (resolve, reject) {
//         let picture = document.createElement('img')
//         picture.src = imgPath;
//         let images = document.querySelector('.images')
//         images.appendChild(picture);
//         picture.addEventListener('load', function(){
//             console.log('yay it worked')
//             resolve(picture)
//         })
//         picture.addEventListener('error', function(){
//             console.error('you did something wrong :(')
//             reject(new Error('Image not found'));
//         })


//     });
// }


// createImage('./limg/img-3.jpg').then((img) => console.log(img)).catch(err=> console.log(err.message))
// let currentImg;

// createImage('img/img-1.jpg')
//   .then( img => {
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then((img) => {
//     currentImg = img
//     console.log('image 2 loaded')
//     return wait(2)
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        console.log('s')
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}


const whereAmI = async function (country) {
    try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // // Reverse geocoding
    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
    const dataGeo = await resGeo.json();
    console.log(dataGeo)

    //Country data
    // fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res))
    //Geolocation
    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.countryCode}`);
    if(!res.ok) throw new Error('Problem getting location data')

    const data = await res.json()
    renderCountry(data[0]) 

    return `You are in ${dataGeo.city}, ${dataGeo.countryCode}`;
    } catch(err){
        console.error(err);
        renderError(`${err.message}`)

        //Reject promise returned from async function
        throw err;
    }

}

console.log(`1: Will get location`);

// const city = whereAmI()
// console.log(city)
// whereAmI().then(city => console.log(`2: ${city}`)).catch(err => console.error(`2: ${err.message} 🥰`))
// .finally(()=> console.log(`3: Finished getting location`) )


// (async function(){
// try{
// const myLocation = await whereAmI()
// console.log(`2: ${myLocation}`)
// }
// catch(err){
//     console.error(`2: ${err.message} 🥰`)
// }
// console.log(`3: Finished getting location`)
// })();

// try{
// let y = 1;
// const x = 2;
// x = 3;
// } catch (err) {
//     alert(err);
// }

const get3Countries = async function(c1, c2, c3){
    try{
       

        const data = await Promise.all([getJSON(`https://restcountries.com/v3.1/name/${c1}`),
         getJSON(`https://restcountries.com/v3.1/name/${c2}`),
        getJSON(`https://restcountries.com/v3.1/name/${c3}`)
    ])
        console.log(data.map(d => d[0].capital));

    }catch(err){
        console.error(err);
    }
}

get3Countries('portugal','canada','tanzania');

//Promise.race
(async function(){
    const res = await Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`)])
    console.log(res[0]);
})();

const timeout = function(sec){
    return new Promise(function(_, reject){
        setTimeout(function(){
            reject(new Error('Request took too long!'))
        }, sec * 1000)
    })
};

Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/tanzania`),
    timeout(1),
])
    .then(res => console.log(res[0]))
    .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Another Success'),
]).then(res => console.log(res))

//Promise.any [ES2021]
Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success')
])
.then(res => console.log(res))
.catch(err=> console.error(err));


/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

 function CreateImage(imgPath){
    return new Promise(function (resolve, reject) {
        let picture = document.createElement('img')
        picture.src = imgPath;
        let images = document.querySelector('.images')
        images.appendChild(picture);
        picture.addEventListener('load', function(){
            console.log('yay it worked')
            resolve(picture)
        })
        picture.addEventListener('error', function(){
            console.error('you did something wrong :(')
             reject(new Error('Image not found'));
        })
    });
}

(async function loadNPause(){
    try{
    const res = await CreateImage('img/img-1.jpg')
    console.log(res)
    console.log('image 1 loaded')
    await wait(2);
    res.style.display = 'none';
    const res2 = await CreateImage('img/img-2.jpg');
    console.log('image 2 loaded')
    await wait(2)
    res2.style.display = 'none';
    } catch(err) {
        console.error(err)
    }
})()

async function loadAll(imgArr){
    const imgs = await Promise.all(imgArr.map((img) =>
        CreateImage(img)
    ))
    console.log(imgs)
    for (let i = 0; i < imgs.length; i++){
        imgs[i].classList.add("parallel")
    }

}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'])

// function createImage(imgPath) {
//     return new Promise(function (resolve, reject) {
//         let picture = document.createElement('img')
//         picture.src = imgPath;
//         let images = document.querySelector('.images')
//         images.appendChild(picture);
//         picture.addEventListener('load', function(){
//             console.log('yay it worked')
//             resolve(picture)
//         })
//         picture.addEventListener('error', function(){
//             console.error('you did something wrong :(')
//             reject(new Error('Image not found'));
//         })


//     });
// }


// createImage('./limg/img-3.jpg').then((img) => console.log(img)).catch(err=> console.log(err.message))
// let currentImg;

// createImage('img/img-1.jpg')
//   .then( img => {
//     currentImg = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then((img) => {
//     currentImg = img
//     console.log('image 2 loaded')
//     return wait(2)
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));
