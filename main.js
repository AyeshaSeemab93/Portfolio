

// main.js
function popOut(element) {
  // Add the 'popOut' class to trigger the animation
  element.classList.add('popOut');
  
  // Remove the class after the animation duration
  setTimeout(() => {
    element.classList.remove('popOut');
  }, 300);
}
