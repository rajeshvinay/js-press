"use strict"

console.log(this)  // window / global object

function x(){
    console.log(this) // in strict mode - undefined , in normal mode - winfow object
}

x() // undefined 
// window.x(); // window

// this inside object
const student = {
    name:"Rajesh",
    printName:function(greet){
        console.log(`${greet} ${this.name}`) // this refers to the object obj
    }
}

student.printName("Hi");

const student2 = {
    name:"Vinay",
}

student.printName.call(student2,"Hello")

student.printName.apply(student2,["Hi Hello"])

const obj = {
    name:"Kumar",
    printName:function(){
       const y=()=>{
            console.log(this.name)
        }
        y()
    }
}

obj.printName()


function sayHi(){
    setTimeout(function(){
        console.log(this.name)// gives undefined because name is not attached to global object as the function lies in the in the global scope. The below code will be the fix for this(convert normal fucntion to arrow function)
    },500)
}

function sayHi2(){
    setTimeout(()=>{
        console.log(this.name)// it works because arrow functions uses its surrounding context
    },500)
}

sayHi.call({name:"Rajesh"})
sayHi2.call({name:"Rajesh"})