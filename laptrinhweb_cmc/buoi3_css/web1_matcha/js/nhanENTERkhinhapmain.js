function validateEmail(event) {
    // Kiểm tra xem phím Enter có được nhấn không
    if (event.key === "Enter") {
        const emailInput = document.getElementById("in").value;
        // Kiểm tra cấu trúc email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (emailPattern.test(emailInput)) {
            alert("Bạn đã đăng ký thành công!");
            // Reset lại trang web
            location.reload();
        } else {
            alert("Địa chỉ email không hợp lệ! Vui lòng nhập đúng định dạng @gmail.com.");
        }
    }
}