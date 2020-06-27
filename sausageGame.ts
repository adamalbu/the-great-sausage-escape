namespace sausageGame {
    export function removeSpawnTile(spawnTile: Image, emptyTile: Image) {
        for (let value of tiles.getTilesByType(spawnTile)) {
            tiles.setTileAt(value, emptyTile)
        }
    }
    export function isHittingWall(){
        if ((Sausage.isHittingTile(CollisionDirection.Left) || Sausage.isHittingTile(CollisionDirection.Top) || Sausage.isHittingTile(CollisionDirection.Bottom) || Sausage.isHittingTile(CollisionDirection.Right)) && (Level == 10 || blockSettings.readNumber("Level") == 10 || (Level == 9 || blockSettings.readNumber("Level") == 9))) {
            tiles.placeOnRandomTile(Sausage, myTiles.tile5)
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