// https://youtu.be/TTWiLjxcMbI?si=Du9brtconbTiJS9K

input.onButtonPressed(Button.A, function () {
    if (Switch == 0) {
        Number_1 += 1
        basic.showNumber(Number_1)
    }
    if (Switch == 1) {
        Number_2 += 1
        basic.showNumber(Number_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (OP == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (OP == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (OP == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (OP == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    OP = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Switch += 1
    if (Switch == 2) {
        if (OP == 1) {
            basic.showNumber(Number_1 + Number_2)
        } else {
            if (OP == 2) {
                basic.showNumber(Number_1 - Number_2)
            } else {
                if (OP == 3) {
                    basic.showNumber(Number_1 * Number_2)
                } else {
                    basic.showNumber(Number_1 / Number_2)
                }
            }
        }
    }
})
let Switch = 0
let Number_2 = 0
let Number_1 = 0
let OP = 0
OP = 0
Number_1 = 0
Number_2 = 0
Switch = 0
