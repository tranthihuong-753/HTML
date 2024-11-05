/* letsayhi = function(){
    alert("Hello");
}

function tanggiatri(a){
    a = a ?? 5;
    console.log("Gia tri cua ham ", a);
}

let check = function(a, yes, no){
    if(a>=0)yes();
    else no();
}
let clonecheck = check;

console.log(check); // [Function: check]
check(5,function(){console.log("> 0")}, function(){console.log("< 0")});
clonecheck(5,function(){console.log("> 0")}, function(){console.log("< 0")}); */

let say2;
function xinchao(){
    sayhi();
    //say3(); gọi trước bị lỗi 
    function sayhi(){
        console.log("Hello declaration");
    }
    let say3 = function(){
        console.log("Hello Expression");
    }
    //let say1 = sayhi(); // Hello 
    //say2 = sayhi(); // Hello 
}
xinchao();
