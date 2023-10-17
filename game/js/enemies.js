class Enemy {
	constructor(ctx, canvasW, canvasH) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = canvasH

		this.img = new Image()
		this.img.src = 'assets/enemy/Ship3.png'

		this.img.frameIndex = 0
		this.img.frames = 1

		this.x = canvasW

		this.y = Math.floor(Math.random() * canvasH)

		this.vx = 13

		this.w = 120
		this.h = 150

		this.bullets = []

	
	}

	

	draw(frameCounter) {
      
		this.ctx.drawImage(
			this.img,
			this.x,
			this.y,
			this.w,
			this.h
		)

        this.animateSprite(frameCounter)


		this.bullets.forEach((bullet) => {
			bullet.draw()
			bullet.move()
		})
	}

    animateSprite(frameCounter) {


		if (frameCounter % 6 === 0) {
			this.img.frameIndex++

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0
			}
		}
	}

	shot() {
		this.bullets.push(
			new Bullet(this.ctx, this.x + this.w, this.y, this.h)
		)
	}


	move() {

	
		 this.x -= this.vx
	}
}

