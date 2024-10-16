console.log("hello");
/* Khai báo biến let , var , const */

let a = 7;
console.log(`Gia tri ban dau a = ${a}`);
 
a = a + 3 ;
console.log(`Gia tri sau khi thay doi a = ${a}`);

/* String */
let namee = "Tran Thi Huong";
console.log(namee.at(3))
console.log(`Gia tri ban dau ${namee} , sau khi dung namee.toLowerCase() = `)
console.log(namee.toLowerCase()) /* tran thi huong */
console.log(namee.endsWith("a")) /* false */

/* reguler express trong tri tue nhan tao */

console.log(namee.slice(2, 4)) ;/* an */ /* Cắt từ vị trí thứ 2 đến thứ 4 */ 
console.log(namee.substring(1,2)); 

age = 19;
console.log(age++); /* 19 */
console.log(age); /* 20 */
console.log(++age); /* 21 */

n = 3 /* 0011 */
console.log(n<<1)  /* 0 0110 = 6 */

n = 23 /* 0001  */
console.log(n<<1) /* 14 */

/* Nhập vào từ người dùng và in ra 1 nội dung nào đó */
let weight = prompt("Nhap vao can nang cua ban : ")
let height = prompt("Nhap vao chieu cao cua ban : ")
console.log(`Chi so BMI cua ban la : ${height/weight}`)