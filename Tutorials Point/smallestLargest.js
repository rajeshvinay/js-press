const arr = [11,21,14,32,20,12]

const smallLarge = (arr)=>{
    let smallest = arr[0]
    let largest = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }else if(arr[i]<smallest){
            smallest = arr[i]
        }
    }
    return {smallest,largest}
}
console.log(smallLarge(arr))