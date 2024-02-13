// Given a list of numbers in an array, create largest number formed.

let array = [3,30,34,5,9]

//output 9534330

const largetNum = (array)=>{
    array.sort((a,b)=>{
        const s1 = new String(a);
        const s2 = new String(b)
        const first = s1+s2;
        const second = s2+s1;
        if(first>second) return -1
        else if(first<second) return 1
        return 0
    })
    return array.join('')
}

console.log(largetNum(array))
