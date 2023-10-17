class Obstacle {
	constructor(ctx, canvasW, canvasH) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = canvasH

		this.w = Math.floor(Math.random() * canvasW / 10) + 100
		this.h = this.w


		this.img = new Image()
	
		this.img.src = 'assets/obstacles/Meteor_01.png'
	

		this.x = canvasW
		this.y = Math.floor(Math.random() * canvasH) - this.h
	


		this.dx = 12
	}

	draw() {
		this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
	

	}

	move() {
		
		this.x -= this.dx
	}
}
