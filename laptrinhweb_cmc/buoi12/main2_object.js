// Cach 1: Khong su dung lai duoc code , thuan khai boa va gan gia tri 
/* 
let HuongDuong = {};
HuongDuong.name = "Tran Huong";
HuongDuong.age = 19;
HuongDuong.gender = "Nu";
console.log(HuongDuong); // { name: 'Tran Huong', age: 19, gender: 'Nu' }
for(x in HuongDuong){
    console.log(HuongDuong[x]);
}

let Hoa = new Object();
Hoa.name = "Thuy Hoa";
Hoa.age = 18;
Hoa.gender = "Nu";
console.log(Hoa); // { name: 'Thuy Hoa', age: 18, gender: 'Nu' }

let Anh = {
    name: "Ngoc Anh",
    age: 19,
    gender: "Nu"    
}
console.log(Anh); // { name: 'Ngoc Anh', age: 19, gender: 'Nu' }
*/

// Cach 2: 
/* 
function sinhVien(newname, newage, newgender){
    this.name = newname;
    this.age = newage;
    this.gender = newgender;
}
 */
//let HuongDuong = sinhVien("Tran Huong", 19, "Nu");
// Cach 3 
let sv = {
    sinhVien: function (newname, newage, newgender){
        this.name = newname;
        this.age = newage;
        this.gender = newgender;
    }
}
sv.sinhVien("Tran Huong", 19, "Nu"); // sinhVien("Tran Huong", 19, "Nu")
//console.log(sv);
/*
{
  sinhVien: [Function: sinhVien],
  name: 'Tran Huong',
  age: 19,
  gender: 'Nu'
}
*/
/* 
for(x in sv){
    console.log(sv[x]);
}
 */
//sv.sinhVien("Hoa", 18, "Nu"); // thay đổi sinhVien("Hoa", 18, "Nu")

//objectpromt
/* 
//Cach 4: 

let thuoctinh = "name";
let person_cach1 = {
    [thuoctinh]: "HuongDuong"
}
let person_cach2 = {
    name: "HuongDuong"
}
//console.log(person_cach1); // { name: 'HuongDuong' }
 */

// Thay doi primitive && Object 
// Cach 1 
/* 
let HuongDuong = {};
HuongDuong.name = "Tran Huong";
HuongDuong.age = 19;
HuongDuong.gender = "Nu";

//Sao chep primitive - Sao chep gia tri 
let greet = "Hello";
let loiChao = greet;
loiChao = "Xin chao";
console.log(greet, loiChao); // Hello Xin chao

//Sao chep Doi tuong Object - Sao chep tham chieu 
let cloneHD = HuongDuong;
cloneHD.name = "Duong";
console.log(HuongDuong.name, cloneHD.name); // Duong Duong
 */

// Cach 2 : Su dung voi const 
/* 
const pe = 1;
pe = 2; 
console.log(pe); // loi vi KDL const co dinh, khong cho phep thay doi 
 */
const Anh = {
    name: "Ngoc Anh",
    age: 19,
    gender: "Nu",
    address:{
        city:"Ha Noi",
        distinct:"Ha Dong"
    }    
}
//console.log(Anh); // { name: 'Ngoc Anh', age: 19, gender: 'Nu', address: { city: 'Ha Noi', distinct: 'Ha Dong' } }
//Anh.age = 20;
//console.log(Anh); //{ name: 'Ngoc Anh', age: 20, gender: 'Nu', address: { city: 'Ha Noi', distinct: 'Ha Dong' } }
// Su dung const nhung van thay doi duoc ? 
// Object tao 3 vung luu tru cho name, age, gender -> const chi co din hcung, gia tri thi thay doi duoc 
for ( x in Anh){
    console.log(x);
}
//name age gender address 

let copyAnh = Object.assign({}, Anh);
// Voi bien trong Object chu 
copyAnh.age = 20;
console.log(Anh.age, copyAnh.age); // 19 20 
// Voi Object trong Object chu 
copyAnh.address.city = "HCM";
console.log(Anh.address.city, copyAnh.address.city); // HCM HCM 

let copycopyAnh = structuredClone(Anh);
copycopyAnh.address.city = "Hai Phong";
console.log(Anh.address.city, copycopyAnh.address.city); // HCM Hai Phong

