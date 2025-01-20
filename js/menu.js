const menu = document.getElementById('nav_open'); 
const open = document.getElementById('menu_movile'); 
const img = document.getElementById('menu'); 

open.addEventListener('click', () => {
    menu.classList.toggle('nav_visible');

    if (menu.classList.contains('nav_visible')) {
        img.setAttribute('src', './img/close.png'); 
    } else {
        img.setAttribute('src', './img/Menu.png'); 
    }
});
