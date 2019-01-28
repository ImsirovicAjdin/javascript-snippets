// 011 FIZZ-BUZZ EXERCISE

// This exercise is used to see if a person can code at all

for(var i = 1; i<101; i++){
   debugger;
   if (i%15 == 0){
       console.log("FizzBuzz");
   } else if (i%5 == 0) {
       console.log("Buzz");
   } else if (i%3 == 0) {
       console.log("Fizz");
   } else {
       console.log(i);
   }
}