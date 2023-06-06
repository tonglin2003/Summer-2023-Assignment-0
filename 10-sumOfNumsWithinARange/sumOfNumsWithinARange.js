function binarySearch(arr, target)
{
  if (arr.length === 1)
  {
    if (arr[0] === target)
        return 0;
    else 
        return -1;
  }

  let median = 0, low = 0, high = arr.length - 1;
  
  while (low <= high)
  {
    median = Math.floor((high + low) / 2);
    if (arr[median] < target)
    {
      low = median + 1;
    }
    else if (arr[median] > target)
    {
      high = median - 1;
    }
    else
    {
      return median;
    }
  }

  return -1;

}


function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;

  // in the case when there is only one number
  if (nums.length <= 1)
  {
    if (nums[0] === start) return 1;
    else return 0;
  }

  let startIndex = binarySearch(nums, start); // 0
  let endIndex = binarySearch(nums, end); // -1


  if (startIndex !== -1 && endIndex !== -1) // if both start and end were found in the array
  {
    return (endIndex - startIndex)+1;
  }
  else if (startIndex !== -1)
  {
    return (nums.length) - startIndex;
  }
  else // if start were not found, end found and not found
  {
    return 0;
  }

}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;

// brutal approach: use a for loop to loop through the array, start counting when 
//start argument is found, until end argument is found (o(n))

// Improved: use binary search to find the start argument's index
// then find end argument's index, then endIndex - startIndex (O(log n))
