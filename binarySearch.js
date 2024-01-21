const arr = [1,2,5,8,11,12,18];

function binarySearch(arr,number){
    let beg = 0;
    let end = arr.length-1;
    
    while(beg<=end){
        let middle = Math.floor((beg+end)/2);
        if(arr[middle]==number){
            return true
        }
        if(arr[middle]>number){
                end=middle-1
            }else{
                beg = middle+1
            }
    }
    return false
}

console.log(binarySearch(arr,225))