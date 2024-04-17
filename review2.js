// const getid = function(id,nextid){
//     setTimeout(()=>{
//         console.log(`inside data ${id}`);
//         if(nextid){
//             console.log("fetching next data");
//             nextid(2);
//         }
//     },2000);
// }

// console.log("getting data of 1");
// const data1 = getid(1,(id)=>{
//     console.log("getting data of 2");
//     setTimeout(()=>{
//         console.log(`inside data ${id}`);
//     },2000);
// })


// const getdata = function(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log(`inside data ${id}`);
//             resolve(`inside data ${id}`)
//         },2000);
//     })
// }

//  console.log("getting data of 1");
// getdata(1).then((msg)=>console.log(msg))
//             .catch((msg)=>console.log.apply(msg))
//             .finally((msg)=>{
//                 console.log("getting data of 2");
//                 getdata(2).then((msg)=>console.log(msg))
//                             .catch((msg)=>console.log(msg))
//             })

// const arr = [1,2,3,4,5];

// const [first,second,third] = arr;
// console.log(first);

// const student = {
//     name : "syam" ,
//     age : 23
// }

// const {name,age} = student;
// console.log(name);

//Synchron

// const fun1 = function(){
//     console.log(" 1st task");
//     setTimeout(()=>{
//         console.log(" 2nd task ");
//     })
//     console.log("3rd task");
// }

// fun1();

// // function funa(){
// //     console.log(" 1st task");
// // }

// // function funb(){
// //     console.log(" 2st task");
// // }

// // function func(){
// //     console.log(" 2st task");
// // }



