// function fib(n, memo = []) {
// 	if (memo[n] !== undefined) return memo[n]
// 	if (n <= 2) return 1
// 	var res = fib(n - 1, memo) + fib(n - 2, memo)
// 	memo[n] = res
// 	return res
// }
// console.log(fib(1203))
var num = 168000000
if (num >= 1000000000) console.log(`${(num / 1000000000).toFixed(1)}b`)
else if (num >= 1000000) console.log(`${(num / 1000000).toFixed(1)}m`)
else if (num >= 1000) console.log(`${(num / 1000).toFixed(1)}k`)
else console.log(`${num}`)
