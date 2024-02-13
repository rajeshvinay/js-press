let m = 6;
let n = 14;

//[6,12,18,24,30,36,42,48,54,60,66,72,78,84]

const firstNMultiple = (m,n)=>{
    const response = [];
    for(let i=1;i<=n;i++){
        const mul = m*i
        response.push(mul)
    }
    return response
}

console.log(firstNMultiple(m,n))