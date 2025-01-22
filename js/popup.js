const popup = document.getElementById('popup')
const close = document.getElementById('close')
const send = document.getElementById('sendpopup')
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