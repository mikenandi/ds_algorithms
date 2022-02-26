class Node {
	constructor(val) {
		this.val = tval
		this.next = null
	}
}
class Queue {
	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}
	//really pushing means adding to tail
	enqueue(val) {
		var newNode = new Node(val)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		return this.size++
	}
	//really shifting means removing from the head
	dequeue() {
		if (!this.first) return null
		if (this.first === this.last) this.last = null
		var temp = this.first
		this.first = this.first.next
		this.size--
		return temp.val
	}
}
