//  Arrays
// const arr=[10,"syam",null,undefined,true,function (){},[],{}]
// console.log(arr);
// console.log(typeof arr);
// console.log(typeof []);
// console.log(typeof arr[7]);

// let x=10;
// console.log(Array.isArray(x));//false
// console.log(Array.isArray(arr));//true

// push() add at last
// let arr=[10,20,30,40,50]
// arr.push("web","html");
// console.log(arr);

// pop() removes last ele
// arr.pop();
// console.log(arr);

// unshift() add element to the head
// let arr=[10,20,30,40,50]
// arr.unshift(100,20);
// console.log(arr);

// shift()  remove the element from the head
// let arr=[10,20,30,40,50]
// arr.shift();
// arr.shift();
// console.log(arr);

// slice(start index,end index)
// let arr=[10,20,30,40,50]
// console.log(arr.slice(2,4))
// console.log(arr.slice(2))
// console.log(arr.slice(-2))
// console.log(arr.slice(-3,-1))

// splice(start index, number of element to be removed, element to be added)
// let arr=[10,20,30,40,50]
// arr.splice(2,2,"a","b","c")
// [10,20,"a","b","c",50]
// arr.splice(2,2);
//// [10,20,50]
// arr.splice(2);
//// [10,20]

// negative value

// arr.splice(-4,2);
// // [10,40,50]
// arr.splice(-3,2,"A","B")
// // [10,20,"A","B",50]
// console.log(arr);


//Array Higher order Methods
// map()

// EX: 1
// let arr=[10,20,30,40,50,];
// arr.map((index)=>{
//     console.log(index);
// })

//  EX: 2
// arr.map((ele,index,array)=>{
//     console.log(ele,index);
// })

//  square of all element in map
//      arr.map(ele=>{
//          sq=ele*ele;
//          console.log(sq)
//          })

// to  doubble the element
// let array=[10,20,30,40,50]
// let arr=array.map(ele=>ele*2)
// console.log(arr)


//filter()

// EX: 1
// let arr=[10,20,30,40,50,];
// arr.filter((ele,index,array)=>{
//     console.log(ele,index,array);
// })

// console.log(arr.filter((ele,index,array)=>{
//     return ele>30;
// }));

// reduce()
// EX: 1
// let arr=[11,12,13,14,15];
// let result=arr.reduce((x,y)=>{
//     return x+y;
// })
// console.log(result);

// sort()
// EX: 1
// Ascii A-Z : 65 - 90
//a-z : 97 - 122
// let arr=["ravi","Raju","arvind","manju","bargav"];
// console.log(arr.sort());

// EX: 2
// let arr=[100,10,75,9,27];

// ASC ORDER
// console.log(arr.sort((a,b)=>{
//     return a-b;
// }));

// DESC ORDER
// console.log(arr.sort((a,b)=>{
//     return b-a;
// }));

// some()
// let arr1=[101,0,45,9,67]
// console.log(arr1.some((ele)=>{
//     return ele>75;
// }));

// // every()
// console.log(arr1.every((ele)=>{
//     return ele>50;
// }));