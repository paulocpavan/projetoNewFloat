const swiper = new Swiper('.swiper', {
  loop: true,  
  grabCursor: true,
 
    // If we need pagination
   // pagination: {
   //   el: '.swiper-pagination',
   // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    800: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 30
    },

  }

})
