const palindromes = function (entryString) {

    /*
    // remove non-valid caracters (used a RegExp found on stackoverflow 
    // https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex)
    */

    const arrayString = entryString.match(/[^_\W]+/g);
    const cleanString = arrayString.join('').toLowerCase();

    /* 
    R A C -E- C A R 
    1. find the pivot position
    2. extract first part of the string
    3. extract end part of the string (then, use split to reverse the string)
    4. If both match, then is a palindrome
    
    */
    
    const evenNumber = (cleanString.length % 2) == 0 ? true : false;

    console.log(cleanString, evenNumber ? ' -> Even':' -> Odd');

    const pivotPosition = Math.ceil(cleanString.length / 2) - 1;

    const firstSlice = cleanString.substring(0, pivotPosition);

    const deltaWhenEven = evenNumber ? 2 : 1;
    const endSlice = cleanString.substring(pivotPosition + deltaWhenEven, cleanString.length).split('').reverse().join('');

    console.log(`${firstSlice} VS ${endSlice}`);
    if (firstSlice === endSlice) {
        return true;
    }

    return false;


};

module.exports = palindromes;