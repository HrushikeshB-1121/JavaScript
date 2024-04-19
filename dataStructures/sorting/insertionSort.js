/* InsertionSort:
        Starting from index 1. It then compares the current element with the elements before it 
        And moves it to the correct position in the sorted part of the array.
    time cmplx = O(n^2)
    space cmplx = O(1)
*/

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        const current = arr[i];
        let j = i-1;
        //insert in correct position from starting till i index
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

let unSortedArray = [4,5,2,6,3,8,1];
let sortedArray = insertionSort(unSortedArray);
console.log(sortedArray);
