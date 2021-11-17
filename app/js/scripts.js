const swiper = new Swiper('.main', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    // },
});


swiper.on('slideChange', function () {
    $('.spincrement').spincrement();
});
$('.spincrement').spincrement();

//MENU

let dropLinks = document.querySelectorAll('.sub-menu__link._drop'),
    headerMenu = document.querySelector('.header-menu'),
    dropMenuTitle = document.querySelectorAll('.drop-menu__title'),
    dropMenu = document.querySelector('.drop-menu');
//     allDropMenus = document.querySelectorAll('.drop-menu');

// function menuClassDel(){
//     allDropMenus.forEach(item.)
// }


dropLinks.forEach(item => {
    item.addEventListener('click', function (e) {

        if (e.target !== this) {
            e.preventDefault();
        }
        headerMenu.classList.add('transformation');
        this.nextElementSibling.classList.add('_active');

    });
});
dropMenuTitle.forEach(item => {
    item.addEventListener('click', function (e) {
        headerMenu.classList.remove('transformation');
        this.parentElement.classList.remove('_active');

    });
});


//burger
function burger(burgerclass, menuClass) {
    const icon = document.querySelector(burgerclass),
        menu = document.querySelector(menuClass),
        logoIcon = document.querySelector('.logo-icon'),
        langs = document.querySelector('.header__langs');

    icon.addEventListener('click', function () {
        this.classList.toggle('_active');
        menu.classList.toggle('_active');
        langs.classList.toggle('_active');
        logoIcon.classList.toggle('_change-col');
        document.body.classList.toggle('_lock');
        headerMenu.classList.remove('transformation');
        // dropMenu.classList.remove('_active');
    });
}

burger('.menu-icon', '.header-menu');




const mobTab = document.querySelectorAll('.tabs__row-item');

if (window.screen.width < 576) {
    mobTab.forEach(item => {
        item.addEventListener('click', function () {
            mobTab.forEach(tab => {
                tab.style.display = 'block';

            });
            this.style.display = 'none';
        });
    });
}

// fixed headder and tabs-title
// function fix() {
const header = document.querySelector('.header'),
    mobTitle = document.querySelector('.clients__content');

window.addEventListener('scroll', function (e) {
    let scrollTop = window.scrollY;
    if (scrollTop > 1) {
        if (window.screen.width < 576) {
            header.classList.add('fix');
        }
    } else {
        header.classList.remove('fix');
    }
    if (scrollTop > (mobTitle.offsetTop + 50)) {
        mobTitle.querySelector('.tabs__content-block.active .clients__mob-title-wrap').classList.add('fix-title');
        header.classList.add('trans');
    } else {
        mobTitle.querySelector('.tabs__content-block.active .clients__mob-title-wrap').classList.remove('fix-title');
        header.classList.remove('trans');
    }
});
// }
// fix();