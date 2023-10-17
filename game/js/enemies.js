class Enemy {
	constructor(x, y, life) {
		this.x = x
		this.y = y

		this.life = life
	}
}

const enemy1 = new Enemy(20, 10)
const enemy2 = new Enemy(20, 10)

// Creo el array
let enemies = Array.from({ length: 10 }, () => new Enemy(20, 10, 100))

console.log(enemies)

enemies[0].life = 0
enemies[9].life = 0

defeatedEnemies = enemies.filter((enemy) => enemy.life <= 0)
enemies = enemies.filter((enemy) => enemy.life > 0)

console.log(enemies, defeatedEnemies)

// Find es como un filter pero obtiene un item

const matched = enemies.find((enemy) => enemy.x === 20)

matched.name = 'EL ELEGIDO'

enemies = enemies.filter((enemy) => {
	const isMatched = enemy !== matched

	if (!isMatched) {
		console.log(enemy, matched)
	}

	return isMatched
})

console.log(enemies)
// console.log(matched)

// enemies[0]

// if (enemies[0] === matched) {
// 	console.log('SI')
// } else {
// 	console.log('NO')
// }

console.log(filtered)