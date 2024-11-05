/*  */

let called = false;

var once = function(fn) {
    return function(...args) {
/*      // Chỉ cho gọi args 1 lần đầu tiên, mấy lần sau undefined hết
        if (!called) {
            called = true; // Đánh dấu là hàm đã được gọi
            result = fn(...args); // Lưu trữ kết quả của lần gọi đầu tiên
            return result; // Trả về kết quả
        }
        return undefined; // Các lần gọi tiếp theo sẽ trả về undefined */        
        return fn(...args);
    }
};

let fnn = (a, b, c) => (a * b * c);
let args = [[5, 7, 4], [2, 3, 6], [4, 6, 8]];

const ff = once(fnn);

// Gọi hàm với các tham số khác nhau
console.log(ff(...args[0])); // Kết quả: 140
console.log(ff(...args[1]));

// cach 2 
let index = 0;
var once = function(fn) {    
    return function(...args){
        let arrout = fn(args[index][0][0], args[index][0][1], args[index][0][2]);
        index++;
        return arrout;
    }
};

let fn = (a,b,c) => (a * b * c);
let calls = [[5,7,4],[2,3,6],[4,6,8]];

const f = once(fn);
console.log(f(calls));