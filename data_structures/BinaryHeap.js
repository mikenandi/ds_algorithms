class BinaryHeap {
	constructor() {
		this.values = []
	}
	insert(value) {
		this.values.push(value)
		this.bubleUp()
	}
	bubleUp() {
		let idx = this.values.length - 1
		const value = this.values[idx]
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2)
			let parent = this.values[parentIdx]
			if (value <= parent) break
			//swap
			this.values[parentIdx] = value
			this.values[idx] = parent
			idx = parentIdx
		}
	}
	extractMax() {
		const max = this.values[0]
		const end = this.values.pop()
		if (this.values.length > 0) {
			this.values[0] = end
			this.sinkDown()
		}
		return max
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
				leftChild = this.values[leftChildIdx]
				if (leftChild > value) {
					swap = leftChildIdx
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx]
				if (
					(swap === null && rightChild > value) ||
					(swap !== null && rightChild > leftChild)
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

var heap = new BinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(12)
heap.insert(28)
heap.insert(23)
heap.insert(10)
heap.insert(97)
heap.insert(45)
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
heap.extractMax()
console.log(heap.values)
