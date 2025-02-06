const popup = document.getElementById('popup');
const close = document.getElementById('close');
const email = document.getElementById('emailpopup');
const form = document.getElementById('formpopup');
const modalContent = document.querySelector('.modal-content'); 

let closePopup = false;

setTimeout(() => {
    if (!closePopup) {
        popup.showModal();
        document.body.style.overflow = "hidden";
    }
}, 5000);

// Cerrar modal con botón de cerrar
close.addEventListener('click', () => {
    popup.close();
    closePopup = true;
    document.body.style.overflow = "auto";
});

// Mostrar modal al hacer scroll al 25%
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight * 0.25 && !closePopup) {
        popup.showModal();
        document.body.style.overflow = "hidden";
    }
});

// Evitar que el modal se cierre al hacer clic en el interior
modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Cerrar modal si se hace clic fuera de él
window.addEventListener('click', (event) => {  
    if (event.target === popup) {
        popup.close();
        closePopup = true;   
        document.body.style.overflow = "auto";
    }
});

// Validar el formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let valid = true;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailReg.test(email.value)) {
        email.style.borderBottom = '1px solid red';
        valid = false;
    } else {
        email.style.borderBottom = '1px solid green';
        alert('Formulario enviado correctamente');
    }

    if (valid) {
        form.reset();
        popup.close(); 
        closePopup = true;
    }
});
