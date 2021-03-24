// Modal Form 
const openBtn = document.querySelector(".open");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".modal-btn");

openBtn.addEventListener("click", function () {
  modalContainer.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  modalContainer.classList.remove("show");
});

// Modal Video Youtube - Banner
const openYoutubeBanner = document.querySelector(".youtube-one");
const modalContainer2 = document.querySelector(".modal-video-one");
const closeVideo2 = document.querySelector(".close-youtube");
// Modal Video Youtube Movil - Banner
const openYoutubeMovil = document.querySelector(".youtube-movile");
const modalContainer3 = document.querySelector(".modal-video-movile");
//jquery
var src = $('.videos-youtube').children('iframe').attr('src');

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