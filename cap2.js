console.log('Triangle')
let out = '#'
for (let i = 0; i < 7; i++) {
    console.log(out.repeat(i));
}
console.log('FizzBuzz')
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
console.log('Chessboard')
let rows = 12
let columns = 8
let board = ''
for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
        // if (i % 2 == 0){ // linea par
        //     if (j % 2 == 0) { //columna par
        //         board += ' '
        //     } else {
        //         board += '#'
        //     }
        // } else { // linea impar
        //     if (j % 2 == 0) { //columna impar
        //         board += '#'
        //     } else {
        //         board += ' '
        //     }
        // }
        // if ((i % 2 == 0) && (j % 2 == 0)){
        //     board += ' '
        // } else if (i % 2 == 0) {
        //     board += '#'
        // } else if (j % 2 == 0) {
        //     board += '#'
        // } else {
        //     board += ' '
        // }
        if (i % 2 == j % 2) { // ambos pares o ambos impares
            board += ' '
        } else {
            board += '#'
        }
    }
    board += '\n'
}
console.log(board)