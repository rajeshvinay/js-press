const arr = [35,37,33,39,34,39,38,31]

//output 38
let highest = -Infinity
let pickNonRepeatingLargest = (arr)=>{

    for(let i=0;i<arr.length;i++){
        if(arr[i]>highest && (arr.indexOf(arr[i])==i) ){
            highest = arr[i]
        }
    }
    return highest
}
console.log(pickNonRepeatingLargest(arr))