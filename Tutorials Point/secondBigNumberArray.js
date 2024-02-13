const array = [9,10,2,11,13,12,6]

//output 11

let firstHighest = -Infinity;
let secondHighest = -Infinity;

for(let i=0;i<array.length;i++){
    if(array[i]>firstHighest){
        secondHighest = firstHighest
        firstHighest = array[i]
    }else if(array[i]>secondHighest && array[i]<firstHighest){
        secondHighest = array[i]
    }
}
console.log(secondHighest)