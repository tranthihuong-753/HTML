/* 
Create a function that takes a number as an argument. 
Add up all the numbers from 1 to the number you passed to the function. 
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
addUp(4) ➞ 10
addUp(13) ➞ 91
addUp(600) ➞ 180300
Expect any positive number between 1 and 1000.
*/
var add = function(n){
    let out = 0;
    for( let i = 1; i <= n ; i++){
        out += i;
    }
    return out;
}

console.log(add(1000));
