const button = document.getElementById('backTop')



window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage > 20) {
        button.style.display = 'block';  
    } else {
        button.style.display = 'none';  
    }
});


button.addEventListener('click', () => {
    window.scrollTo(0,0)
})