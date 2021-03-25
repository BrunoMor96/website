// Modal Form  Hablar con Asesora
const openBtnAsesor = document.querySelector(".open-asesora");
const modalContainer4 = document.querySelector(".modal-form-asesora");
const closeAsesora = document.querySelector(".close-asesora");

openBtnAsesor.addEventListener("click", function () {
  document.getElementById("btnEnviar").disabled = false;
  document.getElementById("form-asesora").style.display = "block";
  document.getElementById("form-mensaje").style.display = "none";
  modalContainer4.classList.add("show-form-asesora");
});

closeAsesora.addEventListener("click", function () {
  modalContainer4.classList.remove("show-form-asesora");
});

// Modal Contáctanos
const openModAsesora = document.querySelector(".open-modal-asesora");
const modalAsesora = document.querySelector(".modal-asesora");
const closeAsesora2 = document.querySelector(".close-asesora2");

openModAsesora.addEventListener("click", function () {
  modalAsesora.classList.add("show-asesora");
});
closeAsesora2.addEventListener("click", function () {
  modalAsesora.classList.remove("show-asesora");
});

/* ===== Logica para edicion se los select box ===== */
$('.sel').each(function () {
  $(this).children('select').css('display', 'none');

  var $current = $(this);

  $(this).find('option').each(function (i) {
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
$('.sel').click(function () {
  $(this).toggleClass('active');
});

// Estilos para mostrar el select
$('.sel__box__options').click(function () {
  var txt = $(this).text();
  var index = $(this).index();

  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');

  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});

async function handleSubmit(event) {
  event.preventDefault();

  document.getElementById("btnEnviar").disabled = true;

  const data = new FormData(event.target);

  const nombres = data.get('nombres').toUpperCase();
  const telefono = data.get('telefono');
  const inst_edu = data.get('inst_edu').toUpperCase();
  const cmbTipo = data.get('cmbTipo');
  const correo = data.get('correo');
  const cargo = data.get('cargo');
  const distrito = data.get('distrito').toUpperCase();
  const nro_estu = data.get('nro_estu');

  const body = {
    nombres, telefono, inst_edu, cmbTipo, correo, cargo, distrito, nro_estu
  };
  // console.log(body);
  var rpta = await contactar(body);
  document.getElementById("formAsesor").reset();
  document.getElementById("form-asesora").style.display = "none";
  document.getElementById("form-mensaje").style.display = "block";
  console.log('rpta:', rpta);
}

const form = document.getElementById('formAsesor');
form.addEventListener('submit', handleSubmit);

async function contactar(data) {
  try {
    var url = new URL('https://api.smiledu.com/web1/api/web/contactarAsesora');
    let reqHeader = new Headers();
    reqHeader.append('Content-Type', 'application/json');
    // reqHeader.append('origin', 'https://smiledu.com');

    var myInit = {
      "method": 'POST',
      "headers": reqHeader,
      body: JSON.stringify(data)
    };
    var myRequest = new Request(url, myInit);

    let r = await fetch(myRequest);
    let json = await r.json();
    return json;
  } catch (err) {
    console.log(err);
    return null;
  }
}