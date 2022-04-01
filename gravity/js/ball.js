class Ball {

    constructor(ctx, gameSize) {
        this.ctx = ctx
        this.ballPos = { x: 0, y: 0 }
        this.ballSize = { w: 50, h: 50 }
        this.ballVel = { x: 10, y: 2 }
        // this.ballVel = { x: Math.random() * 10 + 5, y: 1 }           // <- regalito :3
        this.ballPhysics = { gravity: .4 }
        this.gameSize = gameSize

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/ball.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {

        if (this.ballPos.y >= this.gameSize.h - this.ballSize.h) this.invertVelocityY()
        if (this.ballPos.x >= this.gameSize.w - this.ballSize.w) this.invertVelocityX()

        this.ballPos.x += this.ballVel.x
        this.ballVel.y += this.ballPhysics.gravity
        this.ballPos.y += this.ballVel.y
    }

    invertVelocityX() {
        this.ballVel.x *= -1
    }

    invertVelocityY() {
        this.ballVel.y *= -1
    }
}