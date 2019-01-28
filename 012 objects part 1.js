/* 

012 Objects in JS, part 1

An object in JavaScript is just a bunch of key-value pairs.

For example:

*/

var person = {
    name: 'John',
    lastName: 'Doe',
    age: 30,
    referToFormally : function() {
      return "Mr. " + this.name + " " + this.lastName;
    },
    // etc...
}

/*
Each key-value pair is separated by commas.
The first key is 'name', and it's value is 'John' (of type string)
The third key is 'age', and it's value is '30' (of type number)
The fourth key is 'referToFormally', and it's value is an anonymous function (cuz it has no name)

Each KEY-VALUE pair is referred to as 'MEMBER'.

If a member's value is not a function, it's referred to as 'PROPERTY'
If a member's value is a function, it's referred to as 'METHOD'
*/

/*
Now if we type 'person', we'll get the object back.
*/
person;

/*
Property accessors are operators that allow us to access object's properties
*/
person.referToFormally()