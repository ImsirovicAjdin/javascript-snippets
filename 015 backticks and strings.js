/* 

015 Backticks and strings

Exercise: 

Rewrite 014, using the new ES6 backticks syntax:
*/

var text = prompt(`Please add the 
                   text to search.`);  // (1)

var sentenceToArray = function(text) {
    return text.trim().split(" ");
}

var groceries = sentenceToArray(text);

var searchTerm = prompt(`Please type the word you're searching for.`);

for(i=0;i<groceries.length;i++){
  if(groceries[i] == searchTerm){
    // console.log('The word "' + searchTerm + '"' + ' found in the list, at position ' + (Number(i)+1));
    console.log(`The word 
                "${searchTerm}" 
                was found in the list, 
                at position ` + (Number(i)+1)); // (2)
  }
}

// (1) strings made with `` (backtics) are called TEMPLATE LITERALS (older term: template strings).
//     They allow us to embed expressions into strings
// (2) ${searchTerm} are called 'placeholders'
//     in other languages, an accepted term for this is 'variable interpolation'