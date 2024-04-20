/*  Linear search:
        checks each element one after one until it finds
    time cmplx = O(n)
*/

function linearSearch(arr,target){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

let arr = [10,20,30,40,50];
console.log(linearSearch(arr,30));