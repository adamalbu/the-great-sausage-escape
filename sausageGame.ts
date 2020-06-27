namespace sausageGame {
    export function removeSpawnTile(spawnTile: Image, emptyTile: Image) {
        for (let value of tiles.getTilesByType(spawnTile)) {
            tiles.setTileAt(value, emptyTile)
        }
    }
    export function restartLevelWhenHittingWall() {
        if ((Sausage.isHittingTile(CollisionDirection.Left) || Sausage.isHittingTile(CollisionDirection.Top) || Sausage.isHittingTile(CollisionDirection.Bottom) || Sausage.isHittingTile(CollisionDirection.Right)) && (Level == 10 || blockSettings.readNumber("Level") == 10 || (Level == 9 || blockSettings.readNumber("Level") == 9))) {
            if (Level == 9 && blockSettings.readNumber("Level") == 9 || Level == 10 && blockSettings.readNumber("Level") == 10) {
                tiles.placeOnTile(Sausage, tiles.getTileLocation(0, 9))
            }
        }
    }
    export function gravityJump() {
        if ((Level == 11 || Level == 12 || Level == 13 || Level == 14 || Level == 16 || blockSettings.readNumber("Level") == 11) && !(Sausage.tileKindAt(TileDirection.Center, myTiles.tile4))) {
            controller.moveSprite(Sausage, 200, 200)
            while (!(Sausage.isHittingTile(CollisionDirection.Bottom)) && !(Sausage.tileKindAt(TileDirection.Center, myTiles.tile4))) {
                Sausage.y += 4
                pause(10)
            }
            if (controller.up.isPressed()) {
                Sausage.y += -100
            }
        }
    }
    export function animateSausage() {
        animateLeft()
        animateRight()        
    }
    function animateLeft() {
        if (controller.left.isPressed()) {
            Sausage.setImage(img`
                . . . . e e . . . .
                . . . e e e e . . .
                . . . f e e e . . .
                . . . e e e e . . .
                . . . f e e e . . .
                . . . e e e e . . .
                . . . e e e e . . .
                . . f e e e e f . .
                . . . e e e e f . .
                . . . e e e f . . .
                . . . e e e f . . .
                . . . e e f e . . .
                . . . e e f e . . .
                . . . f e e f . . .
                . . . f . . f . . .
                . . . f . . f . . .
            `)
            pause(200)
            Sausage.setImage(img`
                . . . . e e . . . .
                . . . e e e e . . .
                . . . f e e e . . .
                . . . e e e e . . .
                . . . f e e e . . .
                . . . e e e e . . .
                . . . e e e e . . .
                . . f e e e e f . .
                . . f e e e e f . .
                . f . e e e e . f .
                . f . e e e e . f .
                f . . e e e e . . f
                f . . e e e e . . f
                . . . f e e f . . .
                . . . f . . f . . .
                . . . f . . f . . .
            `)
            pause(200)
        }
    }
    function animateRight() {
        if (controller.right.isPressed()) {
            Sausage.setImage(img`
                . . . . e e . . . .
                . . . e e e e . . .
                . . . e e e f . . .
                . . . e e e e . . .
                . . . e e e f . . .
                . . . e e e e . . .
                . . . e e e e . . .
                . . f e e e e f . .
                . . f e e e e . . .
                . . . f e e e . . .
                . . . f e e e . . .
                . . . e f e e . . .
                . . . e f e e . . .
                . . . f e e f . . .
                . . . f . . f . . .
                . . . f . . f . . .
            `)
            pause(200)
            Sausage.setImage(img`
                . . . . e e . . . .
                . . . e e e e . . .
                . . . e e e f . . .
                . . . e e e e . . .
                . . . e e e f . . .
                . . . e e e e . . .
                . . . e e e e . . .
                . . f e e e e f . .
                . . f e e e e f . .
                . f . e e e e . f .
                . f . e e e e . f .
                f . . e e e e . . f
                f . . e e e e . . f
                . . . f e e f . . .
                . . . f . . f . . .
                . . . f . . f . . .
            `)
            pause(200)
        }
    }
}