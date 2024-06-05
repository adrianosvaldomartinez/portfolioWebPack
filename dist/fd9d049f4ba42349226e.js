export function showSelectedPage({ pageSelectedButton, animationDuration }) {
  const dropdownContent = document.querySelector('.dropdown-content');
  const targetDivId = pageSelectedButton.getAttribute('data-target');
  const allPages = document.querySelectorAll('.page');
  dropdownContent.classList.add('hidde-menu-content');
  allPages.forEach((page) => {
    // hide the visible div that is not targeted
    if (page.id !== targetDivId) {
      if (page.classList.contains('visible')) {
        page.classList.remove('visible');
        page.classList.add('hidden');
      }
    } else {
      // show targeted div if it was hidde
      if (page.classList.contains('hidden')) {
        // Show the div
        setTimeout(() => {
          // Timeout to ensure display block is rendered by the browser
          page.classList.remove('hidden');
          page.classList.add('visible');
        }, animationDuration * 1000);
      }
    }
  });
}
