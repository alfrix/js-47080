// minumum

function min(num1, num2){
    if (num1 > num2){
        return num2
    }
    return num1
}

let a = parseInt(prompt('Ingrese numero'))
let b = parseInt(prompt('Ingrese otro numero'))
alert(`El numero mas chico entre ${a} y ${b} es ${min(a, b)}`)

// recursion

function isEven(num) {
    if (num % 2 == 0){
        return true
    }
    return false
}
let c = parseInt(prompt('Ingrese numero'))
if (isEven(c)) {
    alert(`Numero ${c} es Par`)
} else {
    alert(`Numero ${c} es Impar`)
}
// bean counting

function countChars(str, char) {
    count = 0
    for(let i = 0; (i < str.length); i++){
        if (str[i] == char){
            count++
        }
    }
    return count
}

let d = prompt('Ingrese texto')
let e = prompt('Ingrese caracter a contar')
alert(`El texto contiene ${countChars(d, e)} caracteres '${e}'`)