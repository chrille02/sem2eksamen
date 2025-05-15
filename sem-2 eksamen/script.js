const slider = document.getElementById('slider');
const afterImage = document.querySelector('.after-image');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

slider.addEventListener('input', (e) => {
  afterImage.style.width = e.target.value + '%';
});

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
