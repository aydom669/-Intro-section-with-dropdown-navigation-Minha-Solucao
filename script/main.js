
/* Menu Mobile 
===============================================================*/

const btnMenu = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.navbar_link');
const menuClose = document.querySelector('.close');

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle("active");
    menuClose.classList.toggle('active');
   

    if (menuClose.classList.contains('active')) {
        btnMenu.src = 'images/icon-close-menu.svg';
    } else {
        btnMenu.src = 'images/icon-menu.svg';
    }
})

/* Menu Mobile / End
===============================================================*/

/* Dropdown
============================================================================= */

const dropdownLinks = document.querySelectorAll('.dropdown');
const dropdowns = document.querySelectorAll('.navbar__list__item__dropdown');

dropdownLinks.forEach((dropdown, index) => {
    dropdown.addEventListener('click', function() {
        this.classList.toggle('active');
        dropdowns[index].classList.toggle('active');
        let icon = this.querySelector('.arrow-icon');

        if (this.classList.contains('active')) {
            icon.src = 'images/icon-arrow-up.svg';
        } else {
            icon.src = 'images/icon-arrow-down.svg';

        }
    });
});

/* Dropdown / End
============================================================================= */