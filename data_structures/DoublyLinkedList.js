class Node {
	constructor(val) {
		this.val = val
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}
	push(val) {
		var newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode
		}
		this.length++
		return this
	}
	pop() {
		if (!this.head) return undefined
		var currentTail = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = currentTail.prev
			this.tail.next = null
			currentTail.prev = null
		}
		this.length--
		return currentTail
	}
	shift() {
		if (this.length === 0) return undefined
		var currentHead = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = currentHead.next
			this.head.prev = null
			currentHead.next = null
		}
		this.length--
		return currentHead
	}
	unshift(val) {
		var newNode = new Node(val)
		if (this.length === 0) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.head.prev = newNode
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return this
	}
	get(index) {
		if (index < 0 || index >= this.length) return undefined
		var count = 0
		var start = this.head
		var end = this.tail
		var mid = Math.floor(this.length / 2)
		while (index <= mid) {
			start = start.next
			count++
			return start
		}
		while (index > mid) {
			end = end.prev
			count--
			return end
		}
	}
	set(index, val) {
		var foundNode = this.get(index)
		if (foundNode) {
			foundNode.val = val
			console.log(foundNode.val)
			return true
		}
		return false
	}
	insert(index, val) {
		if (index < 0 || index >= this.length) return undefined
		if (index === 0) return !!this.unshift(val)
		if (index === this.length) return !!this.push(val)

		var newNode = new Node(val)
		var prevNode = this.get(index - 1)
		var afterNode = prevNode.next
		prevNode.next = newNode
		newNode.prev = prevNode
		newNode.next = afterNode
		afterNode.prev = newNode

		this.length++
		return true
	}
	remove(index) {
		if (index < 0 || index >= this.length) return false
		if (index === 0) return this.shift()
		if (index === this.length - 1) return this.pop()

		var removedNode = this.get(index)
		var beforeNode = removedNode.prev
		var afterNode = removedNode.next
		beforeNode.next = afterNode
		afterNode.prev = beforeNode
		removedNode.next = null
		removedNode.prev = null
		this.length--
		return removedNode
	}
}

var list = new DoublyLinkedList()

list.push(11)
list.push(12)
list.push(13)
list.push(14)
list.push(15)
list.push(16)
list.push(17)
list.push(18)
console.log(list.remove(5))
console.log(list)
