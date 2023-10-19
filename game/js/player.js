class Player {
	constructor(ctx, canvasW, canvasH, keys) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = canvasH
		this.keys = keys

		this.img = new Image()
		this.img.src = 'assets/Player/Move.png'

		this.img.frameIndex = 0
		this.img.frames = 6

		this.x = canvasW * 0.08
		this.y0 = canvasH * 0.5

		this.y = this.y0

		this.vy = 0
		this.vx = 0

		this.w = 58.5
		this.h = 72

		this.bullets = []

		this.actions = {
			front: false,
			back: false,
			up: false,
			down: false,
			shot: false,
		}

		this.setControls()
	}

	setControls() {
		document.addEventListener('keydown', (event) => {
			switch (event.code) {
				case this.keys.FRONT:
					
					this.actions.front = true

					this.vx = 20
					this.img.src = 'assets/Player/Boost.png'
					this.img.frameIndex = 0
					this.img.frames = 5

					

					break

				case this.keys.BACK:
		
					this.actions.back = true

					this.vx = -20
					this.img.src = 'assets/Player/Boost.png'
					this.img.frameIndex = 0
					this.img.frames = 5


					break

				case this.keys.UP:
		
					this.actions.up = true

					this.vy = -20
					this.img.src = 'assets/Player/Boost.png'
					this.img.frameIndex = 0
					this.img.frames = 5

					break

				case this.keys.DOWN:
		
					this.actions.down = true

					this.vy = 20
					this.img.src = 'assets/Player/Boost.png'
					this.img.frameIndex = 0
					this.img.frames = 5

					break

				case this.keys.SHOT:

				this.actions.shot = true

				this.img.src = 'assets/Player/Attack_1.png'
				this.img.frameIndex = 0
				this.img.frames = 4

					this.shot()

					break
			}
		})
		document.addEventListener('keyup', (event) => {
			switch (event.code) {
				case this.keys.FRONT:
					
					this.actions.front = false

					this.vx = 0
					this.img.src = 'assets/Player/Move.png'
					this.img.frameIndex = 0
					this.img.frames = 6

					

					break 
				
				
				case this.keys.BACK:
		
					this.actions.back = false

					this.vx = 0
					this.img.src = 'assets/Player/Move.png'
					this.img.frameIndex = 0
					this.img.frames = 6

					break

				case this.keys.UP:
		
					this.actions.up = false

					this.vy = 0
					this.img.src = 'assets/Player/Move.png'
					this.img.frameIndex = 0
					this.img.frames = 6

					break

				case this.keys.DOWN:
		
					this.actions.down = false

					this.vy = 0
					this.img.src = 'assets/Player/Move.png'
					this.img.frameIndex = 0
					this.img.frames = 6

					break

				case this.keys.SHOT:

					this.actions.shot = false
	
					this.img.src = 'assets/Player/Move.png'
					this.img.frameIndex = 0
					this.img.frames = 6
	
						
	
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

	

		this.bullets.forEach((bullet) => {
			bullet.draw()
			bullet.move()
		})
	}

	destroyed(){
		this.img.src = 'assets/Player/Destroyed.png'
		this.img.frames = 21
		this.frameIndex = 0
	}

	shot() {
		this.bullets.push(
			new Bullet(this.ctx, this.x + this.w, this.y, this.h)
		)
	}

	animateSprite(frameCounter) {


		if (frameCounter % 2 === 0) {
			this.img.frameIndex++

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0
			}
		}
	}

	move() {

	if(this.actions.up) {
		this.y += this.vy
		if(this.y < 0){
			this.y = 0
		}
	}

	if(this.actions.front) {
		this.x += this.vx
		if(this.x + this.w >= 1918){
			this.x = this.canvasW - this.w
		}
	}

	if(this.actions.back) {
		this.x += this.vx
		if(this.x <= 2){
			this.x = 2
		}
	}

	
	if(this.actions.down) {
		this.y += this.vy
		if(this.y > 857){
			this.y = 858
		}
	}
		
		
	}
}



// this.x += this.vx
// this.y += this.vy
