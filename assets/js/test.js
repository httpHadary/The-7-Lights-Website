// Select landing page Element

let landingPage = document.querySelector(".banner-area");

// Get Array Of Image
// let imgsArray = ["1.png","2.png","3.png"]


// Function To Randomize Image

// setInterval(() => {
//   let randomNumber = Math.floor(Math.random() * imgsArray.length);
  
//   landingPage.style.backgroundImage = 'Url("/' + imgsArray[randomNumber] + '")';

// }, 1500)


// Select All Bullets

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links

const allLinks = document.querySelectorAll(".navbar-menu ul li a");


function scrollToSomewhere(elements) {
  elements.forEach(el => {
    el.addEventListener("click", (e) => {

      // if no data-section → normal link
      if (!el.dataset.section) return;

      const target = document.querySelector(el.dataset.section);

      // if target not found → normal link
      if (!target) return;

      // otherwise smooth scroll
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handel Active State

function handleActive(ev) {
  // Remove Active Class From All Childrens

  ev.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
  });

  // Add Active Class On Self
  ev.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocaliItem = localStorage.getItem("bullets_option");

if(bulletLocaliItem !== null){
  
  bulletsSpan.forEach(span => {
    span.classList.remove("active");
  });

  if(bulletLocaliItem === 'block'){

    bulletsContainer.style.display = 'block';

    document.querySelector(".bullets-option .yes").classList.add("active");
    
  }else{
    
    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active")

  }
}

bulletsSpan.forEach(span =>{

  span.addEventListener("click", (e) => {

    if(span.dataset.display === 'show'){
        bulletsContainer.style.display = 'block';

        
      localStorage.setItem("bullets_option", 'block');
    }else{
      bulletsContainer.style.display = 'none';
    
      localStorage.setItem("bullets_option", 'none');
    }

    handleActive(e);

  });
});

// Handel Active State

function handleActive(ev) {
    // Remove Active Class From All Childrens
  
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
    });
  
    // Add Active Class On Self
    ev.target.classList.add("active");
  }

