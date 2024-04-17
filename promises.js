// Promises

// let prom = function get

// let prom = () => {
//     return new Promise((resolve,reject)=>{
//     console.log("inside promise");
//     resolve("success");
//     console.log("after resolve");
//     // reject("error");
//     // console.log("after error");
// });
// }
// let sts = prom();
// sts.then((msg)=>console.log(msg));
// sts.catch((msg)=>console.log(msg));


let checkEven = (x) => {
    return new Promise((resolve,reject)=>{
        if(x%2===0){
            resolve(`${x} is a even number`);
        } else {
            reject(`${x} is a odd number`);
        }
    });
}

let isEven = checkEven(7);
isEven.then((msg)=>console.log(msg));
isEven.catch((msg)=>console.log(msg));

// let getid = (id) => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`data ${id}`);
//             resolve("data printed")
//         },2000)
//     });
// }

// let attempt = getid(1);
// attempt.then((msg)=>console.log(msg));
