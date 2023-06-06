function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let countOfMatchIndex = 0;
  for (let i=0; i < nums.length; i++)
  {
    countOfMatchIndex = nums[i] === i? countOfMatchIndex+1 : countOfMatchIndex;
  }

  return countOfMatchIndex;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;