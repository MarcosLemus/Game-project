const Game = {
	ctx: undefined,
	canvasW: undefined,
	canvasH: undefined,
	scoreboard: ScoreBoard,
	fps: 60,
	keys: {
		FRONT: 'KeyD',
		SHOT: 'Space',
		UP: 'KeyW',
		DOWN: 'KeyS',
		BACK: 'KeyA',
	},
	init: function () {
		const canvas = document.querySelector('canvas')
		this.ctx = canvas.getContext('2d')

		this.canvasW = canvas.width = innerWidth
		this.canvasH = canvas.height = innerHeight

		this.bso = new Audio('./assets/bso.mp3')

		// this.bso.play()

		this.reset()
	},

	reset: function () {
		console.log('RESET')

		this.background = new Background(this.ctx, this.canvasW, this.canvasH)
		this.player = new Player(this.ctx, this.canvasW, this.canvasH, this.keys)

		this.obstacles = []

		this.score = 0

		this.scoreboard.init(this.ctx)

		this.start()
	},

	start: function () {
		// loop de render

		this.frameCounter = 0

		this.intervalId = setInterval(() => {
			this.clear()

			this.frameCounter++

			this.score += 0.03
			// this.bso.playbackRate += 0.001
			// Se genera obstáculo cada x frames
			if (this.frameCounter % 50 === 0) {
				this.generateObstacle()
			}

			this.drawAll()
			this.moveAll()

			// se pasa el frameCounter al método draw para animar el sprite cada x frames

			if (this.isCollision()) {
				 this.gameOver()
			}

			this.clearObstacles()

			console.log(this.obstacles)
		}, 1000 / this.fps)
	},

	drawAll() {
		this.background.draw()

		this.obstacles.forEach((obstacle) => {
			obstacle.draw()
		})
		

		this.scoreboard.update(this.score)

		this.player.draw(this.frameCounter)
	},

	moveAll() {
		this.background.move()
		this.obstacles.forEach((obstacle) => {
			obstacle.move()
		})
		this.player.move()
	},

	// gameOver: function () {
	// 	// para el intervalo que implementa el loop de animación
	// 	clearInterval(this.intervalId)

	// 	if (confirm('GAME OVER! ¿Volver a jugar?')) {
	// 		this.reset()
	// 	}
	// },

	generateObstacle: function () {
		this.obstacles.push(
			new Obstacle(this.ctx, this.canvasW, this.canvasH)
		),
		this.obstacles.push(
			new Obstacle2(this.ctx, this.canvasW, this.canvasH)
		)
	},

	isCollision: function () {
		return this.obstacles.some(
			(obstacle) =>
				obstacle.x + 10 < this.player.x + this.player.w &&
				obstacle.x + obstacle.w > this.player.x &&
				obstacle.y + obstacle.h > this.player.y &&
				obstacle.y < this.player.y + this.player.h
		)
	},

	clearObstacles: function () {
		this.obstacles = this.obstacles.filter(
			(obstacle) => obstacle.x + obstacle.w > 0
		)
	},

	clear: function () {
		this.ctx.clearRect(0, 0, this.canvasW, this.canvasH)
	},
}
