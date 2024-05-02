'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//selecting elements
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section')
console.log(allSections)

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn');

// Creating and inserting elements


const message = document.createElement('div')
message.classList.add('cookie-message');

message.innerHTML = 'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';


//first child of the element
// header.prepend(message);
//last child of the element
header.append(message);
// header.append(message.cloneNode(true));

header.before(message);
header.after(message);

//Delete elements
document.querySelector('.btn--close-cookie').
  addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  })


//style
message.style.backgroundColor = '#37383d'
message.style.width = '120%';

console.log(message.style.height)
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

console.log(message.style.height)

document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src)
console.log(logo.alt)
console.log(logo.className)

logo.alt = 'Beautiful minimalist logo';


//Non-standard
// console.log(logo.designer)
logo.setAttribute('company', 'Bankist')

//absolute pathing
console.log(logo.src)
//Relative pathing
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

//Classes 
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

//Don't use
logo.className = 'jonas'

/////////////////////////////////////////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
console.log(btnScrollTo)
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y', window.scrollX, window.scrollY)

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // )

  // section1.scrollIntoView({ behavior: 'smooth'})
})

// const h1 = document.querySelector('h1')

// h1.addEventListener('mouseenter', function(e){
//     alert('addEventListener: Great you are reading the heading :D')
// })

// h1.onmouseenter = function(e) {
//     alert('onmouseenter: Great! You are reading the heading :D')
// }



//////////////////////////////////////////////////////////////////////////////

///rgb(255,255,255)
// , e.target, e.currentTarget);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor()
//     console.log('LINK', e.target, e.currentTarget);
//     console.log(e.currentTarget === this);

//     e.stopPropagation();

// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor()
//     console.log('CONTAINER', e.target, e.currentTarget);
// })

// document.querySelector('.nav').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor()
//     console.log('NAV'})

/////////////////////////////////////////////////////////////////////////////////
// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function(el){
//     el.addEventListener('click', function(e) {
//         console.log('Link');
//         e.preventDefault();
//         const id = this.getAttribute('href')
//         console.log(id)
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//     });
// });

// 1.Add event listener to common parent element
//2. Determin what element originated the event

// document.querySelector('.nav__links').addEventListener
// ('click', function(e){
//     console.log(e.target);

//     //Matching strategy
//     if(e.target.classList.contains('nav__link')){
//         const id = this.getAttribute('href');
//         console.log(id)
//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth'
//         })
//     }
// })



///////////////////////////////////////////////////////////////
const h1 = document.querySelector('h1');

//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary';

//Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

///////////////////////////////////////////////////////////////////////////
// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked)

  //Guard clause
  if (!clicked) return;


  //active tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  console.log(clicked)
  console.log(clicked.dataset)
  console.log(clicked.dataset.potato)
  //activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations_content--active');

});


//Menu Fade animation
const handleHover = function (e) {
  console.log(this)
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    console.log(` link ${link}`)
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    console.log(siblings)
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}


const nav = document.querySelector('.nav')
console.log(nav)
nav.addEventListener('mouseover', handleHover.bind(0.5))


nav.addEventListener('mouseout', handleHover.bind(1))


nav.addEventListener('mouseout', function (e) {
  handleHover(e, 0.5);
})

//Sticky Navigation
const initialCoords = section1.getBoundingClientRect()

window.addEventListener('scroll', function (e) {


  if (this.window.scrollY > initialCoords.top) { nav.classList.add('sticky') }
  else {
    nav.classList.remove('sticky');
  }

})

//////////////////////////////////////////////////

// const obsCallback = function (entries, observer){
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.1
// }

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1)

// const header1 = document.querySelector('.header');
// const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight)
// console.log(header1)
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry)

//   if (!entry.isIntersecting)
//     nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// }

// const headerObserver = new IntersectionObserver(
//   stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`
// }
// );
// headerObserver.observe(header1);

//Reveal Sections
const allSectionss = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
  console.log(entries)
  const [entry] = entries;
  console.log(entry)
  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
})

allSectionss.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');

})

//Lazy loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer){
  const [entry] = entries;
  console.log(entry)

  if (!entry.isIntersecting) return;

  //Replace src attribute with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
  entry.target.addEventListener('load', function (){
    entry.target.classList.remove('lazy-img');

  })

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg,
  {
    root: null,
    threshold: 0,
    rootMargin: '200px'
  })

imgTargets.forEach(img =>imgObserver.observe(img));
