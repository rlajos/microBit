let sound_to_volume = 0
let sound_to_colour = 0
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.setBrightness(15)
basic.forever(function () {
    sound_to_colour = Math.map(input.soundLevel(), 0, 100, 0, 255)
    sound_to_volume = Math.map(input.soundLevel(), 3, 100, 0, 30)
    strip.showColor(neopixel.hsl(sound_to_colour, 255, sound_to_volume))
    serial.writeValue("y", input.soundLevel())
    serial.writeValue("x", sound_to_colour)
})
