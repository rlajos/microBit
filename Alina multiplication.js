input.onPinPressed(TouchPin.P0, function () {
    szorzó += -1
    basic.showNumber(szorzó)
})
input.onButtonPressed(Button.A, function () {
    szorzó += 1
    basic.showNumber(szorzó)
})
input.onButtonPressed(Button.B, function () {
    szorzandó += 1
    basic.showNumber(szorzandó)
})
input.onPinPressed(TouchPin.P1, function () {
    szorzandó += -1
    basic.showNumber(szorzandó)
})
input.onGesture(Gesture.Shake, function () {
    szorzó = 0
    szorzandó = 0
    eredmény = 0
    basic.showNumber(szorzó)
    basic.pause(500)
    basic.showNumber(szorzandó)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    eredmény = szorzó * szorzandó
    basic.showNumber(eredmény)
})
let eredmény = 0
let szorzandó = 0
let szorzó = 0
szorzó = 0
szorzandó = 0
eredmény = 0
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
