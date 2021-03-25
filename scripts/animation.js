//LoaderWeb
$(window).load(function () {
  $(".loader").fadeOut("slow");
});

// scrollAnimation
AOS.init();

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
buttons2.forEach(button => {
  button.addEventListener("click", _ => {
    buttons2.forEach(button => {
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
  });
});
$(function () {
  $('#content3').hover(function () {
    $('#text3').css('opacity', '1');
  }, function () {
    $('#text3').css('opacity', '0');
  });
});

// ScrollTop
$(document).ready(function () {
  $('#volver-arriba').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
  $('#logo').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});

//Activar desactivar scroll
$(document).ready(function () {
  var $body = $('html,body');
  //Form-Videos-Block-Scroll
  $('#subs').on('click', function () {
    $body.addClass('block-scroll');
  });
  $('#close-modal').on('click', function () {
    $body.removeClass('block-scroll');
  });
  //Modal-Videos-Block-Scroll
  $('#youtube').on('click', function () {
    $body.addClass('block-scroll');
  });
  $('#close-youtube').on('click', function () {
    $body.removeClass('block-scroll');
  });
  //Modal-Videos-Block-Scroll-Movil
  $('#video-movil').on('click', function () {
    $body.addClass('block-scroll');
  });
  $('#close-movil').on('click', function () {
    $body.removeClass('block-scroll');
  });
});

//ABRIR Y CERRAR MENU CON CHECK
$("#menuBtn").on("click", function () {
  $(".case").prop("checked", this.checked);
});
$(".case").on("click", function () {
  if ($(".case").length == $(".case:checked").length) {
    $("#menuBtn").prop("checked", true);
  } else {
    $("#menuBtn").prop("checked", false);
  }
});


$(function () {
  $('a[href*=#]').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({ scrollTop: targetOffset }, 1000);
        return false;
      }
    }
  });
});