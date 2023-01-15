let a = 0
let strip: neopixel.Strip = null
basic.forever(function () {
    a = pins.analogReadPin(AnalogPin.P2)
    strip = neopixel.create(DigitalPin.P1, 70, NeoPixelMode.RGBW)
    if (a < 20) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        strip.showColor(neopixel.hsl(0, 0, 100))
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        strip.showColor(neopixel.hsl(0, 0, 0))
    }
    strip.show()
})
