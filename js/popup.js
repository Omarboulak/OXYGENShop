const popup = document.getElementById('popup')
const close = document.getElementById('close')
const send = document.getElementById('sendpopup')
const email = document.getElementById('emailpopup')
const form = document.getElementById('formpopup')

let closePopup = false;

setTimeout(() => {
    if (!closePopup) {
        popup.showModal()
    }
  }, 5000);
  

close.addEventListener('click', () => {
    popup.close();
    closePopup = true
})

window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight * 0.25 && !closePopup
    ) {
      popup.showModal();
    }
  });

  window.addEventListener('click', (event) => {
    
    if (event.target === popup) {
        popup.close();
        closePopup = true   
    }
});


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let valid = true;
  
  const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!emailReg.test(email.value)) {
    email.style.borderBottom = '1px solid red';
    valid = false;
  } else {
    email.style.borderBottom = '1px solid green';
  }

  if (valid) {
    form.reset();
    popup.close(); 
    closePopup = true 
  }
});