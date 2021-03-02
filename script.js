//to handle the transition 
const navbar = document.getElementById('header-area');
const mobileNavChange = document.getElementById('mobile-nav');
window.onscroll = function() {
    let scrollY = window.scrollY;
    if (scrollY > 210) {
        navbar.classList.add('position');
        mobileNavChange.classList.add('mobile-nav-color');
    } else {
        navbar.classList.remove('position');
        mobileNavChange.classList.remove('mobile-nav-color');

    }
}

//showing the mobile nav on click 
const mobileNav = document.getElementById('mobile-list');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
mobileMenuBtn.addEventListener('click' , () => {
    mobileMenuBtn.classList.toggle('clicked');
    mobileNav.classList.toggle('show');
});

const bookWindow = document.querySelector('.book-now');
const bookBtn = document.querySelector('#bookBtn');
const bookBtn2 = document.querySelector('#book-now-btn');
const bookClose = document.querySelector('#close-book');
bookBtn.addEventListener('click' , ()=> {
    bookWindow.style.display = 'flex';
})
bookBtn2.addEventListener('click' , ()=> {
    bookWindow.style.display = 'flex';
})
bookClose.addEventListener('click' , ()=> {
    bookWindow.style.display = 'none';
})

//showing nad hiding the video
const videoShowBtn = document.getElementById('toggle-vid-btn');
const videoHideBtn = document.getElementById('closeVideo');
const video = document.getElementById('video-window');
videoShowBtn.addEventListener('click' , ()=> {
    video.style.display = 'flex';
});
videoHideBtn.addEventListener('click' , ()=> {
    video.style.display = 'none';
});