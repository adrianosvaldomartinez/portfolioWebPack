import homePage from './pages/homePage.html';
import workPage from './pages/workPage.html';
import { animateBackground } from './scripts/scriptBackgroundAnimation.js';
import { showSelectedPage } from './scripts/switchPage.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('test nuevo');
  document.getElementById('home-div').innerHTML = homePage;
  document.getElementById('work-div').innerHTML = workPage;

  const switchPagebuttons = document.querySelectorAll('.switch-page-button');
  const animationDuration = 1; // Duration in seconds

  // añadimos un listener on click a cada boton de cambio de pagina
  // para animacion
  // para mostrar pagina adecuada
  switchPagebuttons.forEach((pageSelectedButton) => {
    pageSelectedButton.addEventListener('click', () => {
      animateBackground({
        pageSelectedButton,
        animationDuration,
      });

      showSelectedPage({ pageSelectedButton, animationDuration });
    });
  });

  const menuButton = document.querySelector('.dropdown-toggle');
  const menuContent = document.querySelector('.dropdown-content');
  menuButton.addEventListener('click', () => {
    console.log('clicke on menu');
    menuContent.classList.toggle('hidde-menu-content');
  });
});
