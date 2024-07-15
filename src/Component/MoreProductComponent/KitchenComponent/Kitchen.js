import React from 'react';
import './KitchenStyle.css'; // File CSS để tùy chỉnh giao diện card
import KitchenData from './KitchenData';

const Kitchen = () => {
    return (
        <div className="sales-container">
            <div className="site-animation">
                <div className="family-month">Tủ Bếp MOHO 2024</div>
                {/* <div className="see-more">Xem thêm</div> */}
            </div>
            <div className="cards-container">
                {KitchenData.map((card, index) => ( // Sửa thành cardsData.map và thêm index để sử dụng làm key
                    <div className="card" key={index}> {/* Sửa key thành index */}
                        <a href={`/kitchen-detail/${index}`}> {/* Sửa link href */}
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

export default Kitchen;