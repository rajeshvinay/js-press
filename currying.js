
function sum(a){
    return function(b){
        if(b) return sum(a+b)
        else return a;
    }
}

const resp = sum(1)(2)(3)(4)(5)()
console.log(resp)