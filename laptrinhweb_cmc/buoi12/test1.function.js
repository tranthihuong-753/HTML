/* hoisting: Hàm được sử dụng trước khi khởi tạo */
var create1 = function(){
    return f;
    function f(){
        return "HAPPY";
    }
}
const f = create1();
console.log(f()); // HAPPY
/* Cú pháp mũi tên */
var create1_1 = ()=>{
    return f;
    function f(){
        return "HAPPY";
    }    
}
/* Viết gọn hàm */
var create1_2 = () => (()=> "HAPPY");
/* key ... */
// 1. Gọp mảng 
arr1 = [2, 3];
arr2 = [1, ...arr1, 4];
console.log(arr2); // [ 1, 2, 3, 4 ]
// 2. Sử dụng trong hàm , tượng trưng cho mảng 
var printtt = (...a)=>console.log(a);
printtt("cho", "meo", "lon", "ga"); // [ 'cho', 'meo', 'lon', 'ga' ]


