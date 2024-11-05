/* https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript */

var reduce = function(arr, fn, init){
    if(arr.length === 0){
        return init;
    }
    let out;
    let a = init;
    for( let i = 0 ; i < arr.length ; i++){
        let b = arr[i];
        out = fn(a, b);
        a = out;
    }
    return out;
}

const arr= [ 1, 2, 3, 4];
const fn = (a, b) =>{
    return 0;
}
console.log(reduce(arr, fn, 25));
