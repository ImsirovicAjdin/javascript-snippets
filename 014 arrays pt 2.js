/* 

014 Arrays in JS, part 2

Exercise: 

Based on 013, let's take any text, split it into an array of words, and look for a 
specific word in the text:
*/

var text = prompt("Please add the text to search.");

var sentenceToArray = function(text) {
    return text.trim().split(" "); // (1)
}

var groceries = sentenceToArray(text); // (2)

var searchTerm = prompt("Please type the word you're searching for.");

for(i=0;i<groceries.length;i++){
  if(groceries[i] == searchTerm){
    console.log("The word \"" + searchTerm + "\"" + " found in the list, at position " + (Number(i)+1)); // (3)
    console.log('The word "' + searchTerm + '"' + ' found in the list, at position ' + (Number(i)+1)); // (4)
  }
}

// (1) first we .trim() the whitespace (spaces, tabs, ...) from input, then we split the string into array, AT SPACES
// (2) we assign THE VALUE RETURNED from function call, to the groceries variable
// (3) we need to add quotes around the search term, so we must ESCAPE the double quotes
// (4) alternatively, we could combine the single quotes with double quotes, so we don't have to escape the double quotes