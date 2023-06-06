function reverseStr(word)
{
  let reversedArr = word.split('');

  let start = 0;
  let end = reversedArr.length - 1;

  while (start < end)
  {
    let tmp = reversedArr[start];
    reversedArr[start] = reversedArr[end];
    reversedArr[end] = tmp;

    start++;
    end--;
  }

  let reversed = reversedArr.join('');
  return reversed;

  
}
function isPalindrome(word) {
  // Insert code here;

  const reversedWord = reverseStr(word);
  return word === reversedWord;

}

// Do not edit this line;
module.exports = isPalindrome;

// brutal approach: use two pointers in a for loop, one pointer points to the first letter
// another pointer points to the last letter
// in the loop, compare if the two pointers' value is the same
// time complexity: o(n), worst case: o(n/2)

// another way: reverse the string, and see if it's the same with the original word
// time complexity: o(n), worst case: o(n/2)