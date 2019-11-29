/**
 * A function to extract the longest word from a sentence.
 * 
 * @param {string} sentence 
 */
function findLongestWord(sentence) {
	let words = sentence.split(' ');
	
	words.sort((a, b) => {
		if (a.length < b.length) return 1;
		else return -1;
	})
	
	let longestWord = words[0];
	return longestWord
}

let sentence = 'my name is tiana';
let longestWord = findLongestWord(sentence);
console.log(longestWord);

module.exports = findLongestWord;