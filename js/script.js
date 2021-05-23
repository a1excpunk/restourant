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
let dishCard = document.querySelectorAll('.dish');
let menuImg = document.querySelectorAll('.menu-img');
let captionText = document.querySelectorAll(".caption");
let menuCard = document.querySelectorAll(".menu-card");
let imageId = document.querySelectorAll('.img');
let closeBtn = document.querySelectorAll('.close');

for (let i = 0; i < menuImg.length; i++) {
    let captionSrc = menuCard[i].childNodes;
    menuImg[i].addEventListener('click', function () {
        dishCard[i].style.display = "block";
        imageId[i].src = this.src;
        captionText[i].innerHTML = captionSrc[3].textContent;
    })
    closeBtn[i].addEventListener('click', function () {
        dishCard[i].style.display = "none"
    })
}


// Menu toggle
let menuContainer = document.querySelectorAll('.menu-container');
let menuBtn = document.querySelectorAll('.menu-button');
let allBtn = getById('all');

if (allBtn) {
    allBtn.addEventListener('click', function () {
        menuContainer.forEach(el => show(el))
    })
}

for (let i = 0; i < menuBtn.length; i++) {
    menuBtn.item(i).addEventListener("click", function () {
        let clickedButtonId = this.id;
        for (let x = 0; x < menuContainer.length; x++) {
            hide(menuContainer.item(x));
        }
        show(getById(clickedButtonId + '-menu'));
    });
}


// show TOP button on scroll
let topBtn = document.querySelector('.top-button')

window.addEventListener('scroll', function () {
    if(topBtn){
        if (document.documentElement.scrollTop > 100) {
            topBtn.classList.remove('hidden')
        }
        if (document.documentElement.scrollTop === 0) {
            topBtn.classList.add('hidden')
        }
    }
})

// attach active-button atate
let activeBtn = document.querySelector('.active-button');
let menuBtns = document.querySelectorAll('.menu-btn');

menuBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        menuBtns.forEach(activeBtn => {
            if (activeBtn !== e.currentTarget) {
                activeBtn.classList.remove('active-button')
            }
        })
        e.currentTarget.classList.add('active-button')
    })
})

// preloader
let preload = document.querySelector('.preload')

window.addEventListener('load', function () {
    setTimeout(() => {
        preload.classList.add('preload-hide')
    }, 1500)
})