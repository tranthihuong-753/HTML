/* https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript */

var createCounter = function(init){
    var x = init;
    var increment = function(){
        return ++init;
    }
    var decrement = function(){
        return --init;
    }
    var reset = function(){
        init = x;
        return x;
    }
    return {increment, decrement, reset};
}

