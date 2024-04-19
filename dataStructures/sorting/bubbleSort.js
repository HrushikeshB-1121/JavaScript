/* Bubblesort:
        This implementation uses nested loops to iterate through the array and compare adjacent elements. 
        If the elements are in the wrong order, it swaps them. 
    time cmpx = O(n^2) ;
    space cmpx = O(1);
*/

function bubbleSort(arr){
    const len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-1-i;j++){
            //swaps if wrong order
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let unSortedArray = [4,5,2,6,3,8,1];
let sortedArray = bubbleSort(unSortedArray);
console.log(sortedArray);