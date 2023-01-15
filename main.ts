let a = 0
basic.forever(function on_forever() {
    
    a = pins.analogReadPin(AnalogPin.P2)
    if (a < 20) {
        basic.showLeds(`
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        `)
    } else {
        basic.showLeds(`
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        `)
    }
    
})
