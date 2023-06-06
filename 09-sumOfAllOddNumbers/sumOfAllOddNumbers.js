function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let countOfAllOdd  = 0;

  nums.forEach(element => {
    countOfAllOdd = element % 2 !== 0? countOfAllOdd + 1 : countOfAllOdd;
  });

  return countOfAllOdd;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;