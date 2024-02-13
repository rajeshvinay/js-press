const arr = [1,4,6,8,10]
const number = 4;

function missingCount(arr,num){
    let prevNum = 0
    let missingCount = 0
    for(let i=0;i<arr.length;i++){
        let currentNum = arr[i]
        if(currentNum-prevNum>1){
            missingCount += currentNum-prevNum-1
            if(missingCount>=num){
                let diff = num-(missingCount-currentNum+prevNum+1)
                return prevNum+diff
            }
        }
        prevNum = currentNum
    }
    return prevNum+num-missingCount
}

console.log(missingCount(arr,number))