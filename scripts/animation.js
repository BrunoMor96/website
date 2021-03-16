AOS.init();

const ani1 = document.querySelector('header .menu-area .ani1');
const ani2 = document.querySelectorAll('header .menu-area ul li');

console.log(ani2);
ani2.forEach((list) => {
list.addEventListener('click', () => {
    let position = list.getBoundingClientRect();
    ani1.classList.add('active');
    ani1.style.left = position.x + 'px';
    ani1.style.top = position.y + 'px';
    ani1.style.height = position.height + 'px';
    ani1.style.width = position.width + 'px';
});
// list.addEventListener('mouseout', () => {
//     ani1.classList.remove('active');
// });
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

$(window).scroll(function () {
  if ($("#border--bottom").offset().top > 56) {
    $("#border--bottom").addClass("border--bottom");
  } else {
    $("#border--bottom").removeClass("border--bottom");
  }
});

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
var time = 30;
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

