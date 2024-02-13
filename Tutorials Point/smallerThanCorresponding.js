const array = [5,2,6,1,7,2]
//output [2,1,1,0]
// construct an array of smaller elements than the corresponding elements based on the input array

function returnSmall(array){
    let outputs = [];
    for(let i=0;i<array.length;i++){
        let count = 0
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[i]){
                count++
            }
        }
        outputs.push(count)
    }
    return outputs
}

console.log(returnSmall(array))