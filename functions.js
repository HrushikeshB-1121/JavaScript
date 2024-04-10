

// named function
// function add(a,b){
//     return a+b;
// };
// console.log("the sum of a and b is " + add(2,3));


// Anonymous Function
// let message=function(){
//     console.log("hello world!")
// }
// message();

// Arrow Function
// let power = (a,b)=>a**b;

// let square = a=>a**2;

// let product=(a,b)=>{
//     return a*b;
// }
//  console.log("square of a is "+square(4))
//  console.log("power of a to b is " + power(2,3))
//  console.log("product of a and b is " + product(4,3))


// Callback function
function callback(){
    console.log("callback function called")
}

var add = function(a,b,callback){
    console.log(a+b)
    callback()
}

add(2,5,callback)
// add(2,5,function callback(){
//     console.log("hiiiiii")
// })


// Recurssion function
// function printNum(count){
//     if(count===0){
//         return;
//     }
//     console.log(count)
//     printNum(count-1)
// }
// printNum(4)
