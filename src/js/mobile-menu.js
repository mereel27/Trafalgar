const openButton = document.querySelector('.open-menu');
const closeButton = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  const hidden = menu.getAttribute('aria-hidden') === 'true';
  
  menuToggle.setAttribute('aria-expanded', !expanded);
  menu.setAttribute('aria-hidden', !hidden);

  if (!expanded) {
    menu.classList.remove('hidden');
    body.classList.add('overflow-hidden');
    setTimeout(() => {
      menu.classList.replace('translate-x-full', 'translate-x-0');
    }, 50);
  } else {
    menu.classList.replace('translate-x-0', 'translate-x-full');
    setTimeout(() => {
      menu.classList.add('hidden');
      body.classList.remove('overflow-hidden');
    }, 300)
  }
});