/*
The goal of this exercise is to convert a string to a new string where each 
character in the new string is "(" if that character appears only once in the 
original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
// BUG

let finalArr = [];
const checkChar = function (word) {
  let arr = word.toLowerCase().split("");
  let newArr = [];

  arr.forEach(function (element, index, array) {
    if (index === 0) {
      newArr = array.slice(1, arr.length);
      console.log(array, newArr);
      if (newArr.includes(element)) {
        finalArr.push(")");
      } else {
        finalArr.push("(");
      }
    } else if (index === arr.length - 1) {
      arr = word.toLowerCase().split("");
      newArr = arr.slice(0, arr.length - 1);
      console.log(arr, newArr);
      if (newArr.includes(element)) {
        finalArr.push(")");
      } else {
        finalArr.push("(");
      }
    } else if (index === 1) {
      arr = word.toLowerCase().split("");
      const rest = arr.slice(2, arr.length);
      newArr = [array[0], ...rest];
      console.log(array, newArr);
      newArr.includes(element) ? finalArr.push(")") : finalArr.push("(");
    } else {
      arr = word.toLowerCase().split("");
      const first = [...arr.slice(0, index--)];
      const resty = [...arr.slice(index + 2, arr.length)];
      newArr = first.concat(resty);
      console.log(arr, newArr);
      if (newArr.includes(element)) {
        finalArr.push(")");
      } else {
        finalArr.push("(");
      }
    }
  });
  return finalArr.join().replace(/,/g, "");
};
