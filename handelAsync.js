// // Handel Asynchronous


// Now this function is Asynchronous


// function getid(id){
//     setTimeout(()=>{
//         console.log(`Data of ${id}`);
//     },2000);
// }

// console.log("....fetching data1.....");
// getid(1);
// console.log("....fetching data2.....");
// getid(2);

// // In the above program setTimeout makes code Asynchronous



// Handling Asynchronous using callback

// function getid(id,getnextId){
//     setTimeout(()=>{
//         console.log(`data of ${id}`);
//         if(getnextId){
//             getnextId();
//         }
//     },2000);
// }

// console.log("....fetching data1....");
// getid(1,()=>{
//     console.log("....fetching data2....");
//     getid(2);
// });


// Asynchronous is handled here because of callback:
// the next function is passes as argument and executed after the execution of first function



// Handling Asynchronous using promises

// let sts = function getid (id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log(`data of ${id}`);
//             resolve(`Data printed of ${id}`);
//         },2000);
//     });
// }


// let checkStatus = sts(1);
// console.log("....fetching data1....");
// checkStatus.then((msg)=>{
//                 console.log(msg);
//             })
//             .catch((msg)=>{
//                 console.log(msg);
//             })
//             .finally(()=>{
//                 console.log("....fetching data2....");
//                 let checkStatus2 = sts(2);
//                 checkStatus2.then((msg)=>console.log(msg))
//                             .catch((msg)=>console.log(msg))
//                             .finally(()=>console.log("  ---- task completed ----    "));
// })

// Asynchronous is handled here because of promises:
// the exection of second promise is done after the execution of previous promise




// Handling Asynchronous using Async & Await

function getid(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`data of ${id}`);
            resolve(`data of ${id} is printed`);
        },2000);
    });
}

async function printOutput(){

    console.log("....fetching data1....");
    await getid(1);
    console.log("....fetching data2....");
    await getid(2);
    console.log("  ---- task completed ----    ")
}

printOutput();

//await stops other execution until promise is settled