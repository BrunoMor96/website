async function buscarCole(txtBusqueda) {
  try {
      var url = new URL('https://api.smiledu.com/base2/api/general/buscarEscuela');
      let reqHeader = new Headers();
      // reqHeader.append('referer', 'https://smiledu.com');
      // reqHeader.append('origin', 'https://smiledu.com');

      var myInit = {
          "method" : 'GET',
          "Access-Control-Allow-Origin": "https://www.smiledu.com",
          "headers": reqHeader
      };
      var params = {
          search: txtBusqueda
      };
      url.search = new URLSearchParams(params).toString();
      var myRequest = new Request(url, myInit);

      let r    = await fetch(myRequest);
      let json = await r.json();
      return json;
  } catch (err) {
      console.log(err);
      return null;   
  }
}

var tm;
function buscar(e) {
  document.getElementById("spinner").style.display = "flex";
  if(document.getElementById("res")) {
    document.getElementById("res").remove();
  }
  if(tm) {
    clearTimeout(tm);
  }
  //console.log(e);
  const txtSearch = document.getElementById("search").value;
  if(txtSearch.length > 2) {
    tm = setTimeout(async () => {
      console.log("init busqueda...");
      var res = '';
      var coles = await buscarCole(txtSearch);
      const result = document.getElementById("result");
      res = `<ul id="res" class="colegios">`;
      var labelPremium = '';
      for(var r of coles) {
        if(r.flg_premium == 1) {
          labelPremium = '<img class="premium" height="15" src="https://smiledu.com/assets/images/searcher/premium_medal.png">';
        } else {
          labelPremium = '';
        }
        res += `<li style="display:flex">
                    <span>
                      <div class="escudo-cole">
                        <img class="logo-cole" height="25" src="${r.escudo}">
                          ${labelPremium}  
                        <strong>${r.nombre}</strong>
                      </div>
                    </span>
                    <button class="go-cole" onclick="openInNewTab('https://${r.dominio}.smiledu.com');">Ingresar</button>
                </li>`;
      }
      res += `</ul>`;
      result.innerHTML += res;
      document.getElementById("spinner").style.display = "none";
    }, 2000);
  } else {
    if(document.getElementById("res")) {
      document.getElementById("res").remove();
    }
    document.getElementById("spinner").style.display = "none";
  }
}

function openInNewTab(url) {
  window.open(url, '_blank').focus();
 }