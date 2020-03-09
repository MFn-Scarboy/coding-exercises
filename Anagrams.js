//takes a string and an array of strings
//compares the string to the array strings, returns an array of the anagrams of the string
//returns empty array if there's no match

function anagrams(word, words) {
    var alphWord = word.split('').sort().join('')
    let arr = []
  
    for (let i = 0; i < words.length; i++) {
      let alphWordI = words[i].split('').sort().join('')
      if (alphWord === alphWordI) {
        arr.push(words[i])
      }
    }
    return arr
  }
    
  //anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])