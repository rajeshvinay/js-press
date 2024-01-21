const arrayNumbers = [1,2,7,3,5,10]; //18

function sumArray(arr){
    if(arr.length==1){
        return arr[0]
    }
    return arr.pop()+sumArray(arr)
}

const result = sumArray(arrayNumbers);
console.log(result)

const num = 100;
function sumRecursion(num){
    if(num==0){
        return num
    }
    return num + sumRecursion(num-1)
}

const sum = sumRecursion(num)
console.log(sum)

function factorial(num){
    if(num<=1){
        return 1
    }
    return num * factorial(num-1)
}

console.log(factorial(5)) //120