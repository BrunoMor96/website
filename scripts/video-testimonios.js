var src = $('.video-kinder').children('iframe').attr('src');
var src2 = $('.video-school').children('iframe').attr('src');
var src3 = $('.video-group').children('iframe').attr('src');

// Modal Video Kinder
const openKinder = document.querySelector(".see-kinder");
const modalKinder = document.querySelector(".modal-kinder");
const closeKinder = document.querySelector(".close-kinder");

openKinder.addEventListener("click", function (e) {
  modalKinder.classList.add("show-kinder");
  e.preventDefault();
  $('.video-kinder').children('iframe').attr('src', src);
});
closeKinder.addEventListener("click", function (e) {
  modalKinder.classList.remove("show-kinder");
  e.preventDefault();
  $('.video-kinder').children('iframe').attr('src', '');
});

// Modal Video School
const openSchool = document.querySelector(".see-school");
const modalSchool = document.querySelector(".modal-school");
const closeSchool = document.querySelector(".close-school");

openSchool.addEventListener("click", function (e) {
  modalSchool.classList.add("show-school");
  e.preventDefault();
  $('.video-school').children('iframe').attr('src', src2);
});
closeSchool.addEventListener("click", function (e) {
  modalSchool.classList.remove("show-school");
  e.preventDefault();
  $('.video-school').children('iframe').attr('src', '');
});

// Modal Video Group
const openGroup = document.querySelector(".see-group");
const modalGroup = document.querySelector(".modal-group");
const closeGroup = document.querySelector(".close-group");

openGroup.addEventListener("click", function (e) {
  modalGroup.classList.add("show-group");
  e.preventDefault();
  $('.video-group').children('iframe').attr('src', src3);
});
closeGroup.addEventListener("click", function (e) {
  modalGroup.classList.remove("show-group");
  e.preventDefault();
  $('.video-group').children('iframe').attr('src', '');
});