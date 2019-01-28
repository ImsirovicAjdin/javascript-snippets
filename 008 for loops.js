/* 008 FOR LOOPS 

WHAT IS A FOR LOOP?
-------------------

It's a piece of code that checks if a certain value is WITHIN A RANGE,
and if so, it IS RUN REPEATEDLY, checking on each ITERATION if the 
CONDITION still holds.

Once the CONDITION is no longer true, the for loop terminates.

THE STRUCTURE OF A FOR LOOP.
----------------------------

PSEUDO-CODE AHEAD!

for ( startValue, endValue, howToUpdateValue ) {
    // code to run
}

REAL CODE:
for(let i=0;i<10;i=i+2){
  console.log(i);
}

PUT IT IN A FUNCTION:
*/
function incrementor(n){
  for(let i=0; i<10; i += n){
    console.log(i);
  }
}
// THE ANATOMY OF A JS FUNCTION:
// bitly.com/js-function-anatomy