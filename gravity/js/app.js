const gravityApp = {
    name: 'Gravity App',
    description: 'Canvas app for basic shape gravity',
    version: '1.0.0',
    author: 'Ger',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },

    balls: [],

    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')
        console.log('EL CONTEXTO:', this.ctx)

        this.setDimensions()
        this.setEventListeners()
        this.start()
    },

    setDimensions() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },

    setEventListeners() {
        document.onkeyup = event => {
            if (event.code === 'Space') this.createBall()
        }
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 20)
    },

    createBall() {
        this.balls.push(new Ball(this.ctx, this.gameSize))
        console.log(this.balls)
    },

    drawAll() {
        this.balls.forEach(eachBall => eachBall.draw())
        this.clearBalls()
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    clearBalls() {
        this.balls = this.balls.filter(eachBall => eachBall.ballPos.x + eachBall.ballSize.w > 0)
    }
}