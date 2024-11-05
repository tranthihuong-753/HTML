/* https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript */
var x;
var printt = function(a){
    x = a;
    return function(){
        console.log(x++);
    }
}
const f = printt(2);
f();
f();
f();
f();

/* 
2
3
4
5
*/

