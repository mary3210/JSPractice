import * as model from './model.js'
import recipeView from './views/recipeView.js'
// import icons from '../img/icons.svg' //parcel 1

import 'core-js/stable'
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1)
    console.log(id)

    if(!id) return;
    
    recipeView.renderSpinner()
    // 1) Loading Recipe
    await model.loadRecipe(id);

   
    // 2) Rendering recipe
    recipeView.render(model.state.recipe)


  } catch (err) {
    alert(err)
  }
};

const array1 = ['hashchange', 'load']
array1.forEach(e => window.addEventListener(e, showRecipe))


