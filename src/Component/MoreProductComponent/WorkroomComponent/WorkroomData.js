import sp1 from '../../../images/blv-1.webp';
import sp2 from '../../../images/blv-2.webp';
import sp3 from '../../../images/blv-3.webp';
import sp4 from '../../../images/blv-4.webp';
import sp5 from '../../../images/blv-5.webp';
import sp6 from '../../../images/blv-6.webp';
import sp7 from '../../../images/blv-7.webp';
import sp8 from '../../../images/blv-8.webp';
import sp9 from '../../../images/blv-9.webp';
import sp10 from '../../../images/blv-10.webp';
import sp11 from '../../../images/blv-11.webp';
import sp12 from '../../../images/blv-12.webp';
import sp13 from '../../../images/blv-13.webp';
import sp14 from '../../../images/blv-14.webp';
import sp15 from '../../../images/blv-15.webp';
import sp16 from '../../../images/blv-16.jpg';
import sp17 from '../../../images/blv-17.webp';
import sp18 from '../../../images/blv-18.webp';

const WorkroomData = [
  {
    image: sp1,
    title: "Kệ Gỗ – Kệ Sách MOHO OSLO 901",
    price: "1,690,000₫ ",
    discount: "2,490,000₫", // Thêm trường discount vào mỗi đối tượng
    description: (
      <div>
        <p>Kích thước: Dài 80cm x Rộng 30cm x Cao 160cm</p>
        <p>Chất liệu: Gỗ công nghiệp PB chuẩn CARB-P2(*), Sơn phủ UV</p>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp2,
    title: "Bàn Làm Việc Gỗ MOHO VLINE 601 Màu Nâu",
    price: "1,590,000₫",
    discount: "2,990,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 110cm x Rộng 55cm x Cao 74cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Mặt bàn: Gỗ công nghiệp PB chuẩn CARB-P2 (*), Veneer gỗ tràm tự nhiên</li>
          <li>- Chân bàn: Gỗ tràm tự nhiên</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp3,
    title: "Bàn Làm Việc Gỗ MOHO VLINE 601 Màu Tự Nhiên",
    price: "1,590,000₫",
    discount: "2,990,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 110cm x Rộng 55cm x Cao 74cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Mặt bàn: Gỗ công nghiệp PB chuẩn CARB-P2 (*), Veneer gỗ sồi tự nhiên</li>
          <li>- Chân bàn: Gỗ cao su tự nhiên</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp4,
    title: "Bàn Làm Việc Gỗ MOHO WORKS 701",
    price: "1,490,000₫",
    discount: "2,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 80cm x Rộng 30cm x Cao 160cm</p>
        <p>Chất liệu:  Gỗ công nghiệp PB chuẩn CARB-P2(*), Sơn phủ UV</p>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn sức khỏe.</p>
      </div>
    )
  },
  {
    image: sp5,
    title: "Hộc Tủ 3 Ngăn Lưu Trữ Tài Liệu Có Khóa MOHO WORKS 201",
    price: "990,000₫ ",
    discount: "1,890,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 120/140cm x Rộng 62cm x Cao 72cm </p>
        <p>Trọng lượng chịu tải: 50~70 kg, tối đa 100kg khi phân phối đều khối lượng trên mặt bàn. </p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Mặt bàn: Gỗ công nghiệp MFC cao cấp chuẩn CARB-P2 (*) </li>
          <li>- Chân bàn: Chân sắt sơn tĩnh điện </li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp6,
    title: "Kệ Gỗ – Kệ Sách MOHO OSLO 902",
    price: "1,990,000₫",
    discount: "2,790,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 80cm x Rộng 32cm x Cao 160cm</p>
        <p>Chất liệu: Chất liệu: Gỗ công nghiệp PB chuẩn CARB-P2(*), Sơn phủ UV</p>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp7,
    title: "Ghế Xoay Văn Phòng Tay Gập Thông Minh MOHO RIGA 701",
    price: "1,190,000₫",
    discount: "1,690,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 52cm x Rộng 65cm x Cao 94-101cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Khung ghế: nhựa cao cấp</li>
          <li>- Tựa lưng và nệm ghế: vải lưới mềm mại thoáng khí</li>
        </ul>
      </div>
    )
  },
  {
    image: sp8,
    title: "Ghế Văn Phòng Chân Xoay MOHO MAJOR 701",
    price: "1,190,000₫ ",
    discount: "1,890,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 56cm x Rộng 42cm x Cao 92-106cm</p>
        <p>Kích thước hộc kéo: Dài 23cm x Rộng 40cm x Cao 7cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Khung ghế: nhựa cao cấp</li>
          <li>- Tựa lưng và nệm ghế: vải lưới mềm mại thoáng khí</li>
          <li>- Chân ghế: chân xoay inox cao cấp</li>
        </ul>
      </div>
    )
  },
  {
    image: sp9,
    title: "Bàn Máy Tính Gỗ MOHO WORKS 702",
    price: "1,690,000₫",
    discount: "2,790,000₫",
    description: (
      <div>
        <p>Kích thước:</p>
        <ul>
          <li>- Bàn và chân bài: Dài 120cm x Rộng 62cm x Cao 72cm </li>
          <li>- Giá đỡ ổ điện: Dài 33cm x Rộng 9.74cm x Sâu 12cm</li>
          <li>- Trọng lượng chịu tải: 50~70 kg, tối đa 100kg khi phân phối đều khối lượng trên mặt bàn.</li>
        </ul>
        <p>Chất liệu:</p>
        <ul>
          <li>- Mặt bàn: Gỗ công nghiệp MFC cao cấp chuẩn CARB-P2 (*)</li>
          <li>- Chân bàn, giá đỡ: Sắt sơn tĩnh điện</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp10,
    title: "Bàn Làm Việc Gỗ MOHO FYN 601 Màu Nâu",
    price: "1,990,000₫",
    discount: "3,290,000₫",
    description: (
      <div>
        <p>Kích thước bàn: Dài 120cm x Rộng 60cm x Cao 74cm</p>
        <p>Kích thước hộc kéo: Dài 23cm x Rộng 40cm x Cao 7cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>Mặt bàn: Gỗ công nghiệp PB chuẩn CARB-P2 (*), Veneer gỗ tràm tự nhiên</li>
          <li>Chân bàn: Gỗ tràm tự nhiên</li>
          <li>Cụm hộc tủ: Gỗ công nghiệp PB chuẩn CARB-P2 (*), phần mặt hộc tủ được dán veneer gỗ tràm tự nhiên</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp11,
    title: "Bàn Làm Việc Gỗ Có Kệ MOHO VLINE 602 Màu Nâu",
    price: "1,790,000₫",
    discount: "3,190,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 116cm x Rộng 30/51cm x Cao 74/136cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Mặt bàn: Gỗ công nghiệp MDF chuẩn CARB-P2 (*)</li>
          <li>- Chân bàn: Gỗ cao su tự nhiên</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp12,
    title: "Ghế Xoay Văn Phòng Ngả Lưng MOHO JEFE 701",
    price: "2,190,000₫",
    discount: "2,990,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 47cm x Rộng 65cm x Cao 108-126cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Khung ghế: nhựa cao cấp</li>
          <li>- Tựa lưng và nệm ghế: vải lưới mềm mại thoáng khí</li>
          <li>- Chân xoay: inox</li>
        </ul>
        <p>Ghế có yếu tố công thái học - Ergonomic</p>
      </div>
    )
  },
  {
    image: sp13,
    title: "Kệ Để Sách 3 Tầng MOHO WORKS 703",
    price: "1,390,000₫ ",
    discount: "2,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 80cm x Rộng 32cm x Cao 106cm </p>
        <p>Chất liệu:</p>
        <ul>
          <li>Gỗ công nghiệp PB cao cấp chuẩn CARB-P2 (*) </li>
          <li>Khung sắt sơn tĩnh điện chống gỉ, thấm nước.</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn sức khỏe.</p>
      </div>
    )
  },
  {
    image: sp14,
    title: "Bàn Làm Việc Gỗ Có Kệ MOHO VLINE 602 Màu Tự Nhiên",
    price: "1,790,000₫ ",
    discount: "3,190,000₫",
    description: (
      <div>
        <p>Kích thước:Dài 116cm x Rộng 30/51cm x Cao 74/136cm </p>
        <p>Chất liệu: </p>
        <ul>
            <li>- Mặt bàn: Gỗ công nghiệp MDF chuẩn CARB-P2 (*)</li>
            <li>- Chân bàn: Gỗ cao su tự nhiên</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp15,
    title: "Kệ Để Sách 5 Tầng MOHO WORKS 701",
    price: "2,490,000₫ ",
    discount: "4,790,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 80cm x Rộng 32cm x Cao 174cm</p>
        <p>Chất liệu:</p>
        <p>Chất liệu:</p>
        <ul>
          <li>Gỗ công nghiệp PB cao cấp chuẩn CARB-P2 (*)</li>
          <li>Khung sắt sơn tĩnh điện chống gỉ, thấm nước.</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp16,
    title: "Bàn Làm Việc Gỗ MOHO FYN 601 Màu Tự Nhiên",
    price: "1,990,000₫",
    discount: "3,290,000₫",
    description: (
      <div>
        <p>Kích thước bàn: Dài 120cm x Rộng 60cm x Cao 74cm</p>
        <p>Kích thước hộc kéo: Dài 23cm x Rộng 40cm x Cao 7cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>Mặt bàn: Gỗ công nghiệp PB chuẩn CARB-P2 (*), Veneer gỗ sồi tự nhiên</li>
          <li>Chân bàn: Gỗ sồi tự nhiên</li>
          <li>Cụm hộc tủ: Gỗ công nghiệp PB chuẩn CARB-P2 (*), phần mặt hộc tủ được dán veneer gỗ sồi tự nhiên</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp17,
    title: "Kệ Để Sách Tủ Khóa MOHO WORKS 702",
    price: "3,190,000₫",
    discount: "5,390,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 80cm x Rộng 32cm x Cao 174cm </p>
        <p>Chất liệu:</p>
        <ul>
          <li>Gỗ công nghiệp PB cao cấp chuẩn CARB-P2 (*)</li>
          <li>Khung sắt sơn tĩnh điện chống gỉ, thấm nước.</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp18,
    title: "Ghế Văn Phòng Chân Quỳ MOHO CALLOSO 701",
    price: "1,090,000₫",
    discount: "1,390,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 50cm x Rộng 47,5cm x Cao 91cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Khung ghế: nhựa cao cấp </li>
          <li>- Tựa lưng và nệm ghế: vải lưới mềm mại thoáng khí </li>
          <li>- Chân ghế: thép sơn tĩnh điện</li>
        </ul>
      </div>
    )
  }
];

export default WorkroomData;
