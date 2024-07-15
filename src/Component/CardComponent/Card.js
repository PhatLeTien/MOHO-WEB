import React from 'react';
import '../CardComponent/CardStyle.css'; // File CSS để tùy chỉnh giao diện card
import cardsData from '../CardComponent/CardData'; // Import tệp CardData.js

const Card = () => {
  return (
    <div className="header-container">
      <div className="site-animation">
        <div className="green-month">FAMILY MONTH -50%</div>
        <div className="see-more">
          <a href="/khuyen-mai">Xem thêm</a>
        </div>
      </div>
      <div className="cards-container">
        {cardsData.map((card, index) => ( // Sửa thành cardsData.map và thêm index để sử dụng làm key
          <div className="card" key={index}> {/* Sửa key thành index */}
            <a href={`/card-detail/${index}`}> {/* Sửa link href */}
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <div>
                  <p className="card-price">{card.price}</p>
                  <p className="card-discount">{card.discount}</p>
                </div>
                {/* Nếu muốn hiển thị mô tả, bạn cần cung cấp dữ liệu mô tả trong cardData */}
                {/* <p className="card-description">{card.description}</p> */}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
