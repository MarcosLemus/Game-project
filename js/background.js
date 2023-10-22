class Background {
	constructor(ctx, canvasW, canvasH) {
		this.ctx = ctx
		this.canvasW = canvasW
		this.canvasH = canvasH

		this.img = new Image()
		this.x = 0
		this.dx = 10

		this.img.src = 'assets/Background-layers/background-all.png'
	}

	draw() {
		this.ctx.drawImage(this.img, this.x, 0, this.canvasW, this.canvasH)
		this.ctx.drawImage(
			this.img,
			this.canvasW + this.x,
			0,
			this.canvasW,
			this.canvasH
		)
	}

	move() {
		if (this.x <= -this.canvasW) {
			this.x = 0
		}

		this.x -= this.dx
	}
}
