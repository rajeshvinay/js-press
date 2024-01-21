// even if inner function is returned from the outer function ,still inner function has access to the variables and functions of the outer scope and this inner function and outer function with their scope is closure.

// advantages can be , data no need to create on every instance. we create once and the inner function can be called with multiple inputs to the inner fucntion with different argument without creating a new array on every call.
function outer(){
    const array  = new Array(700).fill(0);
    return function inner(idx){
        console.log(array[idx])
    }
}

outer()(702)