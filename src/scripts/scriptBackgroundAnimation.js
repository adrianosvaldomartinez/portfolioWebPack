export function animateBackground({ pageSelectedButton, animationDuration }) {
  // Set the CSS variable for animation duration
  const body = document.body;
  document.documentElement.style.setProperty(
    '--animation-duration',
    `${animationDuration}s`
  );
  let isAnimating = false; // Flag to indicate if animation is running
  if (isAnimating) return; // Do nothing if animation is running

  // Set the flag to true and disable the button
  console.log('clickedy during animation');
  isAnimating = true;
  pageSelectedButton.disabled = true;
  pageSelectedButton.classList.add('disabled');

  body.style.animationPlayState = 'running';

  // Reset animation play state after animation ends to allow replaying
  setTimeout(() => {
    body.style.animationPlayState = 'paused';
    // Re-enable the button and reset the flag
    pageSelectedButton.disabled = false;
    pageSelectedButton.classList.remove('disabled');
    isAnimating = false;
  }, animationDuration * 1000); // The duration of the animation in milliseconds
}
