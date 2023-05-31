console.log("JavaScript tutorial 3:");

//1. Create a variable of type string and try to add a number to it.
let a = "Harry"
let b = 6
console.log(a+b) //when we use plus here it basically concatinate's two variables

//2.Use typeof operator to find the datatype of the string in last question

console.log(typeof a);
console.log(typeof b);
console.log(typeof (a+b));

//3. Create a const object in javaScript, can you change it to hold a number later?
const c ={
  name : "Harry",
  section:1,
  isPrincipal: false
}
//c=54;  //TypeError: Assignment to constant variable.
        //No we cannot change const object to hold a number later?

//4. Try to add a new key to const object in Problem 3. Were you able to do it?
c['friend']="Shubham"
c['name']="Lovish"
console.log(c);


//5. Write a JS Program to create a word-meaning dictionary of 5 Words.

const dict = {
  appreciate : "recognize the full worth of.",
  ataraxia:"a state of freedom from emotional damage.",
  yakka:"work, especially hard work.",
  aver:"to assert or affirm with confidance"
}
console.log(dict['yakka'])
  
  
  
  
  
