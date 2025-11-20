def on_button_pressed_a():
    global n1
    n1 += numero
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(n1 + n2)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global n2
    n2 += numero
input.on_button_pressed(Button.B, on_button_pressed_b)

n2 = 0
n1 = 0
numero = 0
numero = 1
for index in range(9):
    basic.show_number(numero)
    numero += 1

def on_forever():
    pass
basic.forever(on_forever)
