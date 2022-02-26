function search(long, short) {
	var count = 0
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			/**
			 * checkinng if the last value in short
			 * string is the same as on the long string
			 */
			if (short[j] !== long[j + i]) break
			if (j === short.length - 1) count++
		}
	}
	return count
}

console.log(search("haleluyah", "q").green)
