function pivot(arr, start = 0, end = arr.length - 1) {
	var pivot = arr[start]
	var swapIndex = start

	const swap = (arr, i, j) => {
		var temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++
			swap(arr, swapIndex, i)
			//console.log(arr)
		}
	}
	swap(arr, start, swapIndex)
	return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right)
		quickSort(arr, left, pivotIndex - 1)
		quickSort(arr, right, pivotIndex + 1)
	}
	return arr
}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
