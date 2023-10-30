fetch("https://alfrix.github.io/js-47080/planes.json")
  .then((response) => response.json())
  .then((planes) => {
    main(planes);
  })
  .catch((error) => console.error("Error fetching JSON:", error));

class Plan {
  constructor(
    bajada,
    subida,
    wifi,
    fibraoptica,
    cablemodem,
    instalacionGratis
  ) {
    this.bajada = bajada;
    this.subida = subida;
    this.wifi = wifi;
    this.fibraoptica = fibraoptica;
    this.cablemodem = cablemodem;
    this.instalacionGratis = instalacionGratis;
  }
}

function crearTarjetas(planes) {
  // insertar tarjetas de producto
  //
  // <ul id="planes">
  // <li>
  // <div class="tarjetas-planes">
  //     <ul>
  //         <li><span class="nmegas">100</span>  Megas*</li>
  //         <li><i class="bi bi-wifi"></i>WiFi Pro Bi-banda</li>
  //         <li><i class="bi bi-upload"></i><span class="nmegas">25</span> Megas* de Subida</li>
  //         <li><i class="bi bi-router"></i>Fibra Optica</li>
  //         <li><i class="bi bi-tools"></i>Instalacion Bonificada</li>
  //         <li><a href="./pages/contacto.html">¡Lo quiero!</a></li>
  //     </ul>
  // </div>
  // </li>
  // </ul>
  for (let plan of planes) {
    let ul = document.createElement("ul");

    let titulo = document.createElement("li");
    titulo.innerHTML = `${`<span class="nmegas">${plan.bajada}</span> Megas*`}`;
    ul.append(titulo);

    let wifi = document.createElement("li");
    if (plan.wifi == 1) {
      wifi.innerHTML = '<i class="bi bi-wifi"></i>WiFi';
    } else if (plan.wifi == 2) {
      wifi.innerHTML = '<i class="bi bi-wifi"></i>WiFi Pro Bi-banda';
    }
    ul.append(wifi);

    let subida = document.createElement("li");
    subida.innerHTML = `<i class="bi bi-upload"></i><span class="nmegas">${plan.subida}</span> Megas* de Subida`;
    ul.append(subida);

    let conexion = document.createElement("li");
    if (plan.fibraoptica) {
      conexion.innerHTML = '<i class="bi bi-router"></i>Fibra Optica';
    } else if (plan.cablemodem) {
      conexion.innerHTML = '<i class="bi bi-modem"></i>Cablemodem';
    }
    ul.append(conexion);

    let install = document.createElement("li");
    if (plan.instalacionGratis) {
      install.innerHTML = '<i class="bi bi-tools"></i>Instalacion Bonificada';
    }
    ul.append(install);

    let loQuiero = document.createElement("li");
    loQuiero.innerHTML =
      '<a href="https://alfrix.github.io/futurnet-web/pages/contacto.html">¡Lo quiero!</a>';
    ul.append(loQuiero);

    let tarjeta = document.createElement("div");
    tarjeta.className = "tarjetas-planes";
    tarjeta.append(ul);

    let li = document.createElement("li");
    li.append(tarjeta);

    let listaPlanes = document.getElementById("planes");
    listaPlanes.append(li);
  }
}

function ordenarPlanes(planes) {
  // boton que ordena (se invierte solo)
  let iconOrdenar = document.getElementById("iconOrdenar");
  if (iconOrdenar.classList.contains("bi-sort-down")) {
    planes.sort((a, b) => a.bajada - b.bajada);
    iconOrdenar.classList.remove("bi-sort-down");
    iconOrdenar.classList.add("bi-sort-up");
    console.log("ascendente");
  } else {
    planes.sort((a, b) => a.bajada + b.bajada);
    iconOrdenar.classList.remove("bi-sort-up");
    iconOrdenar.classList.add("bi-sort-down");
    console.log("descendente");
  }
  reEscribirPlanes(planes);
}

function filtrarPlanes(wifi, planes) {
  // filtrar planes con wifi (checkbox de solo wifi)
  if (wifi) {
    let filtrado = planes.filter((a) => a.wifi || a.wifipro);
    return filtrado;
  }
  return planes;
}

function reEscribirPlanes(planes) {
  const element = document.getElementById("planes");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  crearTarjetas(planes);
}

// Main
function main(planes) {
  let planesMostrados = planes;
  let btnWifi = document.querySelector("#wifiBtn");
  let checkWifi = document.querySelector("#wifiCheck");
  checkWifi.checked = JSON.parse(sessionStorage.getItem("checkWifi"));
  btnWifi.onclick = function () {
    checkWifi.checked = !checkWifi.checked;
    reEscribirPlanes(filtrarPlanes(checkWifi.checked, planes));
    planesMostrados = filtrarPlanes(checkWifi.checked, planes);
    sessionStorage.setItem("checkWifi", checkWifi.checked);
  };
  checkWifi.onclick = btnWifi.onclick;
  planesMostrados = filtrarPlanes(checkWifi.checked, planes);

  let btnOrdenar = document.getElementById("ordenar");
  btnOrdenar.addEventListener("click", () => ordenarPlanes(planesMostrados));
  btnOrdenar.click();

  Toastify({
    text: "Bienvenido ",
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "#0044aa",
    },
  }).showToast();
}
