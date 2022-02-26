const buble = (arr) => {
	for (let i = arr.length; i > 0; i--) {
		var noswap = true
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
				noswap = false
			}
		}
		if (noswap) break
	}
	return arr
}
console.log(buble([5, 1, 2, 3]))
