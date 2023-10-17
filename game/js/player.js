class Player {
	constructor(ctx, canvasW, canvasH, keys) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = canvasH
		this.keys = keys

		this.img = new Image()
		this.img.src = 'assets/Player/Move.png'

		this.jumpSound = new Audio('./assets/jump.wav')

		this.img.frameIndex = 0
		this.img.frames = 6

		this.x = canvasW * 0.08
		this.y0 = canvasH * 0.5

		this.y = this.y0

		this.vy = 0

		this.w = 58.5
		this.h = 72

		this.bullets = []

		this.actions = {
			jump: false,
		}

		this.setControls()
	}

	setControls() {
		document.addEventListener('keydown', (event) => {
			switch (event.code) {
				case this.keys.JUMP:
					this.jumpSound.volume = 0.2
					this.jumpSound.play()
					this.actions.jump = true

					if (this.y === this.y0) {
						console.log('SI')
						this.y = this.y0 - 1
						this.vy = -10
					}

					break

				case this.keys.SHOT:
					this.shot()

					break
			}
		})
	}

	draw(frameCounter) {
		this.ctx.drawImage(
			this.img,
			this.img.frameIndex * (this.img.width / this.img.frames), // sx
			0,
			this.img.width / this.img.frames,
			this.img.height,
			this.x,
			this.y,
			this.w,
			this.h
		)

		this.animateSprite(frameCounter)

		this.bullets = this.bullets.filter(
			(bullet) => bullet.x - bullet.radius < this.canvasW
		)

		this.bullets.forEach((bullet) => {
			bullet.draw()
			bullet.move()
		})
	}

	shot() {
		this.bullets.push(
			new Bullet(this.ctx, this.x + this.w, this.y0, this.y, this.h)
		)
	}

	animateSprite(frameCounter) {
		if (frameCounter % 6 === 0) {
			this.img.frameIndex++

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0
			}
		}
	}

	move() {
		const gravity = 0.45

		if (this.y < this.y0) {
			this.vy += gravity
		} else {
			this.vy = 0
			this.y = this.y0
		}

		this.y += this.vy
	}
}
