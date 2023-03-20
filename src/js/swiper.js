import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  grabCursor: true,
  spaceBetween: 20,
  direction: 'horizontal',
  loop: true,
  on: {
    activeIndexChange: function() {
      const bullets = document.querySelectorAll('.slide-bullet');
      removeActive();
      bullets[this.realIndex].classList.add('active');
    }
  },
  navigation: {
    nextEl: '.slide-next',
    prevEl: '.slide-prev',
  },
});

const currentIndex = swiper.activeIndex - 1;
const bullets = document.querySelectorAll('.slide-bullet');

function removeActive() {
  const currEl = document.querySelector('.active');
  currEl && currEl.classList.remove('active');
};

bullets.forEach((bullet, index) => {
  index === currentIndex && bullet.classList.add('active')
  bullet.addEventListener('click', () => {
    swiper.slideTo(index + 1);
    removeActive();
    bullet.classList.add('active');
  })
})
