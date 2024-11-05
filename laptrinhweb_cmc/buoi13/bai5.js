/* 
Create a function that takes two arrays and insert the second array in the middle of the first array.
The first array always has two elements.
VD: 
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150] 
tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]] 
*/

var f = function(arr1, arr2){
    return [arr1[0], ...arr2, arr1[1]];
}

let arr1 = [1, 5];
let arr2 = [3, 2, 4];
console.log(f(arr1, arr2));