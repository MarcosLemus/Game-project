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

		// this.bso = new Audio('./assets/bso.mp3')

		// this.bso.play()

		this.reset()
	},

	

	reset: function () {
		console.log('RESET')

		this.background = new Background(this.ctx, this.canvasW, this.canvasH)
		this.player = new Player(this.ctx, this.canvasW, this.canvasH, this.keys)
		this.enemy = new Enemy(this.ctx, this.canvasW, this.canvasH)

		this.obstacles = []

		this.enemies = []

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
				
			} else if (this.frameCounter % 40 === 0){
				this.generateEnemies()
			}

			this.drawAll()
			this.moveAll()

			// se pasa el frameCounter al método draw para animar el sprite cada x frames
			
			if (this.isCollision()) {
  
				this.gameOver()
				
			} 
			// else if (this.isCollisionBullets()){
			// 	this.gameOver()
			// }



			this.clearObstacles()

			// console.log(this.obstacles)
			// console.log(this.enemies);
		}, 1000 / this.fps)
	},

	

	drawAll() {
		this.background.draw()

		this.enemies.forEach((enemy) => {
			enemy.draw()
		})

		this.obstacles.forEach((obstacle) => {
			obstacle.draw()
		})


		this.scoreboard.update(this.score)

		this.player.draw(this.frameCounter)
	},

	moveAll() {
		this.background.move()

		this.enemies.forEach((enemy) => {
			enemy.move()
		})

		this.obstacles.forEach((obstacle) => {
			obstacle.move()
		})
		
		this.player.move()

	},

	gameOver: function () {
		// para el intervalo que implementa el loop de animación
		
		this.player.destroyed()

		
		
		
		clearInterval(this.intervalId)
		if (confirm('GAME OVER! ¿Volver a jugar?')) {
			
			this.reset()
		}
			
	},

	generateObstacle: function () {
		this.obstacles.push(
			new Obstacle(this.ctx, this.canvasW, this.canvasH)
		),
		this.obstacles.push(
			new Obstacle2(this.ctx, this.canvasW, this.canvasH)
		)
	},

	generateEnemies: function () {
		this.enemies.push(
			new Enemy(this.ctx, this.canvasW, this.canvasH)
		)

	},

	isCollision: function () {
		
		return this.obstacles.some(
			(obstacle) =>
				obstacle.x + 20 < this.player.x + this.player.w &&
				obstacle.x + obstacle.w > this.player.x &&
				obstacle.y + obstacle.h > this.player.y &&
				obstacle.y < this.player.y + this.player.h
		)
	},


	isCollisionBullets: function () {

		return this.enemies.some(
			(enemy) =>
				enemy.x.bullets < this.player.x + this.player.w &&
				enemy.x.bullets + enemy.bullets > this.player.x &&
				obstacle.y + obstacle.h > this.player.y &&
				obstacle.y < this.player.y + this.player.h
		)
	},

	clearObstacles: function () {
		this.obstacles = this.obstacles.filter(
			(obstacle) => obstacle.x + obstacle.w > 0
		)
		this.enemies = this.enemies.filter(
			(enemy) => enemy.x + enemy.w > 0
		)
	},

	clear: function () {
		this.ctx.clearRect(0, 0, this.canvasW, this.canvasH)
	},
}
