//is alphaNumeric
function charCount(str) {
	var obj = {}
	for (var char of str) {
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase()
			if (obj[char] > 0) obj[char]++
			else obj[char] = 1
		} else {
			return "string is not valid"
		}
	}
	return obj
}
function isAlphaNumeric(str) {
	var code = str.charCodeAt()
	if (
		!(code > 47 && code < 58) &&
		!(code > 64 && code < 91) &&
		!(code > 96 && code < 123)
	) {
		return false
	}
	return true
}
console.log(charCount("John"))
/**
 * FREQUNCY COUNTER ALGORITHM PATTERN EXAMPLES
 */
/**
 * A function to check if the first array and
 * its frequency is the same as its squared on
 * the right side
 */
function same(arr1, arr2) {
	//length chck
	if (arr1.length !== arr2.length) return false
	//create ojects
	var obj1 = {}
	var obj2 = {}

	//obj1
	for (let i = 0; i < arr1.length; i++) {
		var char = arr1[i]
		obj1[char] ? obj1[char]++ : (obj1[char] = 1)
	}
	//obj2
	for (let i = 0; i < arr2.length; i++) {
		var char = arr2[i]
		obj2[char] ? obj2[char]++ : (obj2[char] = 1)
	}

	//comparing the two
	for (let key in obj1) {
		//checking if that index is found in that object
		if (!(key ** 2 in obj2)) return false
		//checking if value of that index coresponds with the other
		if (obj2[key ** 2] !== obj1[key]) return false
	}
	return true
}
console.log(same([1, 3, 5], [1, 25, 9]))

/**
 * ANAGRAM
 */
function sameStr(str1, str2) {
	//length check
	if (str1.length !== str2.length) return false
	//create empty object
	var obj = {}
	//Adding objects
	for (let i = 0; i < str1.length; i++) {
		char = str1[i]
		obj[char] ? obj[char]++ : (obj[char] = 1)
	}
	//destroying object
	for (let i = 0; i < str2.length; i++) {
		char = str2[i]
		if (!obj[char]) return false
		else obj[char]--
	}
	return true
}
console.log(sameStr("cinema", "iceman"))

// console.log(sameStr("iceman", "cinema"))

/**
 * POINTERS
 */
function sumzero(arr) {
	//create index
	var left = 0
	var right = arr.length - 1
	//creating the loop for tests
	while (left < right) {
		//finding sum
		let sum = arr[right] + arr[left]
		//if found
		if (sum === 0) return [arr[left], arr[right]]
		//go backward from right
		else if (sum < 0) right--
		//go forward from left
		else left++
	}
	return "no match"
}
const a = sumzero([-3, -2, -1, 0, 1, 2])
console.log(a)
/**
 * UNIQUE VALUES
 */
// function uniqueValues(arr) {
// 	if (arr.length === 0) return 0
// 	let i = 0
// 	for (let j = 1; j < arr.length; j++) {
// 		if (arr[i] !== arr[j]) {
// 			i++
// 			arr[i] = arr[j]
// 		}
// 	}
// 	return i + 1
// }
// const z = uniqueValues([])
// const q = uniqueValues([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 6, , 7])
// console.log(z)

/**
 * RECURSION
 */

// function countDown(num) {
// 	if (num <= 0) {
// 		console.log("its DONE!!!!!")
// 		return
// 	}
// 	console.log(num)
// 	num--
// 	countDown(num)
// }
// console.log(countDown(5))

//FOR THE SUM RANGE
/*function sumRange(num) {
	if (num === 1) return 1
	return num + sumRange(num - 1)
}
console.log(sumRange(3))*/

//FOR THE FACTORIAL
/*function factorial(num) {
	if (num === 1) return 1
	return num * factorial(num - 1)
}
console.log(factorial(5))*/

//FOR NUMERICAL using helper function
/*function returnOdd(arr) {
	var result = []
	function helper(helperInput) {
		if (helperInput.length == 0) return 0
		if (helperInput[0] % 2 !== 0) result.push(helperInput[0])
		helper(helperInput.slice(1))
	}
	helper(arr)
	return result
}
console.log(returnOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]))*/
