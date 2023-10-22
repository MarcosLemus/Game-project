// entrypoint
window.addEventListener('load', () => {
	const button = document.querySelector('button')

	button.addEventListener('click', () => {
		button.style.display = 'none'
		Game.init()
	})
})
