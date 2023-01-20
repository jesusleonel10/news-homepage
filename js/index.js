const hamburgerMenu = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');
const background = document.querySelector('.background')

hamburgerMenu
  .addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active')
      menuMobile.classList.toggle('menu-mobile__open')
      background.classList.toggle('background__open')
  });