const button = document.getElementById('backTop')

button.addEventListener('click', () => {
    window.scrollTo(0,0)
})

const scrollTop = document.documentElement.scrollTop;

if (scrollTop > 200) {
    button.style.display = 'block'
} else {
    button.style.display = 'none'
}