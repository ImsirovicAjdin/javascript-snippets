/* 

017 Converting an HTMLCollection to an array

Why?
----
HTMLCollections are array-like objects.

Which means that they sort of behave like arrays, but don't have some array
methods available. Like push, pop, slice, etc.

How to do it?
-------------

There are several ways to convert an array-like object to an array,
but here is a simple one:

// get an HTMLCollection:
var anArrayLikeObject = document.getElementsByTagName('h1');

// convert it to an array:
[].slice.call(anArrayLikeObject)

This leads us to a question:
Just what is happening in the above code?

*/