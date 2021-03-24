// Modal Form  Hablar con Asesora
const openBtnAsesor = document.querySelector(".open-asesora");
const modalContainer4 = document.querySelector(".modal-form-asesora");
const closeAsesora = document.querySelector(".close-asesora");

openBtnAsesor.addEventListener("click", function () {
  modalContainer4.classList.add("show-form-asesora");
});

closeAsesora.addEventListener("click", function () {
  modalContainer4.classList.remove("show-form-asesora");
});

/* ===== Logica para edicion se los select box ===== */
$('.sel').each(function() {
  $(this).children('select').css('display', 'none');
  
  var $current = $(this);
  
  $(this).find('option').each(function(i) {
    if (i == 0) {
      $current.prepend($('<div>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box')
      }));
      
      var placeholder = $(this).text();
      $current.prepend($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
        text: placeholder,
        'data-placeholder': placeholder
      }));
      
      return;
    }
    
    $current.children('div').append($('<span>', {
      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
      text: $(this).text()
    }));
  });
});

// Si el select esta activo
$('.sel').click(function() {
  $(this).toggleClass('active');
});

// Estilos para mostrar el select
$('.sel__box__options').click(function() {
  var txt = $(this).text();
  var index = $(this).index();
  
  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');
  
  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});