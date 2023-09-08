// Course Schedule (Medium):
// Given the total number of courses and a list of prerequisites, can you finish all courses?

function canFinish(numCourses, prerequisites) {
    // Create an adjacency list to represent the course graph
    const graph = new Array(numCourses).fill(0).map(() => []);
    for (const [course, prereq] of prerequisites) {
      graph[course].push(prereq);
    }
  
    const visited = new Array(numCourses).fill(0); // 0: unvisited, 1: visiting, 2: visited
  
    function hasCycle(course) {
      if (visited[course] === 1) {
        return true; // Detected a cycle (a back edge)
      }
  
      if (visited[course] === 2) {
        return false; // Already visited, no cycle
      }
  
      visited[course] = 1; // Mark as visiting
  
      for (const prereq of graph[course]) {
        if (hasCycle(prereq)) {
          return true; // A cycle is found
        }
      }
  
      visited[course] = 2; // Mark as visited
      return false;
    }
  
    for (let course = 0; course < numCourses; course++) {
      if (visited[course] === 0 && hasCycle(course)) {
        return false; // Cycle detected, cannot finish all courses
      }
    }
  
    return true; // No cycle found, can finish all courses
  }
  
  // Example usage:
  const numCourses = 4;
  const prerequisites = [[1, 0], [2, 1], [3, 2]];
  
  console.log(canFinish(numCourses, prerequisites)); // Output: true
  