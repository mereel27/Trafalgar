/* const tresholds = Array.from({ length: 11 }, (_, index) => index / 10); */

const prefNoAnimation = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!prefNoAnimation.matches) {
  const boxes = document.querySelectorAll('.service-box');
  const futures = document.querySelectorAll('.futures');
  const news = document.querySelector('.news');
  const articles = news.querySelectorAll('article');
  const animClasses = [
    'animate__animated',
    'animation-paused',
    'animate__fast',
  ];

  const boxesCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('animation-paused');
      }
    });
  };

  const boxesObserver = new IntersectionObserver(boxesCallback, {
    root: null,
    threshold: 0.25,
  });

  boxes.forEach((el, index) => {
    const animDelay = (index + 1) % 2 === 0 ? 0.75 : 0.5;
    el.style.animationDelay = `${animDelay}s`;
    el.classList.add(...animClasses, 'animate__zoomIn');
    boxesObserver.observe(el);
    el.addEventListener('animationend', () => {
      boxesObserver.unobserve(el);
    });
  });

  const futuresCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.querySelector('.text-box').classList.remove('animation-paused');
        el.querySelector('.image-box').classList.remove('animation-paused');
      }
    });
  };

  const futuresObserver = new IntersectionObserver(futuresCallback, {
    root: null,
    threshold: 0.25,
  });

  futures.forEach((el, index) => {
    const text = el.querySelector('.text-box');
    const image = el.querySelector('.image-box');
    if (index === 0) {
      text.classList.add(...animClasses, 'animate__fadeInRight');
      text.style.animationDelay = `${0.35}s`;
      image.classList.add(...animClasses, 'animate__fadeInLeft');
      image.style.animationDelay = `${0.5}s`;
    }
    if (index === 1) {
      text.classList.add(...animClasses, 'animate__fadeInLeft');
      text.style.animationDelay = `${0.5}s`;
      image.classList.add(...animClasses, 'animate__fadeInRight');
      image.style.animationDelay = `${0.35}s`;
    }
    futuresObserver.observe(el);
    el.addEventListener('animationend', () => {
      futuresObserver.unobserve(el);
    });
  });

  const articlesCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const articleContent = el.querySelector('.article-content');
        articleContent.classList.remove('animation-paused');
      }
    });
  };

  const articlesObserver = new IntersectionObserver(articlesCallback, {
    root: null,
    threshold: 0.25,
  });

  articles.forEach((el, index) => {
    const articleContent = el.querySelector('.article-content');
    const delay = (index + 1) % 2 === 0 ? 0.35 : 0.5;
    const animationName =
      index === 0 ? 'fadeInLeft' : index === 1 ? 'zoomIn' : 'fadeInRight';
    articleContent.classList.add(...animClasses, `animate__${animationName}`);
    articleContent.style.animationDelay = `${delay}s`;
    articlesObserver.observe(el);
    el.addEventListener('animationend', () => {
      articlesObserver.unobserve(el);
    });
  });
}
