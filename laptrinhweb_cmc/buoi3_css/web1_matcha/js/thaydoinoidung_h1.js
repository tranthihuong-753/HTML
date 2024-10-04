// Chọn tất cả các thẻ <p> bên trong phần tử có id là #h1 và lưu vào mảng 'quotes'
var data = document.querySelectorAll('#h1 p');
let i = 0; // Biến để theo dõi chỉ số hiện tại của thẻ <p> đang hiển thị

// Sử dụng setInterval để thực hiện hành động lặp lại sau mỗi 3 giây (3000 ms)
setInterval(() => {
    // Xóa class 'active' khỏi thẻ <p> hiện tại để ẩn nó
    data[i].classList.remove('active');
    // Tăng chỉ số hiện tại lên 1, và quay về 0 nếu đã đến cuối mảng
    i = (i + 1) % data.length;
    // Thêm class 'active' vào thẻ <p> tiếp theo để hiển thị nó
    data[i].classList.add('active');}, 3000); // Thực hiện việc thay đổi thẻ <p> mỗi 3 giây
