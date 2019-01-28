// 010 FLOW CONTROL WITH IF CONDITIONS

// To control the execution of our code, we can set up different coditions

// If a condition is true, the code will run, otherwise, the condition will be skipped

var a = prompt("Do you like TV"); // code from exercise _009

if(a=="yes"){
     console.log("There is an excellent program on the TV right now.");
} else if(a == "no") {
     console.log("Maybe you should read a book");
} else if(a == "maybe") {
     console.log("I know how you feel. I'm indecisive on the matter too.");
} else {
     console.log("I don't understand foreign languages.");
}
