const obj1 = {name:"Rajesh",age:25};
const obj2 = {age:25,name:"Rajesh"};

const objKeys1 = Object.keys(obj1).sort();
const objKeys2 = Object.keys(obj2).sort();

let isEqual = false;

if(objKeys1.length !== objKeys2.length){
    isEqual = false;
}else{   
    const equalComparison = objKeys1.every((objKey1,index)=>{
        const obj1Value = obj1[objKey1]
        const obj2Value = obj2[objKeys2[index]]
        return obj1Value === obj2Value
    })

    if(equalComparison) isEqual = true;
}


console.log(isEqual)