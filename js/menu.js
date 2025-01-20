const menu = document.getElementById('nav_open'); // El menú móvil
const open = document.getElementById('menu_movile'); // Botón para abrir/cerrar
const img = document.getElementById('menu'); // Imagen del botón

open.addEventListener('click', () => {
    // Alterna la clase de visibilidad del menú
    menu.classList.toggle('nav_visible');

    // Verifica si el menú es visible para cambiar la imagen
    if (menu.classList.contains('nav_visible')) {
        img.setAttribute('src', './img/close.png'); // Imagen para cerrar
    } else {
        img.setAttribute('src', './img/Menu.png'); // Imagen para abrir
    }
});
