class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}
	insert(value) {
		var newNode = new Node(value)

		if (this.root === null) {
			this.root = newNode
			return this
		}

		var current = this.root
		while (true) {
			if (value === current.value) return undefined
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode
					return this
				} else {
					current = current.left
				}
			} else if (value > current.value) {
				if (current.right === null) {
					current.right = newNode
					return this
				} else {
					current = current.right
				}
			}
		}
	}
	find(value) {
		if (!this.root) return false
		var current = this.root
		var found = false
		while (!found && current) {
			if (value > current.value) current = current.right
			else if (value < current.value) current = current.left
			else return current
		}
		return false
	}
	//Breadth first search
	BFS() {
		var node = this.root,
			data = [],
			queue = []

		queue.push(node)
		while (queue.length) {
			node = queue.shift()
			data.push(node.value)
			if (node.left) queue.push(node.left)
			if (node.right) queue.push(node.right)
		}
		return data
	}
	DFSpreOrder() {
		var data = []

		function traverse(node) {
			data.push(node.value)
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
		}
		traverse(this.root)
		return data
	}
	DFSpostOrder() {
		var data = []

		function traverse(node) {
			if (node.left) traverse(node.left)
			if (node.right) traverse(node.right)
			data.push(node.value)
		}
		traverse(this.root)
		return data
	}

	DFSinOrder() {
		var data = []

		function traverse(node) {
			if (node.left) traverse(node.left)
			data.push(node.value)
			if (node.left) traverse(node.right)
		}
		traverse(this.root)
		return data
	}
}

var data = new BinarySearchTree()
data.insert(10)
data.insert(5)
data.insert(13)
data.insert(11)
data.insert(17)
data.insert(6)
data.insert(3)

console.log(data.DFSinOrder())
