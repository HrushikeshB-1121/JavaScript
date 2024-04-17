//Callback

// function displaySum(sum) {
//     console.log(sum);
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 4, displaySum);


// function callback(){
//     console.log("callback function called")
// }

// var add = function(a,b,callback){
//     console.log(a+b)
//     callback()
// }

// add(3,4,callback)

// add(2,5,function callback(){
//     console.log("hiiiiii")
// })

// //callback Hell

// function getData(id,getnextId){
//     console.log(`Getting data of ${id} ......`);
//     setTimeout(()=> {
//         console.log(`Data ${id}`);
//         if(getnextId){
//             getnextId();
//         }
//     },2000);
// }


// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         })
//     })
// })