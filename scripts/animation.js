// scrollAnimation
AOS.init();

// AniamtionModalInput
$(".mat-input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".mat-input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})

// NavAnimation
const ani1 = document.querySelector('header .menu-area .ani1');
const ani2 = document.querySelectorAll('header .menu-area ul li');

ani2.forEach((list) => {
list.addEventListener('click', () => {
    let position = list.getBoundingClientRect();
    ani1.classList.add('active');
    ani1.style.left = position.x + 'px';
    ani1.style.top = position.y + 'px';
    ani1.style.height = position.height + 'px';
    ani1.style.width = position.width + 'px';
});
});

let buttons2 = document.querySelectorAll(".header-ul li a");

buttons2.forEach(button =>{
  button.addEventListener("click",_ =>{
    buttons2.forEach(button =>{
      button.classList.remove("background");
    })
    button.classList.toggle("background");
  })
})

// NavBorder
$(window).scroll(function () {
  if ($("#border--bottom").offset().top > 56) {
    $("#border--bottom").addClass("border--bottom");
  } else {
    $("#border--bottom").removeClass("border--bottom");
  }
});


// HoverAnimation
$(function () { 
  $('#content').hover(function () {
     $('#text').css('opacity', '1'); 
  }, function () {
     $('#text').css('opacity', '0'); 
}); });

$(function () { 
  $('#content3').hover(function () {
     $('#text3').css('opacity', '1'); 
  }, function () {
     $('#text3').css('opacity', '0'); 
}); });

// ScrollTop
$(document).ready(function() {
	$('#volver-arriba').click(function(){ 
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
  $('#logo').click(function(){ 
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});
// $(document).ready(function() {
// 	$('#volverabajo').click(function(){ 
// 		$('html, body').animate({scrollBottom:0}, 'slow');
// 		return false;
// 	});
// });

// AnimacionInfinitia
var $holder = $(".holder");
var $list = $holder.find("div.list");
var $clonedList = $list.clone();

var $holder2 = $(".holder2");
var $list2 = $holder2.find("div.list2");
var $clonedList2 = $list2.clone();

var listWidth = $list.find("button").length * 230;
var endPos = $holder.width() - listWidth;

var listWidth2 = $list2.find("button").length * 230;
var endPos2 = $holder2.width() - listWidth2;

$list.add($clonedList).css({
	"width" : listWidth + "px"
});

$list2.add($clonedList2).css({
	"width" : listWidth2 + "px"
});

$clonedList.addClass("cloned").appendTo($holder);
$clonedList2.addClass("cloned2").appendTo($holder2);

//TimelineMax
var infinite = new TimelineMax({repeat: -1, paused: false});
var time = 70;
var infinite2 = new TimelineMax({repeat: -1, paused: false});

infinite.fromTo($list, time, {left:0}, {left: listWidth, ease: Linear.easeNone}, 0);
infinite.fromTo($clonedList, time, {left:-listWidth}, {left:0, ease: Linear.easeNone}, 0);
infinite.set($list, {left: -listWidth});
infinite.to($clonedList, time, {left: listWidth, ease: Linear.easeNone}, time);
infinite.to($list, time, {left: 0, ease: Linear.easeNone}, time);

infinite2.fromTo($list2, time, {left:0}, {left: -listWidth2, ease: Linear.easeNone}, 0);
infinite2.fromTo($clonedList2, time, {left: listWidth2}, {left:0, ease: Linear.easeNone}, 0);
infinite2.set($list2, {left: listWidth2});
infinite2.to($clonedList2, time, {left: -listWidth2, ease: Linear.easeNone}, time);
infinite2.to($list2, time, {left: 0, ease: Linear.easeNone}, time);

//Pause/Play
$holder.on("mouseenter", function(){
	infinite.pause();
}).on("mouseleave", function(){
	infinite.play();
});

$holder2.on("mouseenter", function(){
	infinite2.pause();
}).on("mouseleave", function(){
	infinite2.play();
});

//modal
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const apply = document.querySelector('.apply');
const dialog = document.querySelector('dialog');
const input = document.querySelector('input');
const output = document.querySelector('output');

openModal.addEventListener('click', () => {
  dialog.showModal();
});

//Activar desactivar scroll
$(document).ready(function(){
  var $body = $('html,body');
  $('#subs').on('click', function() {
      $body.addClass('block-scroll');
  });
  $('#close-modal').on('click', function() {
      $body.removeClass('block-scroll');
  });
});