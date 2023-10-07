// TODO:
// * metodo para ingresar y remover planes (para el admin)
// * los planes deberian ser guardados en un JSON (esto es algo sencillo no necesita db)
// - escribir planes deberia crear tarjetas de producto
// * no deberia ser necesario preguntar plan el usuario hará click en la tarjeta que le interese 
// * al seleccionar plan deberia ser escrito en un form para enviar al mail en la pagina de contacto

class Plan {
    constructor(bajada, subida, wifi, wifipro, fibraoptica, cablemodem, instalacionGratis){
        this.nombre = `<span class="nmegas">${bajada}</span> Megas*`
        this.bajada = bajada;
        this.subida = subida;
        this.wifi = wifi;
        this.wifipro = wifipro;
        this.fibraoptica = fibraoptica;
        this.cablemodem = cablemodem;
        this.instalacionGratis = instalacionGratis;
    }
}

// hacer un JSON
let Planes = [
    new Plan(100, 25, false, true, true, false, true),
    new Plan(20, 4, true, false, true, false, true),
    new Plan(50, 10, false, true, true, false, true),
    new Plan(12, 2, false, false, false, true, false),
]

function crearTarjetas(planes){
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
    for (let plan of planes){
        let ul = document.createElement('ul');

        let titulo = document.createElement('li');
        titulo.innerHTML = `${plan.nombre}`;
        ul.append(titulo);

        let wifi = document.createElement('li');
        if (plan.wifi){
            wifi.innerHTML = '<i class="bi bi-wifi"></i>WiFi'
        } else if (plan.wifipro){
            wifi.innerHTML = '<i class="bi bi-wifi"></i>WiFi Pro Bi-banda'
        }
        ul.append(wifi);

        let subida = document.createElement('li');
        subida.innerHTML = `<i class="bi bi-upload"></i><span class="nmegas">${plan.subida}</span> Megas* de Subida`
        ul.append(subida)

        let conexion = document.createElement('li');
        if (plan.fibraoptica){
            conexion.innerHTML = '<i class="bi bi-router"></i>Fibra Optica'
        } else if (plan.cablemodem){
            conexion.innerHTML = '<i class="bi bi-modem"></i>Cablemodem'
        }
        ul.append(conexion);

        let install = document.createElement('li');
        if (plan.instalacionGratis){
            install.innerHTML = '<i class="bi bi-tools"></i>Instalacion Bonificada'
        }
        ul.append(install);

        let loQuiero = document.createElement('li');
        loQuiero.innerHTML = '<a href="https://alfrix.github.io/futurnet-web/pages/contacto.html">¡Lo quiero!</a>'
        ul.append(loQuiero);

        let tarjeta = document.createElement('div');
        tarjeta.className = 'tarjetas-planes';
        tarjeta.append(ul);

        let li = document.createElement('li');
        li.append(tarjeta);

        let listaPlanes = document.getElementById('planes');
        listaPlanes.append(li);
    }
}

function preguntarPlan() {
    let respuesta = 'Número no valido';
    let vel = NaN;
    let count = 1;
    const maxRetries = 2;
    do {
        vel = Number(prompt('¿Que velocidad de conexión desea? (Número)'))
        if (isNaN(vel) || vel <= 0) {
            alert(respuesta);
            console.log(`Intento #${count}`);
            count += 1;
        } else {
            respuesta = `Ud. quiere ${vel} megas`;
        }
    } while (respuesta == 'Número no valido' && count <= maxRetries)
    
    if (count > maxRetries || isNaN(vel)){
        console.log('No valido saliendo');
        return;
    }

    let encontrado = false
    for (let plan in Planes){
        if (vel == Planes[plan].bajada){
            encontrado = true;
            break;
        }
    }
    if (encontrado){
        alert(respuesta + ' y está el plan está disponible, Contactenos');
    } else {
        // buscar mas cercano?
        alert(respuesta + ' pero no se ha encontrado plan que concuerde');
    }
}

let dir = 'asc';
function ordenarPlanes(){
    // boton que ordene (se invierte solo)
    if (dir == 'asc'){
        Planes.sort((a, b) => a.bajada - b.bajada);
        dir = 'desc';
    } else if (dir == 'desc'){
        Planes.sort((a, b) => a.bajada + b.bajada);
        dir = 'asc';
    }
    reEscribirPlanes(Planes)
}

function filtrarPlanes(){
    // filtrar planes con wifi (checkbox de solo wifi)
    let filtrado = Planes.filter((a) => a.wifi || a.wifipro)
    reEscribirPlanes(filtrado)
}

function reEscribirPlanes(planes){
    const element = document.getElementById("planes");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    crearTarjetas(planes)
}

// Main
crearTarjetas(Planes)