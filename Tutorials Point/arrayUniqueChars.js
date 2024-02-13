const str = 'heeeyyyy';

const output = [0,1,1,1,2,2,2,2];

const mapString = str=>{
    const res = [];
    let current = '';
    let count = -1;
    for(let i=0;i<str.length;i++){
        if(str[i] == current){
            res.push(count)
        }else{
            count++
            res.push(count)
            current = str[i]
        }
    }
    return res;
}

console.log(mapString(str))