document.addEventListener("DOMContentLoaded", function (event) {
!function (t) { t.extend(t.easing, { spincrementEasing: function (t, a, e, n, r) { return a === r ? e + n : n * (-Math.pow(2, -10 * a / r) + 1) + e } }), t.fn.spincrement = function (a) { function e(t, a) { if (t = t.toFixed(a), a > 0 && "." !== r.decimalPoint && (t = t.replace(".", r.decimalPoint)), r.thousandSeparator) for (; o.test(t);)t = t.replace(o, "$1" + r.thousandSeparator + "$2"); return t } var n = { from: 0, to: null, decimalPlaces: null, decimalPoint: ".", thousandSeparator: ",", duration: 1e3, leeway: 50, easing: "spincrementEasing", fade: !0, complete: null }, r = t.extend(n, a), o = new RegExp(/^(-?[0-9]+)([0-9]{3})/); return this.each(function () { var a = t(this), n = r.from; a.attr("data-from") && (n = parseFloat(a.attr("data-from"))); var o; if (a.attr("data-to")) o = parseFloat(a.attr("data-to")); else if (null !== r.to) o = r.to; else { var i = t.inArray(r.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) > -1 ? "\\" + r.thousandSeparator : r.thousandSeparator, l = new RegExp(i, "g"); o = parseFloat(a.text().replace(l, "")) } var c = r.duration; r.leeway && (c += Math.round(r.duration * (2 * Math.random() - 1) * r.leeway / 100)); var s; if (a.attr("data-dp")) s = parseInt(a.attr("data-dp"), 10); else if (null !== r.decimalPlaces) s = r.decimalPlaces; else { var d = a.text().indexOf(r.decimalPoint); s = d > -1 ? a.text().length - (d + 1) : 0 } a.css("counter", n), r.fade && a.css("opacity", 0), a.animate({ counter: o, opacity: 1 }, { easing: r.easing, duration: c, step: function (t) { a.html(e(t * o, s)) }, complete: function () { a.css("counter", null), a.html(e(o, s)), r.complete && r.complete(a) } }) }) } }(jQuery);
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();



//якоря
const anchors = document.querySelectorAll('a[href^="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const menu = document.querySelector('.header-menu'),
            menuIcon = document.querySelector('.menu-icon');

        menu.classList.remove('_active');
        menuIcon.classList.remove('_active');
        document.body.classList.remove('_lock');

        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}





//TABS
const subMenuLink = document.querySelectorAll('li > a');
let tabNum = 0;
subMenuLink.forEach(item => {
    item.addEventListener('click', function () {
        const thisData = item.getAttribute('data-tab');
        if (thisData) {
            localStorage.setItem('tabNum', thisData);

        } else {
            localStorage.setItem('tabNum', 0);
        }

    });
});
if (localStorage.getItem('tabNum') !== null) {
    tabNum = localStorage.getItem('tabNum');
} else {
    tabNum = 0;
}


const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    if (header) {
        function hideTabContent() {
            content.forEach(item => {
                item.classList.remove(activeClass);
            });

            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
        function showTabContent(i = tabNum) { /*tabNum*/
            content[i].classList.add(activeClass);
            tab[i].classList.add(activeClass);
        }
        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            const target = e.target;

            if (target &&
                (target.classList.contains(tabSelector.replace(/\./, "")) ||
                    target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);

                    }
                });
            }
        });
    }
};
// const subTabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
//     const header = document.querySelector(headerSelector),
//         tab = document.querySelectorAll(tabSelector),
//         content = document.querySelectorAll(contentSelector);

//     if (header) {
//         function hideTabContent() {
//             content.forEach(item => {
//                 item.classList.remove(activeClass);
//             });

//             tab.forEach(item => {
//                 item.classList.remove(activeClass);
//             });
//         }
//         function showTabContent(i = 0) {
//             content[i].classList.add(activeClass);
//             tab[i].classList.add(activeClass);
//         }
//         hideTabContent();
//         showTabContent();

//         header.addEventListener('click', (e) => {
//             const target = e.target;

//             if (target &&
//                 (target.classList.contains(tabSelector.replace(/\./, "")) ||
//                     target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
//                 tab.forEach((item, i) => {
//                     if (target == item || target.parentNode == item) {
//                         hideTabContent();
//                         showTabContent(i);

//                     }
//                 });
//             }
//         });
//     }
// };


tabs('.clients__tabs-row', '.clients__tabs-row-item', '.clients__block', 'active');
// subTabs('.clients__sub-tabs', '.clients__sub-tab', '.sub-tabs__block', 'active');



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
});

//# sourceMappingURL=main.js.map
