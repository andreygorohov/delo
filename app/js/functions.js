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


