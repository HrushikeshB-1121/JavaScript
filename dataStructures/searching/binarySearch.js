/*  Binary search:
        search requires array to be sorted
        it divides the searsh until it is found
    time ccmplx = O(nlogn)
*/

function binarySearch(arr,target){
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        let midNum = arr[mid];

        if(midNum===target){
            return mid;
        } else if (midNum>target){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}


let arr = [10,20,30,40,50];
console.log(binarySearch(arr,30));