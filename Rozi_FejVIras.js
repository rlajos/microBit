input.onButtonPressed(Button.AB, function () {
    if (randint(0, 1) == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # . # #
            # . # . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            # # # . #
            . # # . #
            . # # . #
            . # . # .
            `)
    }
})
