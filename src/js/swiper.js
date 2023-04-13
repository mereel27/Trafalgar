import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

const bullets = document.querySelectorAll('.slide-bullet');

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  grabCursor: true,
  spaceBetween: 20,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletActiveClass: "active",
    bulletClass: 'slide-bullet',
  },
  navigation: {
    nextEl: '.slide-next',
    prevEl: '.slide-prev',
  },
});

const currentIndex = swiper.activeIndex;

function removeActive() {
  const currEl = document.querySelector('.active');
  currEl && currEl.classList.remove('active');
};

bullets.forEach((bullet, index) => {
  index === currentIndex && bullet.classList.add('active')
})
