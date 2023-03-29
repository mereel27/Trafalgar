const openButton = document.querySelector('.open-menu');
const closeButton = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const backdrop = document.querySelector('.backdrop');

const hideMenu = (delay = 300) => {
  menu.classList.replace('translate-x-0', 'translate-x-full');
  menuToggle.setAttribute('aria-expanded', false);
  menu.setAttribute('aria-hidden', true);
  setTimeout(() => {
    menu.classList.add('hidden');
    backdrop.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  }, delay);
};

backdrop.addEventListener('click', () => hideMenu());

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  if (!expanded) {
    menu.classList.remove('hidden');
    menuToggle.setAttribute('aria-expanded', true);
    menu.setAttribute('aria-hidden', false);
    backdrop.classList.remove('hidden');
    body.classList.add('overflow-hidden');
    setTimeout(() => {
      menu.classList.replace('translate-x-full', 'translate-x-0');
    }, 50);
  } else {
    hideMenu();
  }
});

const mobile = window.matchMedia('(max-width: 768px)');

window.addEventListener('resize', () => {
  !mobile.matches && hideMenu(0);
});
