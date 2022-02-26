// function hash(key, arrayLen) {
// 	let total = 0
// 	for (let char of key) {
// 		let value = char.charCodeAt(0) - 96
// 		total = (total + value) % arrayLen
// 	}
// 	return total
// }
// function hash(key, len) {
// 	let total = 0
// 	let WEIRD_PRIME = 31
// 	for (let i = 0; i < Math.min(key.length, 100); i++) {
// 		char = key[i]
// 		let value = char.charCodeAt(0) - 96
// 		total = (total * WEIRD_PRIME + value) % len
// 	}
// 	return total
// }
// console.log(hash("blue", 14))
// console.log(hash("pink", 14))
// console.log(hash("cyan", 14))

class Hashtable {
	constructor(size = 53) {
		this.keyMaps = new Array(size)
	}
	_hash(key) {
		let total = 0
		let WEIRD_PRIME = 31
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i]
			let value = char.charCodeAt(0) - 96
			total = (total * WEIRD_PRIME + value) % this.keyMaps.length
		}
		return total
	}
	set(key, value) {
		let index = this._hash(key)
		if (!this.keyMaps[index]) this.keyMaps[index] = []
		this.keyMaps[index].push([key, value])
		return index
	}
	get(key) {
		let index = this._hash(key)
		if (this.keyMaps[index]) {
			for (let i = 0; i < this.keyMaps[index].length; i++) {
				if (this.keyMaps[index][i][0] === key) {
					return this.keyMaps[index][i][1]
				}
			}
		}
		return undefined
	}
	values() {
		let valuesArray = []
		for (let i = 0; i < this.keyMaps.length; i++) {
			if (this.keyMaps[i]) {
				for (let j = 0; j < this.keyMaps[i].length; j++) {
					if (!valuesArray.includes(this.keyMaps[i][j][1]))
						valuesArray.push(this.keyMaps[i][j][1])
				}
			}
		}
		return valuesArray
	}
	keys() {
		let keysArray = []
		for (let i = 0; i < this.keyMaps.length; i++) {
			if (this.keyMaps[i]) {
				for (let j = 0; j < this.keyMaps[i].length; j++) {
					if (!keysArray.includes(this.keyMaps[i][j][0]))
						keysArray.push(this.keyMaps[i][j][0])
				}
			}
		}
		return keysArray
	}
}
var hashed = new Hashtable(4)
hashed.set("blue", "#mike")
hashed.set("pink", "#juma")
//console.log(hashed.get("blue"))
console.log(hashed.values())
console.log(hashed.keys())
