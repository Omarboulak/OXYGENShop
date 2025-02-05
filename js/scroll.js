document.addEventListener("DOMContentLoaded", function () {
    const scroll = document.getElementById('percentage');
    const header = document.querySelector('.header__contain');
    const contScroll = document.getElementById('scroll'); // ID corregido

    window.addEventListener('scroll', () => {
        const percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scroll.style.width = `${percentage}%`;
 
        if (percentage > 2) {
            header.style.display = 'none';
            contScroll.style.display = 'block';  
        } else {
            header.style.display = 'flex';
            contScroll.style.display = 'none';  
        }
    });
});
