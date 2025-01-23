const nam = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')

let valid = true


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(nam.value.length < 2 || nam.value.length > 100){
        nam.style.borderBottom = '1px solid red'
        valid = false

    } else {
        nam.style.borderBottom = '1px solid green';
    }

    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
    if (!emailReg.test(email.value)) {
        email.style.borderBottom = '1px solid red'
        valid = false
    } else {
        email.style.borderBottom = '1px solid green';
    }

    if (valid){
        api();
        form.reset()
    }

})


const statusMessage = document.getElementById('status');

const api = async () => {
    statusMessage.textContent = 'Enviando datos...';
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: nam.value,
                email: email.value
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
        console.error('Error al llamar la API:', error);
        statusMessage.textContent = 'Error al enviar los datos.';
    }
};
