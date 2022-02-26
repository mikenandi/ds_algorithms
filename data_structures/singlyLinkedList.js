class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}
class SinglyLinkedList {
	constructor() {
		this.tail = null
		this.head = null
		this.length = 0
	}
	push(val) {
		var newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}
	pop() {
		if (!this.head) return undefined
		var current = this.head
		var newTail = current
		while (current.next) {
			newTail = current
			current = current.next
		}

		this.tail = newTail
		this.tail.next = null
		this.length--
		if (this.length === 0) {
			this.tail = null
			this.head = null
		}
		return current
	}
	shift() {
		if (this.length === 0) return undefined
		var current = this.head
		this.head = current.next
		this.length--
		return current
	}
	unshift(val) {
		var newNode = new Node(val)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		} else {
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return this.head
	}
	get(index) {
		if (index < 0 || index > this.length) return null
		var counter = 0
		var current = this.head
		while (counter !== index) {
			current = current.next
			counter++
		}
		return current
	}
	set(index, val) {
		var found = this.get(index)
		if (found) {
			found.val = val
			return true
		}
		return false
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false
		if (index === this.length) return !!this.push(val)
		if (index === 0) return !!this.unshift(val)
		var newNode = new Node(val)
		var prev = this.get(index - 1)
		var temp = prev.next
		prev.next = newNode
		newNode.next = temp
		this.length++
		return true
	}
	remove(index) {
		if (index < 0 || index > this.length) return false
		if (index === this.length) return !!this.pop()
		if (index === 0) return !!this.unshift(val)
		var newNode = new Node(val)
		var prev = this.get(index - 1)
		var temp = prev.next
		prev.next = newNode
		newNode.next = temp
		this.length--
		return true
	}
}

var list = new SinglyLinkedList()
list.push("good morning")
list.push("hey")
list.push("juma")

console.log(list.insert(0, "jobo"))
