const nam = document.getElementById('name')
const email = document.getElementById('email')


if(nam.value.length < 2 || nam.value.length > 100){
    nam.style.border = '1px solid red'
}