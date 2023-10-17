class Bullet {
	constructor(ctx, x, playerY0, playerY, playerH) {
		this.ctx = ctx

		this.radius = 5
		this.x = x
		this.y = playerY + playerH / 2

		this.floor = playerY0 + playerH

		this.vx = 10
		this.vy = -5
	}

	draw() {
		this.ctx.beginPath()
		this.ctx.fillStyle = 'red'
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
		this.ctx.fill()
		this.ctx.closePath()
	}

	move() {
	

		this.x += this.vx
		
	}
}
