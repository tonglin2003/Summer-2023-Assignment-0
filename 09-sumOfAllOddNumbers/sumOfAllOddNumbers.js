function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let countOfAllEven  = 0;

  nums.forEach(element => {
    countOfAllEven = element % 2 !== 0? countOfAllEven + 1 : countOfAllEven;
  });

  return countOfAllEven;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;