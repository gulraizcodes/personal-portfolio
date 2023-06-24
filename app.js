/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav-bar__menu');
const navToggle = document.querySelector('.nav-bar__hamburger');
const navClose = document.querySelector('.nav-bar__close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*===== CLOSE MENU WHEN CLICKING OUTSIDE =====*/
document.addEventListener('click', (event) => {
    const target = event.target;
    if (navMenu.classList.contains('show-menu') && target !== navToggle && !navToggle.contains(target) && target !== navMenu && !navMenu.contains(target)) {
        navMenu.classList.remove('show-menu');
    }
});

/*===== CLOSE MENU WHEN WE PRESS ESCAPE KEY =====*/
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
});



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-bar__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})


sr.reveal(`main-page__name`, {origin: 'top'});


