const array = ['a','b','a','c','a','d','c','e','a','b','d','b'];

const groupBy = array.reduce((group,arr)=>{
    if(group[arr] == null){
        group[arr] = 0
    }group[arr] = group[arr]+1
    return group
},{})

console.log(groupBy)

const students = [{name:"Rajesh",age:25},{name:"Vinay",age:24},{name:"Kumar",age:26},{name:"Rajesh",age:30},{name:"Vinay",age:28}]

const studentGroup = students.reduce((group,student)=>{
        if(group[student.name]==null){
            group[student.name]=[]
        }group[student.name].push(student)
        return group;
},{})

console.log(studentGroup)