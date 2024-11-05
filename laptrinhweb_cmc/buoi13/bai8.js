/*
Given a number, return an array containing the two halves of the number. 
If the number is odd, make the rightmost number higher.
All numbers will be integers

numberSplit(4) ➞ [2, 2] 
numberSplit(10) ➞ [5, 5] 
numberSplit(11) ➞ [5, 6] 
numberSplit(-9) ➞ [-5, -4] 
*/

var tach = function(n){
    let a;
    if(n % 2 ===0){
        a = n/2;
    }else{
        a = (n-1)/2;
    }
    return [a, n-a];
}
console.log(tach(-4));