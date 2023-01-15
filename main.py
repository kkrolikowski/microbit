a = 0
strip: neopixel.Strip = None

def on_forever():
    global a, strip
    a = pins.analog_read_pin(AnalogPin.P2)
    strip = neopixel.create(DigitalPin.P1, 70, NeoPixelMode.RGBW)
    if a < 20:
        basic.show_leds("""
            # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
                        # # # # #
        """)
        strip.show_color(neopixel.hsl(0, 0, 100))
    else:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        strip.show_color(neopixel.hsl(0, 0, 0))
    strip.show()
basic.forever(on_forever)
