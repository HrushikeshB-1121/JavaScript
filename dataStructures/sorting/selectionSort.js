/* selectionsort:
        we find the smallest and move it front
    time cmplx: O(n^2)
    space cmplx: O(1)
*/


function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minNum = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minNum]){
                minNum = j;
            }
        }
        if(i!==minNum){
            //swaping to values
            [arr[i],arr[minNum]] = [arr[minNum],arr[i]];
        }
    }
    return arr;
}

let unSortedArray = [4,5,2,6,3,8,1];
let sortedArray = selectionSort(unSortedArray);
console.log(sortedArray);