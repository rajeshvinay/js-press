const arr = [1,4,6,8,10]
const n = 5

function missingNum(arr,n){
    let missingCount = 0;
    let prevNum = 0
    for(let i=0;i<arr.length;i++){
        let currentNum = arr[i]
        if(currentNum-prevNum>1){
            missingCount += currentNum - prevNum-1
            if(missingCount>=n){
                let diff = n-(missingCount-currentNum+prevNum+1)
                return prevNum+diff
            }
        }
        prevNum = currentNum
    }
    return prevNum+n-missingCount
}

console.log(missingNum(arr,n))