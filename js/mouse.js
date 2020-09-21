let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav--mouse li')
let mainLogo = document.querySelector('.logo')
let landing = document.querySelector('#LANDING')

let color1 = 'rgb(120, 190, 239)';
let color2 = 'rgb(238, 154, 110)';


//CURSOR
window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

// LOGO ANIMATION
mainLogo.addEventListener('mouseover', () => {
    mainLogo.classList.add('hovered-logo');
    //mouseCursor.classList.add('link-grow');
})
mainLogo.addEventListener('mouseleave', () => {
    mainLogo.classList.remove('hovered-logo');
    //mouseCursor.classList.remove('link-grow');
})


//NAVBAR
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hovered-link');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hovered-link');

    });
});

//