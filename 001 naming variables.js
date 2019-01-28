/* 001 NAMING VARIABLES

Variables are labels for pieces of memory.

They are like labels on jars. 

What's inside of a jar is some "value".

To name a variable, we use the JavaScript keyword "var", like this:
*/

var someJar

// any valid variable name can begin with: a letter, an _, a $ sign:

var _

var a

var $

// any valid variable name can also contain a number, it just can't start with a number:

var _1

var a2

var $50

// Question:
// Why does the console return 'undefined'?

var b // returns 'undefined'

/* Answer:
   Because it is a STATEMENT.
   
   In JavaScript, every piece of code is either an expression or a statement.

   Statments ALWAYS return UNDEFINED.
*/
