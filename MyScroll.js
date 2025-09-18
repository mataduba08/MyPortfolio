let lastScrollTop = 0;
const heroImage = document.querySelector('.hero-image.full-bg');
const heroHeight = document.querySelector('.hero-split').offsetHeight;

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    if (currentScroll > heroHeight) {
      // Beyond hero height, completely hide the image
      heroImage.classList.add('fade-out');
    } else {
      // Within hero height, fade but keep visible
      heroImage.classList.remove('fade-out');
    }
  } else {
    // Scrolling up
    heroImage.classList.remove('fade-out');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});