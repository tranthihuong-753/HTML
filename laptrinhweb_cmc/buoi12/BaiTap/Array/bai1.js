/* https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript */

var map = function(arr, fn){
    let arrout = [];
    for(let i = 0; i < arr.length; i++){
        arrout[i] = fn(arr[i],i);
    }
    return arrout;
}

const arr= [1, 2, 3];
const fn = function(n, m){return n+m;};
console.log(map(arr, fn));