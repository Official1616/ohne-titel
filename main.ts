let x = 0
basic.forever(function () {
    x = Math.round(input.acceleration(Dimension.X) / 416)
    led.plot(2 + x, 2)
    basic.pause(100)
    basic.clearScreen()
})
