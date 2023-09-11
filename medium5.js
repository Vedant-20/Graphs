// Graph Valid Tree (Medium):
// Given n nodes labeled from 0 to n-1 and a list of edges, check if the graph is a valid tree.

function validTree(n, edges) {
    if (n <= 0) return false; // Empty graph is not a valid tree
    if (edges.length !== n - 1) return false; // A valid tree must have n-1 edges for n nodes
  
    const graph = new Map();
  
    // Build an adjacency list from the edge list
    for (const [u, v] of edges) {
      if (!graph.has(u)) graph.set(u, []);
      if (!graph.has(v)) graph.set(v, []);
      graph.get(u).push(v);
      graph.get(v).push(u);
    }
  
    const visited = new Set();
    
    function hasCycle(node, parent) {
      visited.add(node);
      
      for (const neighbor of graph.get(node)) {
        if (neighbor === parent) continue; // Skip the parent node
        if (visited.has(neighbor) || hasCycle(neighbor, node)) {
          return true; // Found a cycle
        }
      }
      
      return false;
    }
  
    // Check for cycles starting from each unvisited node
    for (const node of graph.keys()) {
      if (!visited.has(node) && hasCycle(node, null)) {
        return false; // Cycle found, not a valid tree
      }
    }
  
    // If no cycles are found, it's a valid tree
    return true;
  }
  
  // Example usage:
  const n = 5;
  const edges = [[0, 1], [0, 2], [0, 3], [1, 4]];
  
  console.log(validTree(n, edges)); // Output: true (A tree with 5 nodes and 4 edges)
  