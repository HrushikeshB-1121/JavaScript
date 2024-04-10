//Callback

// function displaySum(sum) {
//     console.log(sum);
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 4, displaySum);


function callback(){
    console.log("callback function called")
}

var add = function(a,b,callback){
    console.log(a+b)
    callback()
}

add(3,4,callback)

// add(2,5,function callback(){
//     console.log("hiiiiii")
// })
