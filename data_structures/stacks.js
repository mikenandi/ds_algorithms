class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}
class Stack {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}
	//Realy unshifting means adding to the head
	push(val) {
		var newNode = new Node(val)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			var temp = this.first
			this.first = newNode
			this.first.next = temp
		}

		return ++this.size
	}
	//Really shifting means removing from begining
	pop() {
		if (!this.first) return null
		if (this.first === this.last) this.last = null

		var temp = this.first
		this.first = this.first.next
		--this.size
		return temp.val
	}
}

var data = new Stack()
data.push(10)
data.push(11)
data.push(12)
data.push(13)
data.push(14)
console.log(data.pop())
