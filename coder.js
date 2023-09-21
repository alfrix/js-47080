// TODO:
// * metodo para ingresar y remover planes (para el admin)
// * los planes deberian ser guardados en un JSON (esto es algo sencillo no necesita db)
// * escribir planes deberia crear tarjetas de producto
// * no deberia ser necesario preguntar plan el usuario hará click en la tarjeta que le interese 
// * al seleccionar plan deberia ser escrito en un form para enviar al mail en la pagina de contacto


class Plan {
    constructor(bajada, subida, descuento = 0){
        this.bajada = bajada;
        this.subida = subida;
        this.descuento = descuento;
    }
}

let Planes = {
    plan100: new Plan(100, 25, 10),
    plan50: new Plan(50, 10),
    plan20: new Plan(20, 4),
    plan12: new Plan(12, 2),
}

function escribirPlanes(){
    // insertar tarjetas de producto
    for (let plan in Planes){
        titulo = `<li>${Planes[plan].bajada} Megas`;
        if (Planes[plan].descuento > 0)
            titulo += ` ¡PROMO! ${Planes[plan].descuento}% de descuento`;
        titulo += `</li>`;

        let tarjeta = document.createElement('tarjeta');
        tarjeta.innerHTML = titulo;

        let seccionPlanes = document.getElementById('planes');
        seccionPlanes.insertAdjacentElement('beforeend', tarjeta);
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


// Main
escribirPlanes()