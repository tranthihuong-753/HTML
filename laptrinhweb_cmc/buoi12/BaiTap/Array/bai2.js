/* https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript */

var filter = function(arr, fn){
    let arrout = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(fn(arr[i])){
            arrout.push(arr[i]);
        }
    }
    return arrout;
}
const arr = [1, 2, 3];
const fn = function(n){
    return n%2==0;
}
console.log(filter(arr,fn)); //[ 2 ]
