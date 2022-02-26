function binary(arr, value) {
	var start = 0
	var end = arr.length - 1
	var mid = Math.floor((start + end) / 2)

	while (arr[mid] !== value && start <= end) {
		arr[mid] > value ? (end = mid - 1) : (start = mid + 1)

		mid = Math.floor((start + end) / 2)
	}

	return arr[mid] === value ? "match" : "no match"
}
console.log(binary([1, 2, 3, 4], 4))
