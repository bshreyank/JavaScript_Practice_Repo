//Array Methods 
let arr = [11,12,13,14,15,16]
let num = [1,2,34,4]
///////////////////////////////////////////////////
let b = num.toString()  // b is now a String
console.log(b, typeof b);

///////////////////////////////////////////////////
// Join 
let c = num.join(" and ")
console.log(c, typeof c);

//////////////////////////////////////////////////
//pop
let r = num.pop()  //pop remove's the last element
console.log(num,r)

//////////////////////////////////////////////////
//push
let s = num.push(65)  //Adds 65 to the array
console.log(num) 

//////////////////////////////////////////////////
//shift
let t = num.shift(65)  //Removes 
console.log(num) 
//push ===================>
// arr.push(70);
console.log(arr)

//pop ===================>
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)
arr.pop()
console.log(arr)

// unshift ===================>
 //unshift - add element to first index

arr.unshift(5)
console.log(arr)

// shift ===================>
 //shift - removes element from first index

var d = arr.shift();
console.log(d)
console.log(arr)

// ========================>

// Slice - Extract part of Array

// syntax :- slice(start,end);

//last wala ignore ho jata hai 

var data = ["a","b","c","d","e","f","g"];
console.log(data);

console.log(data.slice(2,5))
/////////////////////////////////////////////////////////////

//delete 
console.log("==========delete=============");

let abc = [1,2,3,4,5,6,7,8,9,10];
console.log(abc.length);

delete num[0];
console.log(abc);
console.log(abc.length);

/////////////////////////////////////////////////////////////

//Concat()

let number = [1,2,3,4,5,7,8,9,7,5]
let number_more = [11,23,46,56,78,63,74]
let number_even_more = [125,64,648,866,4887,466,654]

let newArray = number.concat(number_more, number_even_more);
console.log(newArray)
console.log(number,number_more)


///////////////////////////////////////////////////////////////////

// Sort Mehtod

let num_2 = [551,22,3,14,5,6,7,8,229];
num_2.sort();

console.log(num_2);


