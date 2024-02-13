let m=4;
let n=6;

//output [4,8,12,16,20,24]
const result = []
for(let i=1;i<=n;i++){
    const product = m*i
    result.push(product)
}
console.log(result)