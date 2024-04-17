// let a = 10;
// var b = "hello";
// let c = true;
// var d = undefined;
// var e = 11.98;
// var f = [10,'dac',"wx"];
// var g = { 12:"res",34:'edxawd',"sec":23};
// var h = (2,2,3,4,5,5,"sc","sc","fd",'d',"sc");
// var i = null;

// var j = BigInt(234567890198493035666777);
// var k = 234567890198493035666777;
// var l = 234567890198493035666777n;

// console.log(a,b,c,d,e,f,g,h,i,j,k,l);
// console.log(typeof(h));

const x = Symbol("syam");
console.log(x);
console.log(typeof(x));
const y = {[x]:1};
console.log(y);
console.log(y[x]);
console.log(Object(x));