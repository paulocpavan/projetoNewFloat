const swiper = new Swiper('.swiper', {
  // Optional parameters
  spped:600,
  spaceBetween:300,
 // swiper.slideNext();
  loop: true,
  
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset:20,
      shadowScale: 0.94,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
  