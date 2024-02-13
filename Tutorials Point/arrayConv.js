const arr = [
    ['a','b','c','d'],
    ['o','f','r','g'],
    ['h','i','e','j'],
    ['k','l','m','n']
]

const pos = [1,4,5,7,11]

const arrExt = [];
for(let i=0;i<arr.length;i++){
    arrExt.push(...arr[i])
}
let out = ''
for(let i=0;i<pos.length;i++){
    out = out+arrExt[pos[i]-1]
}
console.log(out)