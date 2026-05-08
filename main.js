/**
 * Bài 1:
 * Đầu vào: Nhập điểm chuẩn, điểm 3 môn và chon khu vực, đối tượng ưu tiên
 *
 * Xử lý: Nếu có điểm nào 0 => rớt (kết thúc)
 * Kiểm tra có thuộc khu vực, đối tượng ưu tiên không
 * Tổng điểm 3 môn và điểm điểm ưu tiên >= điểm chuẩn thì đậu
 * Ngược lại thì rớt
 *
 * Đầu ra: in thông báo đậu rớt và tổng điểm nhận được
 */
const btnTinh1 = document.getElementById("btnTinh1");
btnTinh1.onclick = function () {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const diem1 = document.getElementById("diem1").value * 1;
  const diem2 = document.getElementById("diem2").value * 1;
  const diem3 = document.getElementById("diem3").value * 1;

  let rs1 = "Bạn đã rớt vì có môn điểm 0!";
  let diemTong = 0;
  if (diem1 !== 0 && diem2 !== 0 && diem3 !== 0) {
    const khuVuc = document.getElementById("khuVuc").value;
    const doiTuong = document.getElementById("doiTuong").value * 1;
    let diemUuTien = 0;

    switch (khuVuc) {
      case "A":
        diemUuTien += 2;
        break;
      case "B":
        diemUuTien += 1;
        break;
      case "C":
        diemUuTien += 0.5;
        break;
    }
    switch (doiTuong) {
      case 1:
        diemUuTien += 2.5;
        break;
      case 2:
        diemUuTien += 1.5;
        break;
      case 3:
        diemUuTien += 1;
        break;
    }
    diemTong = diem1 + diem2 + diem3 + diemUuTien;
    if (diemTong >= diemChuan) {
      rs1 = `Bạn đã đậu với tổng điểm là ${diemTong}`;
    } else {
      rs1 = `Bạn đã rớt! với tổng điểm là ${diemTong}`;
    }
  }
  const p_Info1 = document.getElementById("p_Info1");
  p_Info1.innerText = rs1;
};

/**
 * Bài 2 tính tiền điện
 * Đầu vào: nhập tên chủ hộ và số Kw
 *
 * Xử lý:
 * 0-50Kw lấy 500d/kw
 * 51-100 lấy 650d/Kw
 * 101-150 lấy 850d/Kw
 * 151-200 lấy 1100d/Kw
 * còn lại lấy 1300d/Kw
 *
 * Đầu ra in tên và số tiền phải trả
 */
const btnTinh2 = document.getElementById("btnTinh2");
btnTinh2.onclick = function () {
  const tenChuHo = document.getElementById("tenChuHo").value;
  const soKw = document.getElementById("soKw").value * 1;

  let tongTien2 = 0;
  let rs2 = "";

  if (soKw <= 50) {
    tongTien2 = soKw * 500;
  } else if (soKw <= 100) {
    tongTien2 = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 150) {
    tongTien2 = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 200) {
    tongTien2 = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
  } else if (soKw > 200) {
    tongTien2 =
      50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (soKw - 200) * 1300;
  }
  rs2 = `Chủ hộ ${tenChuHo} số tiền điện phải trả: ${tongTien2.toLocaleString("vi-VN")}đ`;
  const p_Info2 = document.getElementById("p_Info2");
  p_Info2.innerText = rs2;
};
/**
 * Bài 3
 *
 */
const btnTinh3 = document.getElementById("btnTinh3");
btnTinh3.onclick = function () {
  const tongThuNhap3 = document.getElementById("tongThuNhap3").value * 1;
  const soNguoi3 = document.getElementById("soNguoi3").value * 1;

  let thuNhapChiuThue = tongThuNhap3 - 4 - soNguoi3 * 1.6;
  if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60) {
    thuNhapChiuThue = (thuNhapChiuThue * 5) / 100;
  } else if (thuNhapChiuThue <= 120) {
    thuNhapChiuThue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    thuNhapChiuThue = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue <= 384) {
    thuNhapChiuThue =
      60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue <= 624) {
    thuNhapChiuThue =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      (thuNhapChiuThue - 384) * 0.25;
  } else if (thuNhapChiuThue <= 960) {
    thuNhapChiuThue =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      (thuNhapChiuThue - 624) * 0.3;
  } else if (thuNhapChiuThue > 960) {
    thuNhapChiuThue =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      336 * 0.3 +
      (thuNhapChiuThue - 960) * 0.35;
  }
  const hoTen3 = document.getElementById("hoTen3").value;
  let rs3 = `${hoTen3} phải đóng thuế thu nhập là: ${thuNhapChiuThue.toLocaleString("vi-VN")}tr`;
  const p_Info3 = document.getElementById("p_Info3");
  p_Info3.innerText = rs3;
};

/**
 * Bài 4
 */
const nhaDan = document.getElementById("nhaDan");
const doanhNghiep = document.getElementById("doanhNghiep");
const inputSoKetNoi = document.getElementById("soKetNoi");
const inputSoKenh  = document.getElementById("soKenh");

inputSoKetNoi .style.display = "none";

nhaDan.onclick = function () {
  inputSoKetNoi .style.display = "none";
};
doanhNghiep.onclick = function () {
  inputSoKetNoi .style.display = "block";
};
const btnTinh4 = document.getElementById("btnTinh4");
btnTinh4.onclick = function () {
  const maKhachHang = document.getElementById("maKhachHang").value;
  const soKetNoi = inputSoKetNoi.value * 1;
  const soKenh = inputSoKenh .value * 1;
  let tongTien4 = 0;
  let rs4 = "";
  if(nhaDan.checked){
    // console.log("Nha dan!");
    tongTien4 = 4.5 + 20.5 + (soKenh * 7.5);
    rs4 = `Người dân có MKH: ${maKhachHang} tiền cáp là: ${tongTien4}$`;
  }else{
    // console.log("Doanh Nghiep!");
    if(soKetNoi <= 10){
      tongTien4 = 15 + 75 + (soKenh * 50);
    }else{
      tongTien4 = 15 + 75 + (soKetNoi - 10) * 5 + (soKenh * 50);
    }
    rs4 = `Doanh nghiệp có MKH: ${maKhachHang} tiền cáp là: ${tongTien4}$`;
  }
  const p_Info4 = document.getElementById("p_Info4");
  p_Info4.innerText = rs4;
};
