/* https://leetcode.com/problems/function-composition/description/?envType=study-plan-v2&envId=30-days-of-javascript */

var compose = function(fns){
    if(fns.length === 0){
        return x => x;
    }
    return function(x){
        let out = x;
        for(let i = fns.length - 1 ; i >= 0 ; i--){
            out = fns[i](out);
        }
        return out;
    }
}


// cach 2 
var compose2 = function(a, arr_fn){
    let out;
    for(let i = arr_fn.length - 1 ; i > 0 ; i--){
        a = arr_fn[i](a);
        out = arr_fn[i-1](a);
        console.log("out = " + out);
    }
    return out;
}

const x = 1;
const functions = [x => x + 1, x => x * x, x => 2 * x];
console.log(compose2(x, functions));

const h = compose(functions);
console.log(h(1));