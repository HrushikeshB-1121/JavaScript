// //Range error
// let num = 1;
// try{
//     num.toPrecision(500);
// } catch (err){
//     console.log(`Printing type of error :${err.name}`);
// }

// //Reference error
// let x = 10;
// try{
//     x = x + y;
// } catch(err){
//     console.log(`Printing type of error :${err.name}`);
// }

// // type error
// let numb = 10;
// try{
//     numb.uppercCase();
// } catch(err){
//     console.log(`Printing type of error :${err.name}`);
// }

// Throws :
    // write custom message
let value = 0;
try{
    value = 30;
    if(value < 5){
        throw("low")
    } else{
        throw("high")
    }
} catch(err){
    console.log("Error the number entered is : "+err);
}