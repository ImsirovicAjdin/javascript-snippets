/* 

016 The "Document Object" Model

Each webpage that is loaded inside the browser window is known
as the 'document'.

*/
// type this in the console:
// document

/*
In JavaScript, this 'document' is actually an object. 

Hence, we call it 'document object'.

Finally, the way it should work is called a 'model'. It is a model of how we should interact
with it, and how it should behave.

So, altogether, it is called the DOM: the Document Object Model.

Proof that the document is an object?
------------------------------------- 

Well, just like we accessed our person object's name in the snippet 012:
person.name,

...we can access any member of the document object, by typing 'document', then the dot, then
any member of the document object.

How do we know which member we can access? It's simple, Chrome gives us suggestions.

For example, we can access:
 * document.URL
 * document.getElementsByTagName.

getElementsByTagName is a function. We say it's a "method of the document object".

This means that we can call it.

        If you need a refresher on calling a function,
        please refer to this link:

        https://bitly.com/js-function-anatomy

So, to continue, we can call a method on the document object, like this:

document.getElementsByTagName('h1')

So let's do it and see what we get back.

We get back an HTMLCollection.

Here is a definition from MDN:
The HTMLCollection interface represents a generic collection (array-like object
similar to arguments) of elements (in document order) and offers methods
and properties for selecting from the list.

One common exercise is to convert an HTMLCollection to a real JS array.
*/