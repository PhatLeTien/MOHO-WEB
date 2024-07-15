import React from 'react';

function MOHOmie() {
  return (
    <div style={{marginTop: '10vw', paddingLeft: '10vw', paddingRight: '5vw', fontFamily: 'Arial, sans-serif'}}>
      <h2>Khách Hàng Thân Thiết – MOHOmie</h2>
      <ol>
        <li>
          <strong>Cách tích điểm:</strong>
          <ul>
            <li>100,000đ tương đương với 1 điểm. Điểm sẽ tự động được tích khi đơn hàng đã thanh toán thành công.</li>
            <li>Khi tích đủ 20 điểm tương đương với 2,000,000đ; quý khách hàng sẽ trở thành Khách Hàng Thân Thiết – MOHOmie của MOHO.</li>
          </ul>
        </li>
        <li>
          <strong>Hạng khách hàng và ưu đãi:</strong>
          <ul>
            <li>MOHOmie Bronze (Hạng Đồng): tích lũy điểm đạt 20 điểm tương đương với 2,000,000đ.</li>
            <li>MOHOmie Silver (Hạng Bạc): tích lũy điểm đạt 50 điểm tương đương với 5,000,000đ. Giảm giá 5% cho tất cả đơn hàng.</li>
            <li>MOHOmie Gold (Hạng Vàng): tích lũy điểm đạt 150 điểm tương đương với 15,000,000đ. Giảm giá 7% cho tất cả đơn hàng.</li>
            <li>MOHOmie Diamond (Hạng Kim Cương): tích lũy điểm đạt 500 điểm tương đương với 50,000,000đ. Giảm giá 10% cho tất cả đơn hàng.</li>
          </ul>
        </li>
        <li>
          <strong>Lưu ý:</strong>
          <ul>
            <li>Ưu đãi giảm giá của hạng khách hàng không áp dụng đồng thời với các chương trình khuyến mại khác.</li>
            <li>Điểm tích lũy sẽ bị xóa sau 365 ngày quý khách hàng không phát sinh đơn hàng mới hoặc có phát sinh đơn hàng mới nhưng không giao hàng thành công đơn hàng đó.</li>
          </ul>
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

export default MOHOmie;
