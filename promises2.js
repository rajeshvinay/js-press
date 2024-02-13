const prom1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(" hi with 1 sec wait time")
    },1000)
})

const prom2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(" hi with 0.5 sec wait time")
    },500)
})

const prom3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(" hi with 2 sec wait time")
    },2000)
})

async function execute(){
    const result1 = await prom1
    console.log(result1)
    const result3 = await prom3
    console.log(result3)
    const result2 = await prom2
    console.log(result2)
}
execute()