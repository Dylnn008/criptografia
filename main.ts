input.onButtonPressed(Button.A, function () {
    n1 += numero
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(n1 + n2)
})
input.onButtonPressed(Button.B, function () {
    n2 += numero
})
let n2 = 0
let n1 = 0
let numero = 0
numero = 1
while (numero == 0) {
    for (let index = 0; index < 9; index++) {
        basic.showNumber(numero)
        numero += 1
    }
}
