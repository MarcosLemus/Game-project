const ScoreBoard = {
	init: function (ctx) {
		this.ctx = ctx
	},

	update: function (score) {
		this.ctx.font = '30px Arial'
		this.ctx.fillStyle = 'green'
		this.ctx.fillText(Math.floor(score), 50, 50)
	},
}
