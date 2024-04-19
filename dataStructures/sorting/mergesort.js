/* MergeSort:
        it divides the array into two halves until each half has only one element. 
        Then, it merges the sorted halves using the merge function.
    time cmplx = O(nLogn)
    space cmplx = O(n)
*/


//dividing unit each have has only one element
function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

//sorting the left array with right array with comapring each element of the array
function merge(left,right){
    console.log("left"+left);
    console.log("right"+right);
    let result = [];
    let leftIndx = 0;
    let rightIndx = 0;
    while(leftIndx<left.length && rightIndx<right.length){
        if(left[leftIndx]<right[rightIndx]){
            result.push(left[leftIndx]);
            leftIndx++;
        } else {
            result.push(right[rightIndx]);
            rightIndx++;
        }
    }
    return result.concat(left.slice(leftIndx)).concat(right.slice(rightIndx));
}


let unSortedArray = [4,5,2,6,3,8,1];
let sortedArray = mergeSort(unSortedArray);
console.log(sortedArray);