// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// start a test by running - jest reversestring/test.js --watch


// solution with reduce and debugger
// to use debugger call it and then manually call the function
// then change directory to that File
// run node inspect index.js
// in debugger console run cont
// run comand repl
// check properties such as string
// paste some code
function reverse(str) {
  debugger;
  return str.split('').reduce((rev, char) => char + rev,'');
}
reverse('asdf');


// debugger statement
module.exports = reverse;
//answer with array helpers
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }
// or
// return str.split('').reverse().join('');



// this is revised for loop syntax
// function reverse(str) {
//   let reversed = '';
//     for (let character of str){
//       reversed = character + reversed;
//     }
//     return reversed
// }
