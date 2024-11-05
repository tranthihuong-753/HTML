/* https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript */
/* 
Write a function createHelloWorld. 
It should return a new function that always returns "Hello World". */

var createHelloWorld = function(){
    return function(){
        return "Hello World";
    }
}
var f = createHelloWorld();
console.log(f());