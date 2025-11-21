input.onButtonPressed(Button.A, function () {
    n1 += numero
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    n2 += numero
})
let n2 = 0
let n1 = 0
let numero = 0
numero = 1
while (n1 == 0) {
    basic.showNumber(numero)
    numero += 1
    if (numero == 10) {
        numero = 1
        basic.showNumber(numero)
        numero += 1
    }
}
