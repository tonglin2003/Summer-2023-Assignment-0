function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  if (nums.length <= 1) return nums[0];
  

  let min = nums[0], max = nums[0];

  [10, 3, 5, 1, 4, 8];

  for (let i = 1; i < nums.length; i++)
  {
    if (nums[i] < min)
    {
      min = nums[i];
    } 
    else if (nums[i] > max)
    {
      max = nums[i];
    }

  }
  
  return min+max;

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;

// brutal approach: find the min and max in one loop, O(n)

// possible way: sort the array first, then take the first and last element
// but fastest sorting algorithm is quicksort with o(n log n), and didn't improve the time complexity