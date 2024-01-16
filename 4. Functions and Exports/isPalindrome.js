// Todo 4.6a Create a function called isPalindrome function which checks if the given word is a palindrome
// What is a Palindrome? See here: https://en.wikipedia.org/wiki/Palindrome. Feel free to search for the implementation

// isPalindrome.js
function isPalindrome(word) {
    // Convert the word to lowercase to make the comparison case-insensitive
    const lowerCaseWord = word.toLowerCase();
    
    // Remove non-alphanumeric characters using regular expression
    const cleanedWord = lowerCaseWord.replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned word and check if it's the same as the original
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

// Todo 4.6b Set the isPalindrome function as the default export of the module
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
module.exports = isPalindrome;