const nam = document.getElementById('name')
const emailInput = document.getElementById('email')
const formContact = document.getElementById('form')
const consent = document.getElementById('consent');
const errorName = document.getElementById('errorName')
const errorEmail = document.getElementById('errorEmail')

let valid = true

formContact.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Formulario enviado');
    let valid = true
    if(nam.value.length < 2 || nam.value.length > 100){
        nam.style.borderBottom = '1px solid red'
        valid = false
        errorName.style.display = 'block'
    } else {
        nam.style.borderBottom = '1px solid green';
        errorName.style.display = 'none'
    }

    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
    if (!emailReg.test(emailInput.value)) {
        emailInput.style.borderBottom = '1px solid red'
        valid = false
        errorEmail.style.display = 'block'
    } else {
        emailInput.style.borderBottom = '1px solid green';
        errorEmail.style.display = 'none'
    }

    if (!consent.checked) {
        consent.style.border = '1px solid red'
        valid = false;
    } else {
        consent.style.border = '1px solid black'
    }

    if (valid){
        api();
        formContact.reset()

    }

})



// conexion a la api para validacion formulario
const api = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: nam.value,
                email: emailInput.value
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          if (response.ok) {
            const jsonResponse = await response.json();
            console.log('Datos enviados:', jsonResponse);
        } else {
            console.error('Error en la respuesta:', response.status);
        }
    } catch (error) {
        console.error('Error al llamar la api:', error);
    }
};