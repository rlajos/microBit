input.onButtonPressed(Button.A, function () {
    moving = true
    while (moving) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    moving = false
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 90)
})
let moving = false
moving = false
pins.servoWritePin(AnalogPin.P0, 90)
basic.forever(function () {
	
})
