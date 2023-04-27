input.onButtonPressed(Button.A, function () {
    űrhajó.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    rakéta = game.createSprite(űrhajó.get(LedSpriteProperty.X), űrhajó.get(LedSpriteProperty.Y))
    rakéta.set(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        rakéta.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    rakéta.delete()
})
input.onButtonPressed(Button.B, function () {
    űrhajó.move(1)
})
let rakéta: game.LedSprite = null
let űrhajó: game.LedSprite = null
űrhajó = game.createSprite(2, 4)
basic.forever(function () {
	
})
