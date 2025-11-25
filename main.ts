let n1 = 0
let n2 = 0
let numero = 1
while (numero <= 11) {
    basic.showNumber(numero)
    numero += 1
    if (numero == 10) {
        numero = 1
        basic.showNumber(numero)
        numero += 1
    }
}
