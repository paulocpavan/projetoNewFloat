const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
    
  });
  