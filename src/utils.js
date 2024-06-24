// Your code here
export function isPalindrome(word){
    const reversedWord = [...word].reverse().join('');
    return word === reversedWord;
}