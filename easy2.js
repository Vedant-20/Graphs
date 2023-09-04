// Depth-First Search (DFS) (Easy):
// Implement DFS to traverse a graph or find paths between nodes.

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function depthFirstSearch(root) {
    const result = [];
  
    function dfs(node) {
      if (!node) {
        return; // Return if the node is null
      }
  
      result.push(node.val); // Process the current node
  
      dfs(node.left); // Recursively visit the left subtree
      dfs(node.right); // Recursively visit the right subtree
    }
  
    dfs(root); // Start DFS from the root
  
    return result;
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log(depthFirstSearch(root)); // Output: [1, 2, 4, 5, 3]
  