console.log("promise started");

setTimeout(()=>{
    console.log("Pause for a while")
})

Promise.resolve().then(()=>{
    console.log(' it is done now ')// it executes third even before settimeout because promises have higher priority than set timeout
})

console.log(" promise code ended")

// promise.all, race, any etc are promise methods.

// ---------------------------- Promise.all ----------------------

// promise.all returns resolve only if all are resolved, even any one is rejected it just returns only the rejected data(if multiple rejects gives the first rejected promise). promise.all follows synchronous execution . so the order of completion is not important here, the order of  mentioning the promises is important.
const prom1 = Promise.resolve(3)
const prom2 = Promise.resolve(5)

const prom3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,4)
})

Promise.all([prom1,prom3,prom2]).then(resp=>console.log(resp)).catch(result=>console.log('reject',result))


// ---------------------------- Promise.allSettled ----------------------

//promise.allsettled works like promise.all but even if promise is rejected or resolved it returns object for every proimise response. so if we want to execute every promise to be executed irrespective of the result, then this is best for that use case

const prom4 = Promise.resolve(3)
const prom5 = new Promise((res,rej)=>setTimeout(rej,1000,'foo'))
Promise.allSettled([prom5,prom4]).then(resp=>resp.forEach((result)=>console.log(result)))

// the response for the above will be 
// { status: 'fulfilled', value: 3 } --> for resolve
// { status: 'rejected', reason: 'foo' } --> for reject


// ---------------------------- Promise.any ----------------------

// promise.any will not bother about rejected. it will return back only the successful one that too which one completes first. so in the below one prom7 will only be returned. if all are rejected it gives aggregate error. so any looks for any of the fullfillment  promise and which is faster

const prom6 = Promise.reject('---- 0 ----');
const prom7 = new Promise((res,rej)=>setTimeout(res,100,'---- quick ----'))
const prom8 = new Promise((res,rej)=>setTimeout(res,500,'---- slow ----'))

Promise.any([prom6,prom7,prom8,prom6]).then(resp=>console.log(resp)).catch(resp=>console.log(resp))


// ---------------------------- Promise.race ----------------------

// promise.race will return the first executed promise out of all promises. so it doesn't care whether it is resolved or rejected, the first finished one will be returned. in the below example the prom9 gets executed first and goes to catch block and will return the response.
// so the diff b/w promise.any and promise.race is promise.any returns the first success promise ... whereas promise.race returns any promise(success or fail) that finishes executing first.

const prom9 = Promise.reject("race")
const prom10  = Promise.race('race reject')
const prom11 = new Promise((res,rej)=>setTimeout(rej,0,'timer race reject'))

Promise.race([prom11,prom9,prom10]).then(resp=>console.log('rc success',resp)).catch(result=>console.log('rc fail',result))