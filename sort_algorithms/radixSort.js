//radix sort
const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
const digitCount = (num) => {
	if (num === 0) return 1
	return Math.floor(Math.log10(Math.abs(num))) + 1
}
const mostDigits = (nums) => {
	let maxDigits = 0
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]))
	}
	return maxDigits
}
function radixSort(nums) {
	let maxDigits = mostDigits(nums)
	for (let k = 0; k < maxDigits; k++) {
		let bucketArray = Array.from({length: 10}, () => [])
		for (let i = 0; i < nums.length; i++) {
			let digitBucketIndex = getDigit(nums[i], k)
			bucketArray[digitBucketIndex].push(nums[i])
		}
		nums = [].concat(...bucketArray)
	}
	return nums
}
// console.log(getDigit(1434, 2))
// console.log(digitCount(12345678))
//console.log(mostDigits([1, 2344, 45, 67, 9696868686, 874]))
console.log(radixSort([1, 2344, 45, 67, 9696868686, 874]))
