
const scroll = document.getElementById('percentage');
const header = document.querySelector('.header__contain');
const contScroll = document.getElementById('scroll'); // ID corregido

function changeWindow() {
    if (window.innerWidth < 480 || window.innerWidth < 768) {
        header.style.display = 'block';
    } else if (window.innerWidth >= 768) {
        header.style.display = 'flex';
    }
}

window.addEventListener('scroll', () => {
    const percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scroll.style.width = `${percentage}%`;

    if (percentage > 2) {
        header.style.display = 'none';
        contScroll.style.display = 'block';

    } else {
        changeWindow()
        contScroll.style.display = 'none';
    }
});



window.addEventListener('resize', () => {
    changeWindow()
});

