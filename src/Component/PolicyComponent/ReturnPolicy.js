import React from 'react';

function ReturnPolicy() {
  return (
    <div style={{marginTop: '10vw', paddingLeft: '24vw', paddingRight: '20vw', fontFamily: 'Arial, sans-serif'}}>
      <h2>Chính Sách Đổi Trả</h2>
      <ol>
        <li>
          <strong>Chính sách đổi hàng:</strong> trong vòng 3 ngày tính từ ngày giao hàng thành công, không tính chủ nhật và các ngày lễ, tết; quý khách hàng được đổi sản phẩm miễn phí khi đủ 2 điều kiện:
          <ul>
            <li>
              Sản phẩm bị hư hỏng do lỗi chất liệu (không bao gồm yếu tố màu sắc do mỗi đợt sản xuất màu gỗ, vân gỗ và mắt gỗ có thể chênh lệch đôi chút vì đặc tính tự nhiên của gỗ), lỗi kỹ thuật và lỗi lắp đặt từ phía MOHO.
            </li>
            <li>
              Đổi sang sản phẩm khác bằng giá trị hoặc có giá trị cao hơn sản phẩm đã giao.
            </li>
          </ul>
          Sau 3 ngày tính từ ngày giao hàng thành công, MOHO sẽ áp dụng sang chính sách bảo hành cho các sản phẩm bị hư hỏng do lỗi chất liệu, lỗi kỹ thuật và lỗi lắp đặt từ phía MOHO, không áp dụng đổi sang sản phẩm khác.
        </li>
        <li>
          <strong>Chính sách trả hàng:</strong> quý khách hàng chỉ được trả hàng tại thời điểm giao hàng nếu sản phẩm không đúng như thông tin đặt hàng do quý khách hàng đặt nhầm hoặc thay đổi ý kiến, nhưng phải thanh toán phí giao hàng cho MOHO là 300,000đ và chi phí lắp đặt tùy theo sản phẩm cho các khu vực miễn phí giao hàng và lắp đặt.
        </li>
      </ol>
      <p>
        - Quyết định của Nội Thất MOHO là quyết định cuối cùng và có thể thay đổi mà không cần thông báo trước.
      </p>
      <p>
        - Chính sách này không áp dụng cho các sản phẩm trong danh mục Đồ Trang Trí.
      </p>
    </div>
  );
}

export default ReturnPolicy;
