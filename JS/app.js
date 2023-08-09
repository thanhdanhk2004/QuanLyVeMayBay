let carousel = document.getElementById("carousel");
let content = document.getElementById("content");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

next.addEventListener("click", () => {
  //Trượt một khoảng là width
  carousel.scrollBy(width, 0);// 0 mọi thay đổi chỉ theo chiều ngang
  //Khi ở giữa
  if (carousel.scrollWidth !== 0) { //Tong chieu rong cua phan tu carousel
    prev.style.display = "flex";
  }
  //carousel.scrollLef: Khoảng cách từ phân tử bên trái của phần tử cuộn đến phần tử hiện tại của thanh cuộn ngang
  //Khi ở cuối
  if (content.scrollWidth - width <= carousel.scrollLeft + width) { //Tong chieu rong cua noi dung ben trong
    next.style.display = "none";
  }
});
prev.addEventListener("click", () => {
  carousel.scrollBy(-(width), 0);//Truot nguoc lai
  //Khi ở đầu
  if (carousel.scrollLeft - width<= 0) {
    prev.style.display = "none";
  }
  //Khi ở giữa
  if (!content.scrollWidth - width <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;//chiều rộng của nguyên carousel.
//Bắt sự kiện kích thước của sổ thay đổi
window.addEventListener("resize", () => (width = carousel.offsetWidth));
