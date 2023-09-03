// Breadth-First Search (BFS) (Easy):
// Implement BFS to traverse a graph or find the shortest path between two nodes.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstSearch(root) {
  if (!root) {
    return []; // Return an empty array for an empty tree
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue the front node
    result.push(node.val); // Process the current node

    // Enqueue the left and right children if they exist
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(breadthFirstSearch(root)); // Output: [1, 2, 3, 4, 5]
