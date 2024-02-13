const arr = [1,2,3,4,5]
//output = [120,60,40,30,24]

const exclusiveProduct = (arr)=>{

    const product = arr.reduce((acc,val)=>acc*val)
    const res = [];
    for(let i=0;i<arr.length;i++){
        const result = product/arr[i];
        res.push(result)
    }
    return res;
}

console.log(exclusiveProduct(arr))