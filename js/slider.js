const slides = document.querySelectorAll('.window');
const left = document.getElementById('left');
const right = document.getElementById('right');
const slideCont = document.getElementById('slide');
const position = document.querySelectorAll('.circle-pos'); 

let principal = 0;

left.addEventListener('click', () => {
  principal -= 1;
  if (principal < 0) {
    principal = slides.length - 1; // Volver al final si llego a la primera ventana
  }
  slideCont.style.transform = `translateX(-${principal * 100}%)`;
});

right.addEventListener('click', () => {
  principal += 1;
  if (principal >= slides.length) {
    principal = 0; // Volver al inicio si es la última ventana
  }
  slideCont.style.transform = `translateX(-${principal * 100}%)`;
});

position.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    principal = index; 
    slideCont.style.transform = `translateX(-${principal * 100}%)`;
  });
});


function startAutoSlide() {
  setInterval(() => {
    principal += 1;
    if (principal >= slides.length) {
      principal = 0;
    }
    slideCont.style.transform = `translateX(-${principal * 100}%)`;
  }, 5000);
}

startAutoSlide();
