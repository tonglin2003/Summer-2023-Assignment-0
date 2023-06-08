function pairSum(nums, target) {
  // Insert code here;

  if (nums.length < 2)
  {
    throw new Error("There is no enough number to form pair!");
  }

  let dictionary = {};

  for (let element of nums){
      let numToFormPair = target - element;
      if (dictionary[numToFormPair] === 1)
      {
        return true;
      }
      else
      {
        dictionary[element] = 1;
      }
    };

  return false;
  
}

// Do not edit this line;
module.exports = pairSum;

// brutal approach: use nested for loop, while looping the nums, check from 1st element to last element to see if it can add to a target
// time complexity: o(n^2)

// improved: use dictionary to keep track the past elements, when encounter a new element, we find the number we need by using
// the equation, numToFormPair = target - current_num, and check in the dictionary if we have numToFormPair.
// time complexity: o(n)