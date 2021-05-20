const getById = (id) => document.getElementById(`${id}`)

function hide(name) {
    return name.classList.add('hidden')
};
function show(name) {
    return name.classList.remove('hidden')
};


// mobile menu exit btn
let burgerBtn = document.querySelector('.burger-button');
let menuCloseBtn = document.querySelector('.exit-button');
let mobileNavigation = document.querySelector('.mobile-nav')
burgerBtn.addEventListener('click', function () {
    mobileNavigation.style.height = "100%"
    menuCloseBtn.style.display = "block"
})
menuCloseBtn.addEventListener('click', function () {
    mobileNavigation.style.height = "0%"
    menuCloseBtn.style.display = "none"
})

// Menu modal
let mealCard = document.querySelectorAll('.meal');
let img = document.querySelectorAll('.menu-img');
let captionText = document.querySelectorAll(".caption");
let menuCard = document.querySelectorAll(".menu-card");
let imageId = document.querySelectorAll('.img');
let closeBtn = document.querySelectorAll('.close');

for (let i = 0; i < img.length; i++) {
    let captionSrc = menuCard[i].childNodes;
    img[i].addEventListener('click', function () {
        mealCard[i].style.display = "block";
        imageId[i].src = this.src;
        captionText[i].innerHTML = captionSrc[3].textContent;
    })
    closeBtn[i].addEventListener('click', function () {
        mealCard[i].style.display = "none"
    })
}


// Menu toggle
let menuBtn = document.querySelectorAll('.menu-button');
let menu = document.querySelectorAll('.menu-container');
let allBtn = getById('all');

//add event listeners to all of the buttons
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn.item(i).addEventListener("click", function () {
        //save the id of the button that was clicked
        let clickedButtonId = this.id;
        //hide all the tabs on the screen 
        for (let x = 0; x < menu.length; x++) {
            hide(menu.item(x));
        }
        //show only the one that corresponds to the id that we clicked
        show(getById(clickedButtonId + '-menu'));
    });
}

allBtn.addEventListener('click', function(){
    menu.forEach(el => show(el))
})