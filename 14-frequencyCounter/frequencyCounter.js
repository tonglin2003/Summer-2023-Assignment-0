function frequencyCounter(word) {
  // Insert code here;
  let frequencyObject = {};
  const wordArr = word.split('');

  wordArr.forEach(element => {
    if (frequencyObject[element])
    {
      frequencyObject[element]++;
    }
    else
    {
      frequencyObject[element] = 1;
    }
  });

  return frequencyObject;
}

// Do not edit this line;
module.exports = frequencyCounter;