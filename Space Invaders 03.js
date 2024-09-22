input.onButtonPressed(Button.A, function () {
    űrhajó.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    rakéta = game.createSprite(űrhajó.get(LedSpriteProperty.X), űrhajó.get(LedSpriteProperty.Y))
    rakéta.set(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        rakéta.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (rakéta.isTouching(ellenség)) {
            game.addScore(1)
            ellenség.delete()
            rakéta.delete()
        }
    }
    rakéta.delete()
})
input.onButtonPressed(Button.B, function () {
    űrhajó.move(1)
})
let ellenség: game.LedSprite = null
let rakéta: game.LedSprite = null
let űrhajó: game.LedSprite = null
űrhajó = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    ellenség = game.createSprite(randint(0, 4), 0)
    ellenség.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    ellenség.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        ellenség.move(1)
        basic.pause(500)
    }
    if (ellenség.isTouching(űrhajó)) {
        game.gameOver()
    }
    if (ellenség.isTouchingEdge()) {
        ellenség.delete()
    }
})
