/* 007 THE MODULUS OPERATOR

Written like this:

X % Y

Let's compare these 3 lines of code:

10 % 5 === 0; // because (2 * 5) + 0 === 10, the returned value is 0
11 % 5 === 1; // because (2 * 5) + 1 === 11, the returned value is 1
2 % 5  === 2; // because (0 * 5) + 2 === 2, the returned value is 2
7 % 5  === 2; // becuase (1 * 5) + 2 === 7 

Let's put it in a function definition:

*/

function getModulus(x,y){
  console.log(x % y)
}
// getModulus(10,5);

// THE ANATOMY OF A JS FUNCTION:
// bitly.com/js-function-anatomy