var src = $('.videos-youtube').children('iframe').attr('src');

// Modal Video Youtube - Banner
const openYoutubeBanner = document.querySelector(".youtube-one");
const modalContainer2 = document.querySelector(".modal-video-one");
const closeVideo2 = document.querySelector(".close-youtube");

openYoutubeBanner.addEventListener("click", function (e) {
  modalContainer2.classList.add("show-video");
  e.preventDefault();
  $('.videos-youtube').children('iframe').attr('src', src);
});
closeVideo2.addEventListener("click", function (e) {
  modalContainer2.classList.remove("show-video");
  e.preventDefault();
  $('.videos-youtube').children('iframe').attr('src', '');
});

// Modal Video Youtube Movil - Banner
const openYoutubeMovil = document.querySelector(".youtube-movile");
const modalContainer3 = document.querySelector(".modal-video-movile");

openYoutubeMovil.addEventListener("click", function (e) {
  modalContainer3.classList.add("show-video-movile");
  e.preventDefault();
  $('.videos-youtube').children('iframe').attr('src', src);
});
closeVideo2.addEventListener("click", function (e) {
  modalContainer3.classList.remove("show-video-movile");
  e.preventDefault();
  $('.videos-youtube').children('iframe').attr('src', '');
});