const mobile = document.querySelector('.fa-bars');
const closeMobileNav = document.querySelector('.fa-times');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Listening for a click on the mobile toggle
mobile.onclick = function toggleMoblie(){
    if(mobileNav.style.display = 'none'){
        console.log('mobile');
        mobileNav.style.display = 'block';
    }
}

// Listening for a click on the mobile nav close button
closeMobileNav.onclick = function closeMoblie(){
    if(mobileNav.style.display != 'none'){
        mobileNav.style.display = 'none';
    }
}

// Listening for click event on mobile links
mobileLinks.forEach(function(mobileLink) {
    mobileLink.addEventListener('click', closeNav);
})

function closeNav() {
    if(mobileNav.style.display != 'none'){
        mobileNav.style.display = 'none';
    }
}