// Hiệu ứng đổi màu tên khi rê chuột vào
document.getElementById("name").addEventListener("mouseover", function() {
    this.style.color = "#ffdd57";
});
document.getElementById("name").addEventListener("mouseout", function() {
    this.style.color = "white";
});

// Thay đổi nội dung giới thiệu khi click vào
document.getElementById("about-text").addEventListener("click", function() {
    this.innerText = "Tôi luôn đam mê khám phá và ứng dụng công nghệ vào thực tế!";
});

// Hiển thị thông báo khi nhấn vào email
document.getElementById("email").addEventListener("click", function() {
    alert("Hãy liên hệ với tôi qua email: " + this.innerText);
});