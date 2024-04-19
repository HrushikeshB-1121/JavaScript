/* QuickSort:
        We select a pivot element (middle) ,We divide the array into two sub-arrays 
        elements less than the pivot and elements greater than or equal to the pivot.
        We recursively apply the Quicksort to the sub-arrays and concatenate the sorted sub-arrays with the pivot
    time cmplx = O(n^2)
    space cmplx = O(n)
*/

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[Math.floor(arr.length/2)];
    let left = [];
    let right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==pivot){
            continue;
        }
        //elements greater than pivot is added to left array
        if(arr[i]>pivot){
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
        //elements smaller than pivot is added to left array
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}

let unSortedArray = [4,5,2,6,3,8,1];
let sortedArray = quickSort(unSortedArray);
console.log(sortedArray);