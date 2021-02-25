// Lo primero que se ejecuta cuando se ha cargado el dom
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  comprobarAncho();
});

// Menu
const menuHamburgesa = document.querySelector('.fa-bars');
const menu = document.querySelector('.enlaces-header');

menuHamburgesa.addEventListener('click', () => {
  menu.classList.toggle('active');
});

window.addEventListener('click', e => {
  if (menu.classList.contains('active') && e.target !== menuHamburgesa && e.target !== menu && e.target !== document.querySelector('.carousel__next')) {
    menu.classList.toggle('active');
  }
});



window.addEventListener('resize', () => {
  comprobarAncho();
});

// Valida la configuracion del lightbox dependiendo la pantalla
const comprobarAncho = () => {
  if (window.innerWidth <= 900) {
    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true,
      'albumLabel': "Imagen %1 de %2",
      'positionFromTop': 135,
      'fitImagesInViewport': true,
    });
  } else {
    lightbox.option({
      'alwaysShowNavOnTouchDevices': true,
      'resizeDuration': 500,
      'wrapAround': true,
      'albumLabel': "Imagen %1 de %2",
      'positionFromTop': 40,
      'fitImagesInViewport': false,
      'maxWidth': 1000
    });
  }
}


