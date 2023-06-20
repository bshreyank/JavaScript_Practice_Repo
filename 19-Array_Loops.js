let num = [3,5,1,2,4]

////////////////////////////////////
//for loop 

for(let i=0; i<num.length;i++){
  console.log(num[i])
}

////////////////////////////////////
//ForEach Loop

num.forEach((element)=> {
  console.log(element * element)
})

/////////////////////////////////////
//Array.from

let name = "Harry"
let arr = Array.from(name)
console.log(arr)

/////////////////////////////////////
//for... of

for(let i of num){
  console.log(i)
}

/////////////////////////////////////
//for...in 

for(let i in num){
  console.log(num[i])
}

