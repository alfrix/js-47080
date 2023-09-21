console.log(suma(rango(1, 10)));
console.log(rango(1, 10, 2))
console.log(rango(5, 2, -1))

function suma(numeros){
    // numeros es un array
    let resultado = 0
    for (let num of numeros){
        resultado += num
    }   
    return resultado
}

function rango(inicio, final, step){
    if (step == undefined){step = 1}
    let resultado = [inicio]
    if (step > 0){
        for (let i = inicio; i + step <= final; i+=step){
            resultado.push(inicio += step)
        }
    } else {
        for (let i = inicio; i + step >= final; i+=step){
            resultado.push(inicio += step)
        }
    }
    return resultado
}

function reverseArray(array){
    let reversed = []
    for (i of array){
        reversed.unshift(i)
    }
    return reversed
}
let prueba = rango(1,9)

function reverseArrayInPlace(array){
    for(let i=0; i < array.length/2; i++){
        aux = array[i]
        array[i] = array[array.length - 1-i]
        array[array.length - i-1] = aux
    }
}
console.log('reverseArrray')
console.log(prueba)
console.log(reverseArray(prueba))
console.log(prueba)

console.log('reverseArrayInPlace')
console.log(prueba)
reverseArrayInPlace(prueba)
console.log(prueba)

console.log('reverse')
console.log(prueba)
prueba.reverse()
console.log(prueba)

function deepEqual(obj1, obj2){
    if (obj1 === obj2){
        return true
    }
    if (typeof(obj1) == typeof(obj2)){
        for (o1key of Object.keys(obj1)){
            if ((o1key in obj2) && (obj1[o1key] == obj2[o1key])){
                continue
            } else {return false}
        }
        for (o2key of Object.keys(obj2)){
            if ((o2key in obj1) && (obj1[o2key] == obj2[o2key])){
                continue
            } else {return false}
        }
        return true
    }
    return false;
}

let a={name: 'prueba'}
let b={name: 'prueba'}
console.log(deepEqual(a,b))