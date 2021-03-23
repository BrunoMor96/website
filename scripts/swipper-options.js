const swiper = new Swiper('.swiper1', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    250: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const swiper3 = new Swiper('.swiper3', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  },
  // autoplay: {
  // 			delay: 3000,
  // 			disableOnInteraction: false,
  // },
});

const swiper4 = new Swiper('.swiper4', {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination4',
    clickable: true,
  },
  breakpoints: {
    250: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 5,
      spaceBetween: 16
    }
  },
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
