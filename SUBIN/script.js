const cardTitles = document.querySelectorAll('.card-title');

// console.log(cardTitles);

cardTitles.forEach(function(title){
    title.parentElement.addEventListener('mouseover', function(e){
        console.log(1);
    })
})