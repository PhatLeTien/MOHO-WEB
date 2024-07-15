import sp1 from '../../images/sp-1.webp';
import sp2 from '../../images/sp-2.webp';
import sp3 from '../../images/sp-3.webp';
import sp4 from '../../images/sp-4.webp';
import sp5 from '../../images/sp-5.jpg';
import sp6 from '../../images/sp-6.webp';
import sp7 from '../../images/sp-7.jpg';
import sp8 from '../../images/sp-8.jpg';
import sp9 from '../../images/sp-9.webp';
import sp10 from '../../images/sp-10.webp';
import sp11 from '../../images/sp-11.webp';
import sp12 from '../../images/sp-12.webp';
import sp13 from '../../images/sp-13.webp';
import sp14 from '../../images/sp-14.webp';
import sp15 from '../../images/sp-15.webp';
import sp16 from '../../images/sp-16.webp';

const cardsData = [
  {
    image: sp1,
    title: "Ghế Sofa Gỗ Tràm Tự Nhiên MOHO VLINE 601",
    price: "7,990,000₫",
    discount: "11,490,000₫", // Thêm trường discount vào mỗi đối tượng
    description: (
      <div>
        <p>Kích thước: Dài: 180cm x Rộng 85cm x Cao 69cm.</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Thân ghế: Gỗ tràm tự nhiên</li>
          <li>- Chân ghế: Gỗ cao su tự nhiên</li>
          <li>- Vải sợi tổng hợp kháng khuẩn, chống nhăn, kháng bụi bẩn và nấm mốc</li>
          <li>- Tấm phản: Gỗ công nghiệp Plywood chuẩn CARB-P2 (*)</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn sức khỏe.</p>
      </div>
    )
  },
  {
    image: sp2,
    title: "Giường Ngủ Gỗ Tràm MOHO VLINE 601 Nhiều Kích Thước",
    price: "4,990,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước phủ bì: Dài 212cm x Rộng 136/156/176/196cm x Cao đến đầu giường 92cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Thân giường: Gỗ tràm tự nhiên, Veneer gỗ tràm tự nhiên</li>
          <li>- Chân giường: Gỗ cao su tự nhiên</li>
          <li>- Vải sợi tổng hợp kháng khuẩn, chống nhăn, kháng bụi bẩn và nấm mốc</li>
          <li>- Tấm phản: Gỗ plywood chuẩn CARB-P2 (*)</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp3,
    title: "Tủ Đầu Giường Gỗ MOHO VLINE 801",
    price: "1,990,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 55cm x Rộng 41cm x Cao 51,5cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Thân tủ: Gỗ công nghiệp PB, MDF chuẩn CARB-P2 (*), Veneer gỗ tràm tự nhiên</li>
          <li>- Chân tủ: Gỗ tràm tự nhiên</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp4,
    title: "Kệ Gỗ – Kệ Sách MOHO OSLO 901",
    price: "1,990,000₫",
    discount: "11,490,000₫",
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
    title: "Ghế Sofa Gỗ Cao Su Tự Nhiên MOHO HOBRO 601",
    price: "10,990,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 220cm x Rộng 99 cm x Cao 85cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Gỗ cao su tự nhiên </li>
          <li>- Vải bọc sợi tổng hợp có khả năng chống thấm nước và dầu </li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp6,
    title: "Set Tủ Quần Áo Gỗ MOHO VLINE 601 3 Cánh",
    price: "9,490,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 152cm x Rộng 60cm x Cao 190cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Thân tủ: Gỗ công nghiệp MDF/ MFC phủ Melamine chuẩn CARB-P2 (*)</li>
          <li>- Cửa tủ: Gỗ cao su tự nhiên/ Gỗ thông tự nhiên</li>
          <li>- Thanh treo: Gỗ cao su tự nhiên</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp7,
    title: "Ghế Ăn Gỗ Cao Su Tự Nhiên MOHO NEXO 601",
    price: "1,190,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Biến thể MFDCCC103.B05 (Nâu) Chỉ còn tồn kho tại Hà Nội</p>
        <p>Kích thước: Dài 48cm x Rộng 42cm x Cao 80cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Gỗ cao su tự nhiên</li>
          <li>- Vải bọc Polyester chống nhăn, kháng bụi bẩn và nấm mốc</li>
          <li>- Nệm mút D40</li>
        </ul>
        <p>Chống thấm, cong vênh, trầy xước, mối mọt</p>
      </div>
    )
  },
  {
    image: sp8,
    title: "Bàn Làm Việc Gỗ MOHO FYN 601 Màu Nâu",
    price: "2,190,000₫",
    discount: "11,490,000₫",
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
    image: sp9,
    title: "Giường Ngủ Gỗ Tràm MOHO DALUMD 301",
    price: "5,490,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước phủ bì:</p>
        <ul>
          <li>- Dài 210 cm x Rộng 165/187 cm</li>
          <li>- Cao đến đầu giường 90 cm</li>
          <li>- Gầm giường cao 17cm</li>
        </ul>
        <p>Chất liệu:</p>
        <ul>
          <li>- Thân giường: Gỗ tràm tự nhiên/ MDF veneer tràm</li>
          <li>- Tấm phản: Gỗ plywood chuẩn CARB-P2 (*)</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp10,
    title: "Tủ Kệ Tivi Gỗ MOHO OSLO 201",
    price: "2,290,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 140/160/180 cm x Rộng 40 cm x Cao 60 cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Thân tủ: Gỗ công nghiệp PB chuẩn CARB-P2 (*), Sơn phủ UV vân gỗ sồi tự nhiên</li>
          <li>- Chân tủ: Gỗ cao su tự nhiên</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp11,
    title: "Ghế Ăn Gỗ Cao Su Tự Nhiên MOHO OSLO 601",
    price: "1,090,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 50cm x Rộng 51cm x Cao đến đệm ngồi/lưng tựa 41cm/81cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Gỗ cao su tự nhiên</li>
          <li>- Vải bọc polyester chống nhăn, kháng bụi bẩn và nấm mốc</li>
        </ul>
        <p>Chống thấm, cong vênh, trầy xước, mối mọt</p>
        <p>Mã sản phẩm: MFDCCC801.B08 - Ghế ăn Oslo Nâu Đệm xám đậm chỉ còn hàng tại Hà Nội</p>
      </div>
    )
  },
  {
    image: sp12,
    title: "Ghế Sofa Góc Chữ L Gỗ Cao Su Tự Nhiên MOHO VLINE 601",
    price: "12,330,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước:</p>
        <ul>
          <li>- Ghế sofa: Dài: 180cm x Rộng 85cm x Cao 69cm</li>
          <li>- Ghế sofa góc: Dài 140cm x Rộng 60cm x Cao 69cm</li>
        </ul>
        <p>Chất liệu:</p>
        <ul>
          <li>- Thân ghế: Gỗ tràm tự nhiên (Ghế sofa Nâu)</li>
          <li>- Thân ghế: Gỗ cao su tự nhiên (Ghế sofa Màu tự nhiên)</li>
          <li>- Chân ghế: Gỗ cao su tự nhiên</li>
          <li>- Vải sợi tổng hợp có khả năng chống thấm nước và dầu</li>
          <li>- Tấm phản: Gỗ công nghiệp Plywood chuẩn CARB-P2 (*) </li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn sức khỏe.</p>
        <p>Chống thấm, cong vênh, trầy xước, mối mọt</p>
      </div>
    )
  },
  {
    image: sp13,
    title: "Ghế Sofa Gỗ Tràm Tự Nhiên MOHO KOLDING 701",
    price: "11,990,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 200cm x Rộng 86cm x Cao 79.5cm</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Gỗ tràm tự nhiên </li>
          <li>- Chân ghế làm bằng sắt sơn tĩnh điện</li>
          <li>- Vải bọc sợi tổng hợp có khả năng chống thấm nước và dầu </li>
          <li>- Tấm phản: Gỗ công nghiệp Plywood chuẩn CARB-P2 (*) </li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn sức khỏe.</p>
      </div>
    )
  },
  {
    image: sp14,
    title: "Bàn Sofa - Bàn Cafe - Bàn Trà Gỗ Thông MOHO VLINE 501",
    price: "1,790,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 100cm x Rộng 50cm x Cao 40cm</p>
        <p>Chất liệu: Gỗ thông nguyên khối, màu gỗ walnut</p>
        <p>Chống thấm, cong vênh, trầy xước, mối mọt</p>
      </div>
    )
  },
  {
    image: sp15,
    title: "Tủ Quần Áo Gỗ 2 Cánh MOHO VIENNA 201 4 Màu",
    price: "5,290,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 100cm x Rộng 60cm x Cao 2m1</p>
        <p>Chất liệu:</p>
        <p>Tủ quần áo VIENNA Tay Nắm:</p>
        <ul>
          <li>- Cánh tủ + Thân tủ: Gỗ công nghiệp MFC phủ Melamin chuẩn CARB-P2 (*)</li>
          <li>- Lưng tủ: Gỗ công nghiệp MDF phủ Melamin chuẩn CARB-P2 (*)</li>
          <li>- Thanh treo: Hợp kim nhôm, chống gỉ sét</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  },
  {
    image: sp16,
    title: "Bàn Làm Việc Gỗ MOHO WORKS 701",
    price: "1,490,000₫",
    discount: "11,490,000₫",
    description: (
      <div>
        <p>Kích thước: Dài 120/140cm x Rộng 62cm x Cao 72cm </p>
        <p>Trọng lượng chịu tải: 50~70 kg, tối đa 100kg khi phân phối đều khối lượng trên mặt bàn.</p>
        <p>Chất liệu:</p>
        <ul>
          <li>- Mặt bàn: Gỗ công nghiệp MFC cao cấp chuẩn CARB-P2 (*)</li>
          <li>- Chân bàn: Chân sắt sơn tĩnh điện</li>
        </ul>
        <p>(*) Tiêu chuẩn California Air Resources Board xuất khẩu Mỹ, đảm bảo gỗ không độc hại, an toàn cho sức khỏe</p>
      </div>
    )
  }
];

export default cardsData;
