class PriorityQueue {
	constructor() {
		this.values = []
	}
	enqueue(val, priority) {
		this.values.push({val, priority})
		this.sort()
	}
	dequeue() {
		return this.values.shift()
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority)
	}
}
class WeightedGraph {
	constructor() {
		this.adjancencyList = {}
	}
	addVertex(vertex) {
		if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = []
	}
	addEdge(vertex1, vertex2, weight) {
		this.adjancencyList[vertex1].push({node: vertex2, weight})
		this.adjancencyList[vertex2].push({node: vertex1, weight})
	}
	shortestPath(start, finish) {
		const node = new PriorityQueue()
		const distances = {}
		const previous = {}
		const path = []
		let smallest

		for (let vertex in this.adjancencyList) {
			if (vertex === start) {
				distances[vertex] = 0
				node.enqueue(vertex, 0)
			} else {
				distances[vertex] = Infinity
				node.enqueue(vertex, Infinity)
			}
			previous[vertex] = null
		}

		while (node.values.length) {
			smallest = node.dequeue().val
			if (smallest === finish) {
				while (previous[smallest]) {
					path.push(smallest)
					smallest = path[smallest]
				}
				break
			}
			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbour in this.adjancencyList[smallest]) {
					let nextNode = this.adjancencyList[smallest][neighbour]

					let candidate = distances[smallest] + nextNode.weight
					let nextNeigbour = nextNode.node

					if (candidate < distances[nextNeigbour]) {
						distances[nextNeigbour] = candidate
						previous[nextNeigbour] = smallest
						node.enqueue(nextNeigbour, candidate)
					}
				}
			}
		}
		console.log(path)
	}
}

var data = new WeightedGraph()
data.addVertex("A")
data.addVertex("D")
data.addVertex("B")
data.addVertex("C")
data.addVertex("E")
data.addVertex("F")
data.addEdge("A", "B", 4)
data.addEdge("A", "C", 2)
data.addEdge("B", "D", 3)
data.addEdge("C", "E", 2)
data.addEdge("C", "F", 4)
data.addEdge("D", "E", 3)
data.addEdge("D", "F", 1)
data.addEdge("E", "F", 1)
data.shortestPath("A", "E")
//console.log(data.adjancencyList)
