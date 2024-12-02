let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('avtive');
}

window.onscroll= () => {
    navbar.classList.remove('avtive');
}

const sr = ScrollReveal ({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset:true
});

sr.reveal('.home-text,.home-img, .about-img, .about-text, .box, .s-box, .connect-text, .btn, .contact-box', {delay:200})



