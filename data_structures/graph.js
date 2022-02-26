class Graph {
	constructor() {
		this.adjacentlist = {}
	}
	addVertex(vertex) {
		if (!this.adjacentlist[vertex]) this.adjacentlist[vertex] = []
	}
	addEdge(v1, v2) {
		this.adjacentlist[v1].push(v2)
		this.adjacentlist[v2].push(v1)
	}
	removeEdge(vertex1, vertex2) {
		this.adjacentlist[vertex1] = this.adjacentlist[vertex1].filter(
			(v) => v !== vertex2,
		)
		this.adjacentlist[vertex2] = this.adjacentlist[vertex2].filter(
			(v) => v !== vertex1,
		)
	}
	removeVertex(vertex) {
		while (this.adjacentlist[vertex].length) {
			const adjacentVertex = this.adjacentlist[vertex].pop()
			this.removeEdge(vertex, adjacentVertex)
		}
		delete this.adjacentlist[vertex]
	}
	depthFirstSearchRecursive(start) {
		const result = []
		const visited = {}
		const adjacentlist = this.adjacentlist

		function dfs(vertex) {
			if (!vertex) return null
			visited[vertex] = true
			result.push(vertex)
			adjacentlist[vertex].forEach((neighbour) => {
				if (!visited[neighbour]) return dfs(neighbour)
			})
		}
		dfs(start)
		return result
	}
	depthFirstSearchItirative(start) {
		const stack = [start]
		const result = []
		const visited = {}
		let currentVertex

		visited[start] = true
		while (stack.length) {
			currentVertex = stack.pop()
			result.push(currentVertex)

			this.adjacentlist[currentVertex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					visited[neighbour] = true
					stack.push(neighbour)
				}
			})
		}

		return result
	}
	breadthFirst(start) {
		const queue = [start]
		const result = []
		const visited = {}
		let currentVertex

		while (queue.length) {
			currentVertex = queue.shift()
			result.push(currentVertex)

			this.adjacentlist[currentVertex].forEach((neighbour) => {
				if (!visited[neighbour]) {
					visited[neighbour] = true
					queue.push(neighbour)
				}
			})
		}
		return result
	}
}

var data = new Graph()
data.addVertex("A")
data.addVertex("D")
data.addVertex("B")
data.addVertex("C")
data.addVertex("E")
data.addVertex("F")
data.addEdge("A", "B")
data.addEdge("A", "C")
data.addEdge("B", "D")
data.addEdge("C", "E")
data.addEdge("D", "E")
data.addEdge("D", "F")
data.addEdge("E", "F")
console.log(data.breadthFirst("D"))
