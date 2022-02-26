class Node {
	constructor(val, priority) {
		this.val = val
		this.priority = priority
	}
}

class PriorityQueue {
	constructor() {
		this.values = []
	}
	insert(value, priority) {
		let newNode = new Node(value, priority)
		this.values.push(newNode)
		this.bubleUp()
	}
	bubleUp() {
		let idx = this.values.length - 1
		const value = this.values[idx]
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2)
			let parent = this.values[parentIdx]
			if (value.priority <= parent.priority) break
			//swap
			this.values[parentIdx] = value
			this.values[idx] = parent
			idx = parentIdx
		}
	}
	dequeue() {
		const min = this.values[0]
		const end = this.values.pop()
		if (this.values.length > 0) {
			this.values[0] = end
			this.sinkDown()
		}
		return min
	}
	sinkDown() {
		var idx = 0
		const length = this.values.length
		const value = this.values[0]
		while (true) {
			let leftChildIdx = 2 * idx + 1
			let rightChildIdx = 2 * idx + 2
			let leftChild, rightChild
			let swap = null

			if (leftChildIdx < length) {
				console.log("left side")
				leftChild = this.values[leftChildIdx]
				console.log(leftChild.priority < value.priority)
				if (leftChild.priority < value.priority) {
					swap = leftChildIdx
					console.log("first cond")
				}
			}
			if (rightChildIdx < length) {
				console.log("right side")
				rightChild = this.values[rightChildIdx]
				if (
					(swap === null && rightChild.priority < value.priority) ||
					(swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx
				}
			}
			if (swap === null) break
			this.values[idx] = this.values[swap]
			this.values[swap] = value
			idx = swap
		}
	}
}

var er = new PriorityQueue()
er.insert("common cold", 1)
er.insert("high fever", 2)
er.insert("malaria", 0)
console.log(er.dequeue())
