const scroll = document.getElementById('percentage');

window.addEventListener('scroll', () => {
     const percentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scroll.style.width = `${percentage}%`;
});

