/*

018 Array prototype slice call

Point #1:
---------
First of all, these two are the same:

[].slice.call === Array.prototype.slice.call

Thus, the shorter version is simply an easier way to type.


Point #2:
---------
In JavaScript, we can bind methods of one object to another object, on the fly.

To explain this, we'll use the code from example #012: Objects pt1. 
We'll only slightly modify it:
*/
var john = {
    name: 'John',
    lastName: 'Doe',

    referToFormally : function() {
      return "Mr. " + this.name + " " + this.lastName;
    }
}
john.referToFormally();

var mike = {
    name: 'Mike'
}
john.referToFormally.call(mike); // will NOT return 'Mr. Mike Doe'

/*
Why did we get back "Mr. Mike undefined"?

Because you can't call a non-function. 

Try this and see what happens:
// john.lastname.call(mike)

*/
