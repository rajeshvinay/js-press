const str = '11222233344444445666'
//output{1:2,2:4,3:3,4:7,5:1,6:3}

const arr = str.split('')

const resp = arr.reduce((group,arr)=>{
    if(group[arr]==null){
        group[arr]=1
    }else{
        group[arr] = group[arr]+1
    }
    return group
},{})

console.log(resp)

const out = [4,3,6,2]

//[0,'-1','+2','-2']

let resp2 = [];
for(let i=0;i<out.length;i++){
    const result = out[i]-out[0]
    resp2.push(result>=0?'+'+result:''+result)
}
console.log(resp2)