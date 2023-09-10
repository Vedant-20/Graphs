// Number of Islands (Medium):
// Given a 2D grid of '1's (land) and '0's (water), count the number of islands.

function numIslands(grid) {
    if (!grid || grid.length === 0) {
      return 0; // Empty grid, no islands.
    }
  
    const numRows = grid.length;
    const numCols = grid[0].length;
    let islandCount = 0;
  
    function dfs(row, col) {
      if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === '0') {
        return;
      }
  
      grid[row][col] = '0'; // Mark the current cell as visited
  
      // Visit all neighboring cells
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
    }
  
    // Iterate through the grid
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (grid[row][col] === '1') {
          islandCount++;
          dfs(row, col); // Start DFS from the current cell
        }
      }
    }
  
    return islandCount;
  }
  
  // Example usage:
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ];
  
  console.log(numIslands(grid)); // Output: 3
  