// 002 The assignment operator

// The assignment operator is A DIRECT ORDER.
// There are no IFs, ANDs, or BUTs. 
// The computer MUST do what we tell it to do. 
// That's the assignment operator.
 
var a = 10;

// Above, we are ORDERING the computer:
// "Create a new variable, call it "a", and ASSIGN it the value of 10."

// UPDATING VARIABLES
// We can order the computer to UPDATE the value whenever we like.
// For example:

a = 8;
a = 5;
a = 3;

// To check the value, we simply type (inside the console):

a

// EXERCISE:
// For each line below, decide whether it is an EXPRESSION or a STATEMENT.

// Note: Welcome to a RABBIT HOLE :)

var x // returns 'undefined'
y = 5 // retuns 5
x = 7 // returns 7

/* 
    Solution:
  
    In JavaScript, every piece of code is either an expression or a statement.

    Statements ALWAYS return UNDEFINED.
    Expressions ALWAYS return A VALUE.

    Three things to KNOW:
     1. undefined is a value itself
     ------------------------------
        This means that while statmements always return 'undefined', an expression can
        also sometimes return 'undefined'.
     2. Declaring a variable without the 'var' keyword
     -------------------------------------------------
        If we declare a variable without the 'var' keyword, it will create a new
        variable. So why use 'var'? What's the difference?
            One simple trick to remember is: 
                variables created without the 'var' keyword can be deleted.
                variables created with the var keyword can't be deleted
      3. Strict mode
      -------------- 
        If you use the strict mode in JS, you can avoid the problem of variables 
        declared without the var keyword.

*/
