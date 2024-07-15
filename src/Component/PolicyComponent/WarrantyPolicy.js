import React from 'react';

function WarrantyPolicy() {
  return (
    <div style={{marginTop: '10vw', paddingLeft: '24vw', paddingRight: '20vw', fontFamily: 'Arial, sans-serif'}}>
      <h2>Chính Sách Bảo Hành & Bảo Trì</h2>
      <ol>
        <li>
          <strong>Thời hạn bảo hành:</strong> 2 năm tính từ ngày giao hàng thành công.
        </li>
        <li>
          <strong>Phạm vi bảo hành:</strong>
          <ul>
            <li>
              MOHO bảo hành miễn phí cho các sản phẩm bị hư hỏng do lỗi chất liệu (không bao gồm yếu tố màu sắc do mỗi đợt sản xuất màu gỗ, vân gỗ và mắt gỗ có thể chênh lệch đôi chút vì đặc tính tự nhiên của gỗ), lỗi kỹ thuật và lỗi lắp đặt từ phía MOHO.
            </li>
            <li>
              MOHO không bảo hành cho các trường hợp:
              <ul>
                <li>Thiệt hại do thiên tai, cháy nổ,… các trường hợp bất khả kháng.</li>
                <li>Quý khách hàng tự vận chuyển hoặc sử dụng đơn vị vận chuyển ngoài, tự lắp đặt, sửa chữa và thay đổi kết cấu ban đầu của sản phẩm.</li>
                <li>Quý khách hàng sử dụng sản phẩm không đúng cách theo hướng dẫn sử dụng.</li>
                <li>...</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Chính sách bảo trì:</strong> đối với các sản phẩm không nằm trong phạm vi bảo hành hoặc hết thời hạn bảo hành 2 năm, MOHO vẫn nhận bảo trì trọn đời sản phẩm với chi phí hợp lý tùy theo tình trạng sản phẩm.
        </li>
      </ol>
      <p>
        - Quyết định của Nội Thất MOHO là quyết định cuối cùng và có thể thay đổi mà không cần thông báo trước.
      </p>
      <p>
        * Các chính sách này không áp dụng cho các sản phẩm trong danh mục Đồ Trang Trí.
      </p>
      <p>
        ** Bảo hành 01 năm khung ghế, mâm và cần cho Ghế Văn Phòng.
      </p>
    </div>
  );
}

export default WarrantyPolicy;
