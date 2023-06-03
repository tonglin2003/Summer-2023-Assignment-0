function titleCaseEdit(title) {
  // Insert code here;


  let string_arr = title.split(' ');

  let capitalizedTitle = string_arr.map(word => word[0].toUpperCase() + word.slice(1));
  let result = capitalizedTitle.join(' ');
  
  return result;

}

// Do not edit this line;
module.exports = titleCaseEdit;