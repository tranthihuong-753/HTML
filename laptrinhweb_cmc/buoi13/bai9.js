/*
Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4] 
getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4] 
getOnlyEvens([1, 2, 3, 4, 5]) ➞ [] Arrays start at index 0.
*/

var getOnlyEvens = function(arr){
    let arrout = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 === 0 && i%2 === 0){
            arrout.push(i);
        }
    }
    return arrout;
}
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));