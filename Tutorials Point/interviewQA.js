// Find second largest from an array
const arr = [10,2,18,14,15,8]

let firstHighest = -Infinity
let secondHighest = -Infinity
let len = arr.length

for(let i=0;i<len;i++){
    if(arr[i]>firstHighest){
      secondHighest = firstHighest
      firstHighest = arr[i]
    }else if(arr[i] !== firstHighest && arr[i]>secondHighest){
        secondHighest = arr[i]
    }
}

console.log({firstHighest,secondHighest})

// remove duplicates
// first way
let arr2 = [1,2,8,1,7,3,2]
const resp = arr2.filter((arr,index)=>arr2.indexOf(arr)==index)
// console.log(resp)

// way two
let b = []
let temp
arr2.sort()
for(let ar of arr2){
    if(ar != temp){
        b.push(ar)
        temp = ar
    }
}

console.log(b)

const obj = {}
for(let ar of arr2){
    obj[ar] = true
}
console.log(Object.keys(obj))