/* 

013 Arrays in JS

If we wanted to add to computer memory several items, for example a shopping list, we could do this:

var item1 = 'bread';
var item2 = 'milk';
var item3 = 'tomato';
var item4 = 'onions';

Now, let's thing about how would we use the for loop with the above 4 variables to check
if there are onions inside the list, and at which position?

This would be a bit difficult to do.

If only we could have a single data structure that we could loop over...

ARRAYS TO THE RESCUE!

An array is perfect to group things in lists. For example:

var groceries = ['bread','milk','tomato','onions'];

now we can simply do this:

for(i=0;i<groceries.length;i++){
  if(groceries[i] == "milk"){
    console.log(i + " found in the list!")
  }
}

*/

var groceries = ['bread','milk','tomato','onions'];

for(i=0;i<groceries.length;i++){
  if(groceries[i] == "milk"){
    // console.log("Milk found in the list, at position " + i+1 )
    console.log("Milk found in the list, at position " + (Number(i)+1));
  }
}