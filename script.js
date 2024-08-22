// Navigation (hamburger menu)
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navItemEls = document.querySelectorAll('.nav__item');

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
});

navItemEls.forEach(navItemEl => {
  navItemEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open');
  });
});

/*
// Shop Section (carousel)
const imageWrapperShop = document.querySelector('.image-wrapper');
const imageItemsShop = document.querySelectorAll('.image-wrapper > *');
const imageLengthShop = imageItemsShop.length;
const perViewShop = 3;
let totalScrollShop = 0;
const delayShop = 2000;

// Set the number of images per view in CSS
imageWrapperShop.style.setProperty('--per-view', perViewShop);

// Clone the first few images to create a seamless loop
for (let i = 0; i < perViewShop; i++) {
  imageWrapperShop.insertAdjacentHTML('beforeend', imageItemsShop[i].outerHTML);
}

// Start the automatic scrolling
let autoScrollShop = setInterval(scrollingShop, delayShop);

function scrollingShop() {
  totalScrollShop++;
  if (totalScrollShop === imageLengthShop + 1) {
    clearInterval(autoScrollShop);
    totalScrollShop = 1;
    imageWrapperShop.style.transition = '0s';
    imageWrapperShop.style.left = '0';
    autoScrollShop = setInterval(scrollingShop, delayShop);
  }
  
  // Calculate the width of each image including the gap
  const widthElShop = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24;
  imageWrapperShop.style.left = `-${totalScrollShop * widthElShop}px`;
  imageWrapperShop.style.transition = '.3s';
}
*/


// Partner Section (carousel)
const imageWrapper1 = document.querySelector('.image-wrapper1');
const imageItems1 = document.querySelectorAll('.image-wrapper1 > *');
const imageLength1 = imageItems1.length;
let perView1 = window.innerWidth <= 768 ? 1 : 3; // Set perView based on screen size
let totalScroll1 = 0;
const delay1 = 2000;

// Set the number of images per view in CSS
imageWrapper1.style.setProperty('--per-view', perView1);

// Clone the first few images to create a seamless loop
for (let i = 0; i < perView1; i++) {
  imageWrapper1.insertAdjacentHTML('beforeend', imageItems1[i].outerHTML);
}

// Start the automatic scrolling
let autoScroll1 = setInterval(scrolling1, delay1);

function scrolling1() {
  totalScroll1++;
  if (totalScroll1 === imageLength1 + 1) {
    clearInterval(autoScroll1);
    totalScroll1 = 1;
    imageWrapper1.style.transition = '0s';
    imageWrapper1.style.left = '0';
    autoScroll1 = setInterval(scrolling1, delay1);
  }
  
  // Calculate the width of each image including the gap
  const widthEl1 = document.querySelector('.image-wrapper1 > :first-child').offsetWidth + 24; // Default gap of 24px
  imageWrapper1.style.left = `-${totalScroll1 * widthEl1}px`;
  imageWrapper1.style.transition = '.3s';
}

// Update perView and reset carousel on window resize
window.addEventListener('resize', () => {
  perView1 = window.innerWidth <= 768 ? 1 : 3;
  imageWrapper1.style.setProperty('--per-view', perView1);

  // Reset the carousel to prevent misalignment
  clearInterval(autoScroll1);
  totalScroll1 = 0;
  imageWrapper1.style.left = '0';
  imageWrapper1.innerHTML = ''; // Clear existing items

  // Re-add original and cloned items
  for (let i = 0; i < imageLength1; i++) {
    imageWrapper1.insertAdjacentHTML('beforeend', imageItems1[i].outerHTML);
  }
  for (let i = 0; i < perView1; i++) {
    imageWrapper1.insertAdjacentHTML('beforeend', imageItems1[i].outerHTML);
  }

  autoScroll1 = setInterval(scrolling1, delay1);
});


/* BLOG SECTION */


/*  FORM SECTION  */ 


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Check if reCAPTCHA is checked
  var response = grecaptcha.getResponse();
  if(response.length === 0) { 
      alert("Please verify you are not a robot.");
      return;
  }
  
  // Normally here you would send the form data to your server
  alert('Form submitted successfully!');
  
  // Reset the form
  document.getElementById('contact-form').reset();
  grecaptcha.reset();
});


