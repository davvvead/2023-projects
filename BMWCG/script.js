// Load icons
const icons = document.querySelectorAll('#loader img');
let i = 1;

// console.log(1);

// LOADER ANIMATION

setInterval(()=>{
    i++;
    const icon = document.querySelector('#loader img.change')

    icon.classList.remove('change');

    if(i > icons.length) {
        icons[0].classList.add('change');
        i = 1
    } else {
        icon.nextElementSibling.classList.add('change');
    }

}, 1500)

// load elements
let loader = document.querySelector('#loader');
let notLoader = document.querySelectorAll('.not-loader');

// Show loader
loader.style.display = 'block';

setTimeout(hideLoader, 4000);

function hideLoader(){
    loader.style.display = 'none';
    notLoader.forEach(elementShow);

    function elementShow(item)
    {
        item.style.display = 'block'
    }
}

// POSTER CLOSE BUTTON
//  load loader button
let closeBtn = document.getElementsByClassName('close');
const posterdiv = document.getElementById('poster');

addEventListener('click', hidePoster);

function hidePoster(){
    posterdiv.style.display = 'none';
}

if( posterdiv.style.display !== 'none'){
    setTimeout(autohide, 10000);

    function autohide(){
        posterdiv.style.display = 'none';
    }
}
