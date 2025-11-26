input.onButtonPressed(Button.A, function () {
    n1 += numero
})
input.onButtonPressed(Button.AB, function () {
    total = n1 + n2
    basic.showNumber(total)
    n1 = 0
    n2 = 0
    numero = 1
})
input.onButtonPressed(Button.B, function () {
    n2 += numero
})
let n2 = 0
let total = 0
let n1 = 0
let numero = 0
numero = 1
while (numero <= 10) {
    basic.showNumber(numero)
    numero += 1
    if (numero > 9) {
        numero = 1
    }
}
