		Object.prototype.random = function() {return this[Math.floor(Math.random()*this.length)]}
		
		const words = {
			nouns: ["human","neighbourhood","community","iris","prairie","frontline","street-level"],
			verbs:["response","care","aid","support","ease","response"],
			groupTypes: ["collective","network","bunch","radicals"],
		}
		const outBox = document.querySelector("#outbox")
		const newButton = document.querySelector("#generateNew")
		const numSelector = document.querySelector("#numberWords")
		let inputsParent = document.querySelector("#inputsParent")

		let numberWords = numSelect
		createInputs()
		update()
		numSelector.addEventListener('input', () => {update()})
		
		outBox.innerText = "";
		newButton.addEventListener('click', () => {outBox.innerText = randomName()})
		function update() {
			numberWords = numSelector.value
			createInputs()
			outBox.innerText = randomName()
		}
		function randomName() {
			let newName = ""
			for(let i = 0; i < numberWords; i++) {
				let nameType = inputsParent.childNodes[i].value
				newName += ` ${words[nameType].random()}`
			}
			return newName
		}
		function createInputs() {
			inputsParent.innerHTML=""
			for(let i = 0; i < numberWords; i++) {
				let currentChild = document.createElement('select')
				Object.keys(words).forEach((keyName) => {
					let currentOption = document.createElement('option')
					currentOption.text  = keyName
					currentChild.add(currentOption)

				})
				inputsParent.appendChild(currentChild)
			}
			document.body.appendChild(inputsParent);
		}
