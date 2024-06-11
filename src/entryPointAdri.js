import css from './pages/cssLinks.html';
import layout from './pages/layout.html';
import jsLinks from './pages/jsLinks.html';
import homePage from './pages/homePage.html';
import workPage from './pages/workPage.html';
import projectPage from './pages/projectPage.html';
import skillsPage from './pages/skillsPage.html';
import personalPage from './pages/personalPage.html';
import { animateBackground } from './scripts/scriptBackgroundAnimation.js';
import { showSelectedPage } from './scripts/switchPage.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('test nuevo');
  document.querySelector('head').innerHTML += css;
  document.querySelector('body').innerHTML += layout;
  document.getElementById('home-div').innerHTML = homePage;
  document.getElementById('work-div').innerHTML = workPage;
  document.getElementById('project-div').innerHTML = projectPage;
  document.getElementById('skills-div').innerHTML = skillsPage;
  document.getElementById('personal-div').innerHTML = personalPage;
  document.querySelector('body').innerHTML += jsLinks;

  const switchPagebuttons = document.querySelectorAll(
    '[data-js="switch-page"]'
  );
  const animationDuration = 0.25; // Duration in seconds

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

  const menuButton = document.querySelector('[data-js="dropdown-toggle"]');
  const menuContent = document.querySelector('[data-js="dropdown-content"]');
  menuButton.addEventListener('click', () => {
    console.log('clicke on menu');
    menuContent.classList.toggle('hidde-menu-content');
    const closeMenuOnClickOutside = (event) => {
      if (
        !menuContent.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        menuContent.classList.add('hidde-menu-content');
        menuContent.classList.remove('show-menu-content');
        document.body.removeEventListener('click', closeMenuOnClickOutside);
      }
    };
    document.body.addEventListener('click', closeMenuOnClickOutside);
  });
});
