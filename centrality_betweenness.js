/* Betweenness centrality
* basic Breadth-first search to get all nodes with distances
* return the distance from the first noed to all other nodes in a dictionary
*/
function breadthFirst(edges, distances, queue) {
    while (queue.length > 0) {
        let current = queue.shift();
        for (let j = 0; j < edges.length; j++) {
            const [start, end] = edges[j];
            if (start === current && !(end in distances)) {
                distances[end] = distances[start] + 1;
                queue.push(end);
            }
        }
    }
    return distances;
}

// create a 'neighborhood' to check which node have a dependency with thecurrent node
function getNodeDependencies(edges, distances, dependency, node) {
    const neighbors = [];
    for (let k = 0; k < edges.length; k++) {
        const [start, end] = edges[k];
        if (start === node && distances[start] < distances[end]) {
            neighbors.push(end);
        }
    }
    // each neighbor is a dependency
    dependency[node] += neighbors.length;

    return dependency;
}

// Normalize betweenness centrality between 0 and 1
function normalizeBetweenness(b) {
    const nodes = Object.keys(b);
    const maxB = Math.max(...nodes.map(node => b[node]));
    for (let node in b) {
        b[node] /= maxB;
    }

    return b;
}

function betweennessCentrality(edges) {
    let betweenness = {};

    for (let edge of edges) {
        betweenness[edge[0]] = 0;
        betweenness[edge[1]] = 0;
    }

    // for each nodes
    for (const [key, value] of Object.entries(betweenness)) {
        let dependency = {};
        let distances = {};
        distances[key] = 0;

        // get distances to all other nodes thanks to a breadth first algo
        distances = breadthFirst(edges, distances, [key]);

        // Init dependency with all nodes
        for (let node in distances) {
            dependency[node] = 0;
        }

        // Backtrack and accumulate dependencies
        const nodesInOrder = Object.keys(distances).sort((a, b) => distances[b] - distances[a]);
        for (let j = 0; j < nodesInOrder.length; j++) {
            const node = nodesInOrder[j];
            
            // get the dependencies of the current node
            dependency = getNodeDependencies(edges, distances, dependency, node);
            if (node !== key) {
                betweenness[node] += dependency[node];
            }
        }
    }

    return betweenness;
}

// Example usage
const edges = [
    ['A', 'B'],
    ['A', 'E'],
    ['B', 'A'],
    ['B', 'C'],
    ['B', 'D'],
    ['C', 'B'],
    ['C', 'D'],
    ['C', 'F'],
    ['D', 'B'],
    ['D', 'C'],
    ['E', 'A'],
    ['E', 'F'],
    ['F', 'E'],
    ['F', 'C']
];

const centrality = betweennessCentrality(edges);
console.log("Centrality of each edges :");
console.log(centrality);
console.log("Result scaled between 0 and 1 :");
console.log(normalizeBetweenness(centrality));
