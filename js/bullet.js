class Bullet {
	constructor(ctx, x, y) {
		this.ctx = ctx


		this.x = x
		this.y = y
		

		this.vx = 20
	

		this.img = new Image()
		this.img.src = 'assets/shot2_asset.png'

		this.img.frameIndex = 0
		this.img.frames = 20
	}

	draw() {
		this.ctx.drawImage(
			this.img,
			this.x,
			this.y
		)
	
	}

	move() {
	

	this.x += this.vx
		
	}

	moveEnemy() {
	

	this.x -= this.vx
			
		}
}
