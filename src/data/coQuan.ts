export interface NhanSu {
  chucVu: string;
  hoTen: string;
}

export interface CoQuan {
  id: number;
  tieuDe: string;
  diaChi: string;
  soDienThoai: string;
  nhanSu: NhanSu[];
}

export const coQuan: CoQuan[] = [
  {
    id: 1,
    tieuDe: "TRỤ SỞ: ĐẢNG UỶ - UỶ BAN MTTQ VIỆT NAM XÃ",
    diaChi: "463 Tỉnh lộ 15, xã Phú Hoà Đông, TP.HCM",
    soDienThoai: "0283.8927.750",
    nhanSu: [
      { chucVu: "Bí thư", hoTen: "Nguyễn Văn Nghĩa" },
      { chucVu: "Phó Bí Thư", hoTen: "Lê Thị Ánh Tuyết" },
      { chucVu: "Ủy viên", hoTen: "Trần Văn Đức" },
      { chucVu: "Ủy viên", hoTen: "Nguyễn Thị Hồng" },
      { chucVu: "Ủy viên", hoTen: "Lê Văn Minh" }
    ]
  },
  {
    id: 2,
    tieuDe: "TRỤ SỞ: HỘI ĐỒNG NHÂN DÂN - UỶ BAN NHÂN DÂN",
    diaChi: "463 Tỉnh lộ 15, xã Phú Hoà Đông, TP.HCM",
    soDienThoai: "0283.8927.750",
    nhanSu: [
      { chucVu: "Chủ tịch HĐND", hoTen: "Nguyễn Thị Lan" },
      { chucVu: "Phó Chủ tịch HĐND", hoTen: "Trần Văn Nam" },
      { chucVu: "Chủ tịch UBND", hoTen: "Lê Văn Hùng" },
      { chucVu: "Phó Chủ tịch UBND", hoTen: "Nguyễn Thị Mai" },
      { chucVu: "Ủy viên UBND", hoTen: "Phạm Văn Thành" },
      { chucVu: "Ủy viên UBND", hoTen: "Hoàng Thị Thu" }
    ]
  },
  {
    id: 3,
    tieuDe: "BAN CHỈ HUY CÔNG AN XÃ PHÚ HOÀ ĐÔNG",
    diaChi: "463 Tỉnh lộ 15, xã Phú Hoà Đông, TP.HCM",
    soDienThoai: "0283.8927.750",
    nhanSu: [
      { chucVu: "Trưởng ban", hoTen: "Đại úy Nguyễn Văn Tấn" },
      { chucVu: "Phó Trưởng ban", hoTen: "Trung úy Lê Văn Bình" },
      { chucVu: "Thành viên", hoTen: "Thiếu úy Trần Thị Hoa" },
      { chucVu: "Thành viên", hoTen: "Hạ sĩ Phạm Văn Đông" }
    ]
  }
];