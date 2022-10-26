let Y = 0
let X = 0
input.onButtonPressed(Button.A, function () {
    Y = 0
    for (let X = 0; X <= 4; X++) {
        led.plot(X, Y)
        basic.pause(200)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    Y = 0
    while (true) {
        for (let X = 0; X <= 4; X++) {
            led.plot(X, Y)
            basic.pause(200)
            basic.clearScreen()
        }
        basic.clearScreen()
        for (let X = 0; X <= 3; X++) {
            led.plot(3 - X, Y)
            basic.pause(200)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    X = 0
    for (let Y = 0; Y <= 4; Y++) {
        led.plot(X, Y)
        basic.pause(200)
        basic.clearScreen()
    }
})
