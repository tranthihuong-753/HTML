/* 
Create a function that returns true if the first array can be nested inside the second and false otherwise.
arr1 can be nested inside arr2 if:
    arr1's min is greater than arr2's min.
    arr1's max is less than arr2's max.
canNest([1, 2, 3, 4], [0, 6]) ➞ true canNest([3, 1], [4, 0]) ➞ true canNest([9, 9, 8], [8, 9]) ➞ false canNest([1, 2, 3, 4], [2, 3]) ➞ false
*/

var check = function(arr1,arr2){
    let array1 = arr1.sort();
    let array2 = arr2.sort();
    if((array1[0] < array2[0]) && (array1[arr1.length - 1] > array2[arr2.length - 1])){
        return true;
    }
    return false;
}
