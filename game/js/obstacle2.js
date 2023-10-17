class Obstacle2 {
	constructor(ctx, canvasW, canvasH) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = this.canvasW

		this.w = Math.floor(Math.random() * canvasW / 10) + 100
		this.h = this.w

		this.img = new Image()
		
		this.img.src = 'assets/obstacles/Meteor_02.png'
		

		this.x = canvasW
		this.y = Math.floor(Math.random() * canvasH) - this.h
		


		this.dx = 14
	}

	draw() {
		this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

	}

	move() {
		this.x -= this.dx
	}
}
