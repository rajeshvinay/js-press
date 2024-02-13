// largest number formed from array of numbers
let array = [3,30,34,5,9]

//output 9534330

function largestNum(arr){
    arr.sort((a,b)=>{
        const s1 = new String(a);
        const s2 = new String(b);
        const first  = s1+s2;
        const second = s2+s1;
        if(first>second) return -1
        else if(first<second) return 1
        else return 0
    })    
    return arr.join('')
}

// console.log(largestNum(array));

// with m and n in place, return an array of first n natural multiples of m
let m=6
let n=14

function naturalNMultiples(m=1,n=1){
    multiples = []
    for(let i=1;i<=n;i++){
        let resp = m*i;
        multiples.push(resp);
    }
    return multiples
}

// console.log(naturalNMultiples(m,n))

// from a string of characters form a unique array of characters 
// ex: 'heeeyyyy' -> [0,1,1,1,2,2,2,2]

function uniqueCharacters(str){
    const strArray = [];
    let current = '';
    let stringIndex = -1
    for(let i=0;i<str.length;i++){
        if(str[i]===current){
            strArray.push(stringIndex)
        }else{
            stringIndex++;
            current = str[i]
            strArray.push(stringIndex)
        }
    }
    return strArray
}
// console.log(uniqueCharacters('heeeyyyy'))

// construct a new string with unique chars 
const str = 'hey there i am using javascript';

function removeAllDuplicates(str){
    let res = ''
    for(let i=0;i<str.length;i++){
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            res += str[i]
        }
    }
    return res;
}

// console.log(removeAllDuplicates(str))
//Return array number of numbers without that number

const arr = [1,2,3,4,5]

function arrayProduct(arr){
    let totalSum  = 1;
    for(let i=0;i<arr.length;i++){
        totalSum = totalSum*arr[i]
    }
    let resp = [];
    for(let i=0;i<arr.length;i++){
        let res = totalSum/arr[i]
        resp.push(res)
    }
    return resp
}
// console.log(arrayProduct(arr))
// construct an object from repetitive numeral string 
const str2 = '11222233344444445666';
//output {1:2,2:4,3:3,4:7,5:1,6:3}
function objectForm(str){
    const arr = str.split('')
    const resp = arr.reduce((group,val)=>{
        if(group[val]==null){
            group[val]=0
        }group[val] = group[val]+1
        return group
    },{})
    return resp;
}
// console.log(objectForm(str2))
// construct an array of addition/subtractions relative to first array element in js
const relativeArray = [4,3,6,2]
function formRelative(array){
    const firstElement = array[0]
    const resp = []
    for(let i=0;i<array.length;i++){
        const result = array[i]-firstElement
        resp.push(result);
    }
    return resp;
}
// console.log(formRelative(relativeArray))
//construct a string based on char matrix and number array
const matrixArr = [['a','b','c','d'],['o','f','r','g'],['h','i','e','j'],['k','l','m','n']]
const numbers = [1,4,5,7,11]
function matrixExp(arr){
    const resp2 = [];
    function flatArray(array){
        for(let i=0;i<array.length;i++){
            if(typeof array[i]=='string'){
                resp2.push(array[i])
            }else{
                flatArray(array[i])
            }
        }
        return resp2;
    }
    const resp = flatArray(arr)
    console.log(resp)
    let result = '';
    for(let i=0;i<numbers.length;i++){
        result += resp[numbers[i]-1]
    }
    return result
}
// console.log(matrixExp(matrixArr))

//find second largest number in an array 
const arrayNum = [10,11,8,12,13,2,12.5]
//output 12
function secondLargest(array){
    let  firstHighest = -Infinity
    let secondHighest = -Infinity
    for(let i=0;i<array.length;i++){
        if(array[i]>firstHighest){
            secondHighest = firstHighest;
            firstHighest = array[i]
        }if(array[i]>secondHighest && array[i]<firstHighest){
            secondHighest = array[i]
        }
    }
    return secondHighest
}
// console.log(secondLargest(arrayNum))
// construct a new array from multi dimensional array with the largest number from each array
const dimArray = [[23,45,22],[45,55,11],[66,99,200],[43,76,2022]]

function retrunMulMax(array){
    const resp = [];
    for(let i=0;i<array.length;i++){
        let highestNum = -Infinity
        for(let j=0;j<array[i].length;j++){
            if(array[i][j]>highestNum){
                highestNum = array[i][j]
                resp.splice(i,1,highestNum)
            }
        }
    }
    return resp;
}
// console.log(retrunMulMax(dimArray))
//construct an array of smaller elements than the corresponding elemensts based on input array
const inpArr = [5,2,6,1]
//output [2,1,1,0]
function smallerEle(arr){
    const resp=[];
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                count++
            }
        }
        resp.push(count)
    }
    return resp;
}
// console.log(smallerEle(inpArr))

const sentence = ' Hey there I am using JS'
let senArr
[...senArr] = sentence
const res= senArr.reduce((redArr,sen)=>{
    if(sen==' '){
        redArr.push('')
    }else{
        redArr[redArr.length-1] += sen
    }
    return redArr
},[])
console.log(res)