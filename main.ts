controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010102030303030303030304`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,sprites.builtin.forestTiles13,sprites.builtin.forestTiles14,sprites.builtin.forestTiles15], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 6 6 6 . . . . . . . . . 
    . . . 6 c 6 6 . 3 3 3 3 3 . . . 
    . . 6 c c c 6 6 6 6 6 6 3 3 . . 
    . . 6 c 7 7 7 7 5 a a 6 6 3 . . 
    . . 6 c 7 5 5 5 5 6 a b 6 3 3 . 
    . . 6 c 7 5 5 6 6 6 a b b 6 3 . 
    . . 6 c 7 7 5 6 a 6 a b b 6 3 . 
    . . 6 c c 7 5 6 a a a b b 6 . . 
    . . . 6 c 7 5 6 a b b b b b . . 
    . . . 6 c 7 5 6 a a b b b 6 . . 
    . . . 6 6 7 5 6 6 a b b 6 6 . . 
    . . . . 6 6 5 5 6 a a 6 . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 5 
        . . . . . . . . . . . 5 5 5 5 5 
        . . . . . . . . . 5 5 5 5 5 2 2 
        . . . . . . . 5 5 5 . 5 5 2 2 4 
        2 2 2 5 5 5 5 4 4 4 2 2 2 2 4 4 
        . . . . . . . 5 5 . . 5 5 2 2 4 
        . . . . . . . . 5 5 5 . 5 5 2 2 
        . . . . . . . . . . 5 5 5 5 5 2 
        . . . . . . . . . . . . 5 5 5 5 
        . . . . . . . . . . . . . . . 5 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
