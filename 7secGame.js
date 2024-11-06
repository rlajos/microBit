let time = 0
let PushTime = 0
input.onButtonPressed(Button.A, function () {
    time = input.runningTime() / 1000
    serial.writeValue("time:", time)
    basic.showIcon(IconNames.Yes)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    PushTime = input.runningTime() / 1000
    serial.writeValue("PushTime:", PushTime)
    serial.writeValue("Delay:", Math.abs(Math.round(PushTime - time)))
    basic.showNumber(Math.abs(Math.round(PushTime - time)))
})
basic.forever(function () {
	
})
