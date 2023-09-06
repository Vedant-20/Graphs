// Clone Graph (Medium):
// Clone an undirected graph. Each node contains a label and a list of its neighbors.


class Node {
    constructor(val, neighbors = []) {
      this.val = val;
      this.neighbors = neighbors;
    }
  }
  
  function cloneGraph(node) {
    if (!node) {
      return null; // Return null for an empty graph
    }
  
    const visited = new Map();
  
    function dfs(originalNode) {
      if (!originalNode) {
        return null;
      }
  
      if (visited.has(originalNode)) {
        return visited.get(originalNode);
      }
  
      const cloneNode = new Node(originalNode.val);
      visited.set(originalNode, cloneNode);
  
      for (const neighbor of originalNode.neighbors) {
        const cloneNeighbor = dfs(neighbor);
        cloneNode.neighbors.push(cloneNeighbor);
      }
  
      return cloneNode;
    }
  
    return dfs(node);
  }
  
  // Example usage:
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  
  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];
  
  const clonedNode = cloneGraph(node1);
  console.log(clonedNode);
  