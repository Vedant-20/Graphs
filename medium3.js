// Word Ladder (Medium):
// Given two words (beginWord and endWord) and a dictionary, find the length of the shortest transformation sequence from beginWord to endWord.

function ladderLength(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
      return 0; // End word is not in the word list, cannot transform.
    }
  
    const wordSet = new Set(wordList);
  
    const queue = [{ word: beginWord, level: 1 }];
    const visited = new Set();
  
    while (queue.length > 0) {
      const { word, level } = queue.shift();
  
      if (word === endWord) {
        return level; // Transformation found.
      }
  
      for (let i = 0; i < word.length; i++) {
        for (let j = 97; j <= 122; j++) { // ASCII values for lowercase letters
          const newWord =
            word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
  
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push({ word: newWord, level: level + 1 });
          }
        }
      }
    }
  
    return 0; // No transformation sequence found.
  }
  
  // Example usage:
  const beginWord = "hit";
  const endWord = "cog";
  const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
  
  const result = ladderLength(beginWord, endWord, wordList);
  console.log(result); // Output: 5 (hit -> hot -> dot -> dog -> cog)
  