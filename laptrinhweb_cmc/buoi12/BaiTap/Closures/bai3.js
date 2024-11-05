/* https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript */
var expect = function(y){
    var toBe = function(x){
        if(y === x){
            return true;
        }else{
            throw new Error("Not Equal");
        }
    }
    var notToBe = function(x){
        if(y !== x){
            return true;
        }else{
            throw new Error("Equal");
        }
    }    
    return {toBe, notToBe};
}

console.log(expect(5).toBe(5));
